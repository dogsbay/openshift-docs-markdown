{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting a virtual machine to an SR-IOV network by using the CLI {id="virt-attaching-vm-to-sriov-network_{{ context }}"}

You can connect the virtual machine (VM) to the SR-IOV network by including the network details in the VM configuration. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Add the SR-IOV network details to the `spec.domain.devices.interfaces` and `spec.networks` stanzas of the VM configuration as in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
    spec:
      domain:
        devices:
          interfaces:
          - name: nic1
            sriov: {}
      networks:
      - name: nic1
        multus:
            networkName: sriov-network
    # ...
    ```
    *   `spec.template.spec.domain.devices.interfaces.name` specifies a unique name for the SR-IOV interface.
    *   `spec.template.spec.networks.name` specifies the name of the SR-IOV interface. This must be the same as the `interfaces.name` that you defined earlier.
    *   `spec.template.spec.networks.multus.networkName` specifies the name of the SR-IOV network attachment definition.
1.  Apply the virtual machine configuration:
    ```terminal
    $ oc apply -f <vm_sriov>.yaml
    ```

    where:

    `<vm_sriov>`
    :   Specifies the name of the virtual machine YAML file.