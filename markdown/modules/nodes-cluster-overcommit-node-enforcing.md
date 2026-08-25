{%- set _mod_docs_content_type = "PROCEDURE" %}

# Disabling or enforcing CPU limits using CPU CFS quotas {id="nodes-cluster-overcommit-node-enforcing_{{ context }}"}

You can disable the default enforcement of CPU limits for nodes in a machine config pool.  {._abstract}

By default, nodes enforce specified CPU limits using the Completely Fair Scheduler (CFS) quota support in the Linux kernel.

If you disable CPU limit enforcement, it is important to understand the impact on your node:

*   If a container has a CPU request, the request continues to be enforced by CFS shares in the Linux kernel.
*   If a container does not have a CPU request, but does have a CPU limit, the CPU request defaults to the specified CPU limit, and is enforced by CFS shares in the Linux kernel.
*   If a container has both a CPU request and limit, the CPU request is enforced by CFS shares in the Linux kernel, and the CPU limit has no impact on the node.

**Prerequisites**

*   You have the label associated with the static `MachineConfigPool` CRD for the type of node you want to configure.

**Procedure**

1.  Create a custom resource (CR) for your configuration change.
    ```yaml title="Sample configuration for a disabling CPU limits"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: KubeletConfig
    metadata:
      name: disable-cpu-units
    spec:
      machineConfigPoolSelector:
        matchLabels:
          pools.operator.machineconfiguration.openshift.io/worker: ""
      kubeletConfig:
        cpuCfsQuota: false
    ```

    where:

    `metadata.name`
    :   Specifies a name for the CR.

    `spec.machineConfigPoolSelector.matchLabels`
    :   Specifies the label from the machine config pool.

    `spec.kubeletConfig.cpuCfsQuota`
    :   Specifies the `cpuCfsQuota` parameter to `false`.
1.  Run the following command to create the CR:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```