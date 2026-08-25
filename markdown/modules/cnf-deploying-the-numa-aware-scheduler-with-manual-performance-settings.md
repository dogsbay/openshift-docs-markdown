{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the NUMA-aware secondary pod scheduler with manual performance settings {id="cnf-deploying-the-numa-aware-scheduler-with-manual-performance-settings_{{ context }}"}

After you install the NUMA Resources Operator, do the following to deploy the NUMA-aware secondary pod scheduler:

*   Configure the pod admittance policy for the required machine profile
*   Create the required machine config pool
*   Deploy the NUMA-aware secondary scheduler

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.
*   Install the NUMA Resources Operator.

**Procedure**

1.  Create the `KubeletConfig` custom resource that configures the pod admittance policy for the machine profile:
    1.  Save the following YAML in the `nro-kubeletconfig.yaml` file:
        ```yaml
        apiVersion: machineconfiguration.openshift.io/v1
        kind: KubeletConfig
        metadata:
          name: cnf-worker-tuning
        spec:
          machineConfigPoolSelector:
            matchLabels:
              cnf-worker-tuning: enabled
          kubeletConfig:
            cpuManagerPolicy: "static" (1)
            cpuManagerReconcilePeriod: "5s"
            reservedSystemCPUs: "0,1"
            memoryManagerPolicy: "Static" (2)
            evictionHard:
              memory.available: "100Mi"
            reservedMemory:
              - numaNode: 0
                limits:
                  memory: "1124Mi"
            systemReserved:
              memory: "512Mi"
            topologyManagerPolicy: "single-numa-node" (3)
            topologyManagerScope: "pod"
        ```
        1.  For `cpuManagerPolicy`, `static` must use a lowercase `s`.
        1.  For `memoryManagerPolicy`, `Static` must use an uppercase `S`.
        1.  `topologyManagerPolicy` must be set to `single-numa-node`.
    1.  Create the `KubeletConfig` custom resource (CR) by running the following command:
        ```terminal
        $ oc create -f nro-kubeletconfig.yaml
        ```
1.  Create the `NUMAResourcesScheduler` custom resource that deploys the NUMA-aware custom pod scheduler:
    1.  Save the following YAML in the `nro-scheduler.yaml` file:
        ```yaml
        apiVersion: nodetopology.openshift.io/v1
        kind: NUMAResourcesScheduler
        metadata:
          name: numaresourcesscheduler
        spec:
          imageSpec: "registry.redhat.io/openshift4/noderesourcetopology-scheduler-container-rhel8:v{{ product_version }}"
          cacheResyncPeriod: "5s" (1)
        ```
        1.  Enter an interval value in seconds for synchronization of the scheduler cache. A value of `5s` is typical for most implementations.

            :::note

            *   Enable the `cacheResyncPeriod` specification to help the NUMA Resource Operator report more exact resource availability by monitoring pending resources on nodes and synchronizing this information in the scheduler cache at a defined interval. This also helps to minimize `Topology Affinity Error` errors because of sub-optimal scheduling decisions. The lower the interval the greater the network load. The `cacheResyncPeriod` specification is disabled by default.
            *   Setting a value of `Enabled` for the `podsFingerprinting` specification in the `NUMAResourcesOperator` CR is a requirement for the implementation of the `cacheResyncPeriod` specification.
            
            :::

    1.  Create the `NUMAResourcesScheduler` CR by running the following command:
        ```terminal
        $ oc create -f nro-scheduler.yaml
        ```

**Verification**

*   Verify that the required resources deployed successfully by running the following command:
    ```terminal
    $ oc get all -n openshift-numaresources
    ```
    ```terminal title="Example output"
    NAME                                                    READY   STATUS    RESTARTS   AGE
    pod/numaresources-controller-manager-7575848485-bns4s   1/1     Running   0          13m
    pod/numaresourcesoperator-worker-dvj4n                  2/2     Running   0          16m
    pod/numaresourcesoperator-worker-lcg4t                  2/2     Running   0          16m
    pod/secondary-scheduler-56994cf6cf-7qf4q                1/1     Running   0          16m
    NAME                                          DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                     AGE
    daemonset.apps/numaresourcesoperator-worker   2         2         2       2            2           node-role.kubernetes.io/worker=   16m
    NAME                                               READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/numaresources-controller-manager   1/1     1            1           13m
    deployment.apps/secondary-scheduler                1/1     1            1           16m
    NAME                                                          DESIRED   CURRENT   READY   AGE
    replicaset.apps/numaresources-controller-manager-7575848485   1         1         1       13m
    replicaset.apps/secondary-scheduler-56994cf6cf                1         1         1       16m
    ```