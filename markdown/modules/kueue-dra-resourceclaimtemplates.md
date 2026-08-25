{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the resource claim template path  {id="kueue-dra-resourceclaimtemplates_{{ context }}"}

You can configure {{ kueue_name }} to manage quota for workloads that explicitly reference `ResourceClaimTemplate` objects. This requires configuring the `deviceClassMappings` entry in the {{ kueue_name }} custom resource (CR) and adding the DRA resource to your `ClusterQueue` object. {._abstract}

**Prerequisites**

*   You have installed {{ kueue_name }} by using the {{ kueue_op }}.
*   You have created a `Kueue` custom resource (CR).
*   Your cluster is running {{ product_title }} 4.21 or later.
*   A DRA driver is installed in the cluster, for example, `nvidia-dra-driver`. You can verify that the DRA driver is publishing device information by running the following command:
    ```terminal
    $ oc get resourceslices
    ```

    If the command returns one or more `ResourceSlice` objects, the DRA driver is running.
*   At least one `DeviceClass` object exists in the cluster. You can verify this by running the following command:
    ```terminal
    $ oc get deviceclass
    ```

**Procedure**

1.  Use the following command to add a `deviceClassMappings` entry to the {{ kueue_name }} configuration that maps each `DeviceClass` to a logical resource name for quota:

    [source,yaml]  
```
$ oc patch kueue cluster -n openshift-kueue-operator --type=merge -p '{
  "spec": {
    "config": {
      "resources": {
        "deviceClassMappings": [{
          "name": "nvidia.com/gpu",
          "deviceClassNames": ["gpu.nvidia.com"]
        }]
      }
    }
  }
}'
```

Replace `"nvidia.com/gpu"` with the resource name used in `ClusterQueue` quotas and `Workload` status.

Replace `"gpu.nvidia.com"` with one or more `DeviceClass` names that map to this resource.

Multiple device classes can map to the same logical resource name. For example, if you have separate device classes for different GPU models but want a single quota pool, as shown in the following example: 

```yaml
resources:
  deviceClassMappings:
  - name: nvidia.com/gpu
    deviceClassNames:
    - gpu-a100.nvidia.com
    - gpu-h100.nvidia.com
```

1.  Create a file called `rct-queues.yaml` that contains the following content:
    ```yaml title="Example quota configuration for a ResourceClaimTemplate object"
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
      - coveredResources: ["cpu", "memory", "nvidia.com/gpu"]
        flavors:
        - name: "default-flavor"
          resources:
          - name: "cpu"
            nominalQuota: 40
          - name: "memory"
            nominalQuota: 200Gi
          - name: "nvidia.com/gpu"
            nominalQuota: 8
    ---
    apiVersion: kueue.x-k8s.io/v1beta2
    kind: LocalQueue
    metadata:
      namespace: "default"
      name: "user-queue"
    spec:
      clusterQueue: "cluster-queue"
    ```
1.  Apply the `rct-queues.yaml` file:
    ```terminal
    $ oc apply -f rct-queues.yaml
    ```
1.  Create a `ResourceClaimTemplate` object and a workload to verify the configuration. Create a file called `rct-job.yaml` by running the following command:
    ```terminal
    $ oc create -f rct-job.yaml
    ```
    ```yaml title="Example ResourceClaimTemplate workload"
    apiVersion: resource.k8s.io/v1
    kind: ResourceClaimTemplate
    metadata:
      name: my-gpu
      namespace: default
    spec:
      spec:
        devices:
          requests:
          - name: gpu
            exactly:
              deviceClassName: gpu.nvidia.com 
    ---
    apiVersion: batch/v1
    kind: Job
    metadata:
      generateName: rct-test-job-
      namespace: default
      labels:
        kueue.x-k8s.io/queue-name: user-queue 
    spec:
      template:
        spec:
          restartPolicy: Never
          resourceClaims:
          - name: gpu
            resourceClaimTemplateName: my-gpu 
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
    ```

    where:

    `spec.spec.drivers.requests.exactly.deviceClassName:`
    :   References the `DeviceClass` object configured in the `deviceClassMappings` entry.

    `metadata.labels.kueue.x-k8s.io/queue-name:`
    :   Identifies the local queue to submit the job to.

    `spec.template.spec.resourceClaims.resourceClaimTemplateName:`
    :   References the `ResourceClaimTemplate` object defined above. The template must exist in the same namespace as the job.

    `spec.template.spec.containers.resources.claims.name:`
    :   Attaches the resource claim to this container.

**Verification**

1.  Verify that the workload has been created and admitted:
    ```terminal
    $ oc -n default get workloads
    ```
1.  Verify that a `ResourceClaim` object was created from the template:
    ```terminal
    $ oc -n default get resourceclaims
    ```

    If the workload is not admitted, verify the following:
    *   Check if the namespace is managed by {{ kueue_name }}:
        ```terminal
        $ oc label namespace default kueue.openshift.io/managed=true
        ```
    *   The `deviceClassMappings` in the `Kueue` CR maps the `DeviceClass` object to the resource name in the `coveredResources` parameter.
    *   The `ClusterQueue` object has sufficient quota available.
    *   The `ResourceClaimTemplate` object exists in the same namespace as the job.