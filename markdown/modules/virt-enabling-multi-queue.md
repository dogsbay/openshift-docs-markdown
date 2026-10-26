{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable multi-queue for VirtIO network interfaces {id="virt-enabling-multi-queue_{{ context }}"}

You can enable multi-queue functionality for network interfaces that use a VirtIO model, so that network traffic is processed across multiple vCPUs instead of one. {._abstract}

**Procedure**

1.  Set the `networkInterfaceMultiqueue` value to `true` in the `VirtualMachine` manifest file of your VM to enable multi-queue functionality:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VM
    spec:
      domain:
        devices:
          networkInterfaceMultiqueue: true
    ```
1.  Save the `VirtualMachine` manifest file to apply your changes.