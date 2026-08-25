{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a VM network interface by using the CLI {id="virt-attaching-vm-secondary-network-cli_{{ context }}"}

You can configure a virtual machine (VM) network interface for a bridge network by using the command line. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   Shut down the virtual machine before editing the configuration. If you edit a running virtual machine, you must restart the virtual machine for the changes to take effect.

**Procedure**

1.  Add the bridge interface and the network attachment definition to the VM configuration as in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
    spec:
      template:
        spec:
          domain:
            devices:
              interfaces:
                - bridge: {}
                  name: bridge-net
    # ...
          networks:
            - name: bridge-net
              multus:
                networkName: bridge-network
    ```

    where:

    `spec.template.spec.domain.devices.interface`
    :   Specifies the name of the bridge interface.

    `spec.template.spec.networks.name`
    :   Specifies the name of the network. This value must match the `name` value of the corresponding `spec.template.spec.domain.devices.interfaces` entry.

    `spec.template.spec.networks.multus.networkName`
    :   Specifies the name of the network attachment definition. 

1.  Apply the configuration:
    ```terminal
    $ oc apply -f example-vm.yaml
    ```
1.  Optional: If you edited a running virtual machine, you must restart it for the changes to take effect.

    :::note

    When running {{ VirtProductName }} on {{ ibm_z_name }} using OSA, RoCE, or HiperSockets interfaces, you must register the MAC address of the device. For more information, see [OSA interface traffic forwarding](https://www.ibm.com/docs/en/linux-on-systems?topic=choices-osa-interface-traffic-forwarding) (IBM documentation).
    
    :::