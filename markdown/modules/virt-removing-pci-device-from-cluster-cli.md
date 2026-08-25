{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing PCI host devices from the cluster using the CLI {id="virt-removing-pci-device-from-cluster_{{ context }}"}

To remove a PCI host device from the cluster, delete the information for that device from the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Edit the `HyperConverged` CR in your default editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Remove the PCI device information from the `spec.permittedHostDevices.pciHostDevices` array by deleting the `pciDeviceSelector`, `resourceName` and `externalResourceProvider` (if applicable), fields for the appropriate device. In this example, the user deletes the `nvidia.com/TU104GL_Tesla_T4`.

    Example configuration file:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
      namespace: {{ CNVNamespace }}
    spec:
      permittedHostDevices:
        pciHostDevices:
        - pciDeviceSelector: "10DE:1DB6"
          resourceName: "nvidia.com/GV100GL_Tesla_V100"
    # ...
    ```
1.  Save your changes and exit the editor.

**Verification**

*   Verify that you removed the PCI host device from the node by running the following command. The example output shows that there are zero devices associated with the `nvidia.com/TU104GL_Tesla_T4` resource name.
    ```terminal
    $ oc describe node <node_name>
    ```

    Example output:
    ```terminal
    Capacity:
      cpu:                            64
      devices.kubevirt.io/kvm:        110
      devices.kubevirt.io/tun:        110
      devices.kubevirt.io/vhost-net:  110
      ephemeral-storage:              915128Mi
      hugepages-1Gi:                  0
      hugepages-2Mi:                  0
      memory:                         131395264Ki
      nvidia.com/GV100GL_Tesla_V100   1
      nvidia.com/TU104GL_Tesla_T4     0
      pods:                           250
    Allocatable:
      cpu:                            63500m
      devices.kubevirt.io/kvm:        110
      devices.kubevirt.io/tun:        110
      devices.kubevirt.io/vhost-net:  110
      ephemeral-storage:              863623130526
      hugepages-1Gi:                  0
      hugepages-2Mi:                  0
      memory:                         130244288Ki
      nvidia.com/GV100GL_Tesla_V100   1
      nvidia.com/TU104GL_Tesla_T4     0
      pods:                           250
    ```