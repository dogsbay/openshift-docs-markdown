{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set a VM to inherit the node CPU model {id="virt-schedule-cpu-host-model-vms_{{ context }}"}

Set the CPU model of a virtual machine (VM) to `host-model` so that the VM inherits the CPU model of the node where it is scheduled, and can use the CPU features that the node provides. {._abstract}

**Procedure**

*   Edit the `domain` spec of your VM configuration file. The following example shows `host-model` being specified for the virtual machine:
    ```yaml
    apiVersion: kubevirt/v1alpha3
    kind: VirtualMachine
    metadata:
      name: myvm
    spec:
      template:
        spec:
          domain:
            cpu:
              model: host-model
    ```
    *   `spec.template.spec.domain.cpu.model` defines the VM that inherits the CPU model of the node where it is scheduled.