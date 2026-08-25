{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring garbage collection for containers and images {id="nodes-nodes-garbage-collection-configuring_{{ context }}"}

As an administrator, you can configure how {{ product_title }} performs garbage collection by creating a `kubeletConfig` object for each machine config pool. Performing garbage collection helps ensure that your nodes are running efficiently. {._abstract}


:::note

{{ product_title }} supports only one `kubeletConfig` object for each machine config pool.

:::


You can configure any combination of the following:

*   Soft eviction for containers
*   Hard eviction for containers
*   Eviction for images

Container garbage collection removes terminated containers. Image garbage collection removes images that are not referenced by any running pods.

**Prerequisites**

1.  Obtain the label associated with the static `MachineConfigPool` CRD for the type of node you want to configure by entering the following command:
    ```terminal
    $ oc edit machineconfigpool <name>
    ```

    For example:
    ```terminal
    $ oc edit machineconfigpool worker
    ```
    ```yaml title="Example output"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfigPool
    metadata:
      creationTimestamp: "2022-11-16T15:34:25Z"
      generation: 4
      labels:
        pools.operator.machineconfiguration.openshift.io/worker: ""
      name: worker
    #...
    ```

    where:

    `metadata.labels`
    :   Specifies a label to use with the kubelet configuration.

    :::tip

    If the label is not present, add a key/value pair such as:

    ```
    $ oc label machineconfigpool worker custom-kubelet=small-pods
    ```
    
    :::


**Procedure**

1.  Create a custom resource (CR) for your configuration change.

    :::important

    If there is one file system, or if `/var/lib/kubelet` and `/var/lib/containers/` are in the same file system, the settings with the highest values trigger evictions, as those are met first. The file system triggers the eviction.
    
    :::

    ```yaml title="Sample configuration for a container garbage collection CR"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: KubeletConfig
    metadata:
      name: worker-kubeconfig
    spec:
      machineConfigPoolSelector:
        matchLabels:
          pools.operator.machineconfiguration.openshift.io/worker: ""
      kubeletConfig:
        evictionSoft:
          memory.available: "500Mi"
          nodefs.available: "10%"
          nodefs.inodesFree: "5%"
          imagefs.available: "15%"
          imagefs.inodesFree: "10%"
        evictionSoftGracePeriod:
          memory.available: "1m30s"
          nodefs.available: "1m30s"
          nodefs.inodesFree: "1m30s"
          imagefs.available: "1m30s"
          imagefs.inodesFree: "1m30s"
        evictionHard:
          memory.available: "200Mi"
          nodefs.available: "5%"
          nodefs.inodesFree: "4%"
          imagefs.available: "10%"
          imagefs.inodesFree: "5%"
        evictionPressureTransitionPeriod: 3m
        imageMinimumGCAge: 5m
        imageGCHighThresholdPercent: 80
        imageGCLowThresholdPercent: 75
    #...
    ```

    where:

    `metadata.name`
    :   Specifies a name for the object.

    `spec.machineConfigPoolSelector.matchLabels`
    :   Specifies the label from the machine config pool.

    `spec.kubeletConfig.evictionSoft`
    :   Specifies a soft eviction and eviction thresholds for container garbage collection.

    `spec.kubeletConfig.evictionSoftGracePeriod`
    :   Specifies a grace period for the soft eviction of containers. This parameter does not apply to `eviction-hard`.

    `spec.kubeletConfig.evictionHard`
    :   Specifies a soft eviction and eviction thresholds for container garbage collection. For `evictionHard` you must specify all of these parameters. If you do not specify all parameters, only the specified parameters are applied and the garbage collection will not function properly.

    `spec.kubeletConfig.evictionPressureTransitionPeriod`
    :   Specifies the duration to wait before transitioning out of an eviction pressure condition for container garbage collection. Setting the `evictionPressureTransitionPeriod` parameter to `0` configures the default value of 5 minutes.

    `spec.kubeletConfig.imageMinimumGCAge`
    :   Specifies the minimum age for an unused image before the image is removed by garbage collection.

    `spec.kubeletConfig.imageGCHighThresholdPercent`
    :   Specifies the percent of disk usage, expressed as an integer, that triggers image garbage collection. This value must be greater than the `imageGCLowThresholdPercent` value.

    `spec.kubeletConfig.imageGCHighThresholdPercent`
    :   Specifies the percent of disk usage, expressed as an integer, to which image garbage collection attempts to free. This value must be less than the `imageGCHighThresholdPercent` value.
1.  Run the following command to create the CR:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```

    For example:
    ```terminal
    $ oc create -f gc-container.yaml
    ```
    ```terminal title="Example output"
    kubeletconfig.machineconfiguration.openshift.io/gc-container created
    ```

**Verification**

*   Verify that garbage collection is active by entering the following command. The Machine Config Pool you specified in the custom resource appears with `UPDATING` as 'true` until the change is fully implemented:
    ```terminal
    $ oc get machineconfigpool
    ```
    ```terminal title="Example output"
    NAME     CONFIG                                   UPDATED   UPDATING
    master   rendered-master-546383f80705bd5aeaba93   True      False
    worker   rendered-worker-b4c51bb33ccaae6fc4a6a5   False     True
    ```