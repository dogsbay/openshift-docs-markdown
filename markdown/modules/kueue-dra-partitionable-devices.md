{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the partitionable devices {id="kueue-dra-partitionable-devices_{{ context }}"}

You can configure {{ kueue_name }} to manage quota for partitionable devices based on actual device capacity rather than device count. Partitionable devices, such as NVIDIA Multi-Instance GPU (MIG) capable GPUs, allow a single GPU to be dynamically subdivided into smaller partitions. {._abstract}

When counter-based quota is configured, {{ kueue_name }} charges quota in capacity units such as GPU memory rather than counting whole devices. For example, a `1g.5gb` MIG partition on an A100-40GB charges `4864Mi` of GPU memory quota, while a whole GPU charges `40320Mi`.


:::note

To use partitionable devices, your cluster must be running {{ product_title }} 4.22 or later and must have the `CustomNoUpgrade` feature set enabled with explicit `DRAPartitionableDevices` gate enablement.

:::


**Prerequisites**

*   You have cluster administrator permissions.
*   You have installed {{ kueue_name }} by using the {{ kueue_op }}.
*   You have created a `Kueue` custom resource (CR).
*   Your cluster is running {{ product_title }} 4.22 or later.
*   A DRA driver that publishes `consumesCounters` in `ResourceSlice` objects is installed, for example, `nvidia-dra-driver`. You can verify that the DRA driver is publishing device information by running the following command:
    ```terminal
    $ oc get resourceslices
    ```

    If the command returns one or more `ResourceSlice` objects, the DRA driver is running.
*   At least one `DeviceClass` object exists in the cluster. You can verify this by running the following command:
    ```terminal
    $ oc get deviceclass
    ```
*   MIG is enabled on the GPU hardware.
*   You have enabled the `DRAPartitionableDevices` Kubernetes feature gate by adding the `CustomNoUpgrade` feature set to the `FeatureGate` CR named `cluster`, as shown in the following example:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: FeatureGate
    metadata:
      name: cluster
    spec:
      featureSet: CustomNoUpgrade
      customNoUpgrade:
        enabled:
        - DRAPartitionableDevices
    ```

    :::warning

    Enabling the `CustomNoUpgrade` feature set on your cluster cannot be undone and prevents minor version updates. This feature set is not supported on production clusters. For information about enabling feature gates, see "Enabling features using feature gates".
    
    :::


**Procedure**

1.  Verify that your DRA driver publishes counter data by running the following command:
    ```terminal
    $ oc get resourceslices -o jsonpath='{range .items[*]}{.spec.driver}{"\t"}{range .spec.devices[*]}{.name}: {.consumesCounters}{"\n"}{end}{end}'
    ```
    ```terminal title="Example output"
    gpu.nvidia.com	gpu-0: [{"counterSet":"shared","counters":{"memory":{"value":"40Gi"}}}]
    ```

    If the output does not show `consumesCounters` data, verify that your DRA driver version supports partitionable devices and that MIG is enabled on the GPU hardware.
1.  Configure counter-based quota by adding a `deviceClassMappings` entry with a `sources` section to the `config.resources` section of the {{ kueue_name }} CR, as shown in the following example:
    ```yaml
    apiVersion: kueue.openshift.io/v1
    kind: Kueue
    metadata:
      name: cluster
      namespace: openshift-kueue-operator
    spec:
      config:
        resources:
          deviceClassMappings:
          - name: gpu.memory 
            deviceClassNames: 
            - gpu.nvidia.com
            - mig.nvidia.com
            sources: 
            - type: Counter
              counter:
                name: memory 
                driver: gpu.nvidia.com
                deviceSelector: 
                  type: CEL
                  cel:
                    expression: "device.driver == 'gpu.nvidia.com'"
    # ...
    ```

    where:

    `spec.config.resources.deviceClassMappings.name`
    :   The logical resource name used in `ClusterQueue` quotas. When counter-based sources are configured, quota is charged in capacity units rather than device count.


`spec.config.resources.deviceClassMappings.deviceClassNames`
:   The `DeviceClass` names that map to this resource. Include both the whole-GPU class (`gpu.nvidia.com`) and the MIG class (`mig.nvidia.com`).


`spec.config.resources.deviceClassMappings.sources`
:   Defines how {{ kueue_name }} computes the quota charge.


`spec.config.resources.deviceClassMappings.sources.counter.name`
:   The counter name must match a counter key published by the DRA driver in `ResourceSlice` devices.


`spec.config.resources.deviceClassMappings.sources.counter.deviceSelector`
:   Scopes which devices are eligible for counter-based quota accounting.

    :::note

    The {{ kueue_name }} Operator automatically enables the required {{ kueue_name }} feature gates when it detects the `DRAPartitionableDevices` Kubernetes feature gate and `sources` are configured in `deviceClassMappings`. No manual {{ kueue_name }} feature gate configuration is required.
    
    :::


1.  Create a `ClusterQueue` object with counter-based quota. Set the quota in capacity units rather than device count. Create a file called `pd-queues.yaml` with the following content:
    ```yaml title="Example quota configuration for partitionable devices"
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ResourceFlavor
    metadata:
      name: "default-flavor"
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: ClusterQueue
    metadata:
      name: "cluster-queue"
    spec:
      namespaceSelector: {}
      resourceGroups:
      - coveredResources: ["cpu", "memory", "gpu.memory"] 
        flavors:
        - name: "default-flavor"
          resources:
          - name: "cpu"
            nominalQuota: 40
          - name: "memory"
            nominalQuota: 200Gi
          - name: "gpu.memory" 
            nominalQuota: 800Gi
    ---
    apiVersion: v1
    kind: Namespace
    metadata:
      name: team-a
      labels:
        kueue.openshift.io/managed: "true"
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: LocalQueue
    metadata:
      namespace: "team-a"
      name: "user-queue"
    spec:
      clusterQueue: "cluster-queue"
    ```

    where:

    `spec.resourceGroups.coveredResources`
    :   The `gpu.memory` entry must match the `name` value in `deviceClassMappings`.


`spec.resourceGroups.flavors.resources.name`
:   Specify `"gpu.memory"` to set the total GPU memory quota. For example, `800Gi` accommodates twenty A100-40GB GPUs or equivalent MIG partitions.

    :::note

    When `ClusterQueue` objects share a cohort, ensure all queues use the same unit scale for counter resources. {{ kueue_name }} does not validate unit consistency across `ClusterQueue` objects.
    
    :::


1.  Apply the quota configuration by running the following command:
    ```terminal
    $ oc apply -f pd-queues.yaml
    ```
1.  Create a workload that requests a MIG partition by creating a file called `pd-job.yaml`, as shown in the following example:
    ```yaml title="Example workload requesting a MIG partition"
    apiVersion: resource.k8s.io/v1
    kind: ResourceClaimTemplate
    metadata:
      namespace: team-a
      name: gpu-partition
    spec:
      spec:
        devices:
          requests:
          - name: gpu
            exactly:
              deviceClassName: mig.nvidia.com 
              count: 1
              selectors:
              - cel:
                  expression: "device.attributes['gpu.nvidia.com'].profile == '1g.5gb'" 
    ---
    apiVersion: batch/v1
    kind: Job
    metadata:
      generateName: pd-test-job
      namespace: team-a
      labels:
        kueue.x-k8s.io/queue-name: user-queue 
    spec:
      template:
        spec:
          containers:
          - name: worker
            image: registry.k8s.io/e2e-test-images/agnhost:2.53
            args: ["pause"]
            resources:
              claims:
              - name: gpu
              requests:
                cpu: "1"
                memory: "200Mi"
          resourceClaims:
          - name: gpu
            resourceClaimTemplateName: gpu-partition 
          restartPolicy: Never
    ```

    where:

    `spec.spec.devices.requests.exactly.deviceClassName`
    :   References the MIG `DeviceClass`.


`spec.spec.devices.requests.exactly.selectors.cel.expression:`
:   Selects a specific MIG partition profile. Available profiles depend on the GPU model, for example, `1g.5gb`, `2g.10gb`, `3g.20gb`, or `7g.40gb` for the A100-40GB.


`metadata.labels.kueue.x-k8s.io/queue-name:`
:   Identifies the local queue to submit the job to.


`spec.template.spec.resourceClaims.resourceClaimTemplateName:`
:   References the `ResourceClaimTemplate` defined above. The `ResourceClaimTemplate` must exist in the same namespace as the job.

1.  Create the workload by running the following command:
    ```terminal
    $ oc create -f pd-job.yaml
    ```

**Verification**

1.  Verify that the workload is admitted and that quota was charged in capacity units by running the following command:
    ```terminal
    $ oc -n team-a get workloads -o jsonpath='{range .items[*]}{.metadata.name}: {.status.admission.podSetAssignments[0].resourceUsage}{"\n"}{end}'
    ```
    ```terminal title="Example output"
    job-pd-test-job-xxxxx: {"cpu":"1","gpu.memory":"5100273664","memory":"200Mi"}
    ```

    The `gpu.memory` value reflects the actual memory capacity of the requested MIG partition rather than a device count of `1`.
1.  If the workload is not admitted, verify the following:
    *   The `DRAPartitionableDevices` Kubernetes feature gate is enabled on the cluster.
    *   The `name` value of the `deviceClassMappings` object matches the resource name in `coveredResources`.
    *   The `counter.name` in `sources` matches a counter key in the `ResourceSlice` objects.
    *   The `ClusterQueue` has sufficient GPU memory quota for the requested partition size.
    *   MIG is enabled on the GPU hardware.