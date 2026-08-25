{%- set _content_type = "PROCEDURE" %}
# Enabling multi-queue functionality {id="virt-enabling-multi-queue_{{ context }}"}

You can enable multi-queue functionality for interfaces configured with a VirtIO model. {._abstract}

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