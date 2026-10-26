{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attach a virtual machine to a localnet network {id="virt-attaching-vm-to-localnet-network_{{ context }}"}

You can connect a virtual machine (VM) to the physical network by configuring the localnet network interface in the `VirtualMachine` manifest. {._abstract}


:::note

You can connect a VM to both the default pod network and a secondary localnet network.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have created a `ClusterUserDefinedNetwork` CR that defines the localnet network.
*   You have created a namespace with a label that matches the `ClusterUserDefinedNetwork` namespace selector.

**Procedure**

1.  Edit the `VirtualMachine` manifest to add the localnet network interface, as in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
      namespace: red
    spec:
      template:
        spec:
          domain:
            devices:
        # ...
              interfaces:
              - name: provider-network  # must match networks.name
                bridge: {}
          networks:
          - name: provider-network
            multus:
              networkName: provider-network-100
    # ...
    ```

    :::note

    With a VirtIO driver, the VM automatically inherits the MTU value of the network. If you use the `e1000e` driver, you must configure the MTU value inside the guest operating system.
    
    :::

1.  Apply the `VirtualMachine` manifest by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

    where:

    `<filename>`
    :   Specifies the name of your `VirtualMachine` manifest YAML file.