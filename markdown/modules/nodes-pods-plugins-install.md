{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Device Manager {id="nodes-pods-plugins-install_{{ context }}"}

Enable Device Manager to allow device plugins to advertise specialized node hardware resources and make them available to pods without requiring code changes. {._abstract}

Enable Device Manager to implement a device plugin to advertise specialized
hardware without any upstream code changes.

Device Manager provides a mechanism for advertising specialized node hardware resources
with the help of plugins known as device plugins.

**Procedure**

1.  Obtain the label associated with the static `MachineConfigPool` CRD for the type of node you want to configure by entering the following command.
Perform one of the following steps:
    1.  View the machine config:
        ```terminal
        # oc describe machineconfig <name>
        ```

        For example:
        ```terminal
        # oc describe machineconfig 00-worker
        ```
        ```terminal title="Example output"
        Name:         00-worker
        Namespace:
        Labels:       machineconfiguration.openshift.io/role=worker
        ```

        `machineconfiguration.openshift.io` is the label required for the Device Manager.
1.  Create a custom resource (CR) for your configuration change.
    ```yaml title="Sample configuration for a Device Manager CR"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: KubeletConfig
    metadata:
      name: devicemgr
    spec:
      machineConfigPoolSelector:
        matchLabels:
           machineconfiguration.openshift.io: devicemgr
      kubeletConfig:
        feature-gates:
          - DevicePlugins=true
    ```

    where:

    `metadata.name`
    :   Specifies a name to assign to the CR.

    `spec.machineConfigPoolSelector.matchLabels`
    :   Specifies the label from the Machine Config Pool.

    `spec.kubeletConfig.feature-gates`
    :   Specifies the `DevicePlugins` feature gate. Set to `true`.
1.  Create the Device Manager:
    ```terminal
    $ oc create -f devicemgr.yaml
    ```
    ```terminal title="Example output"
    kubeletconfig.machineconfiguration.openshift.io/devicemgr created
    ```
1.  Ensure that Device Manager was actually enabled by confirming that
**_/var/lib/kubelet/device-plugins/kubelet.sock_** is created on the node. This is
the UNIX domain socket on which the Device Manager gRPC server listens for new
plugin registrations. This sock file is created when the Kubelet is started
only if Device Manager is enabled.