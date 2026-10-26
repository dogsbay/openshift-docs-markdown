{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set a VM to run only on nodes with a named CPU model {id="virt-schedule-supported-cpu-model-vms_{{ context }}"}

Set a named CPU model on a virtual machine (VM) so that the scheduler places the VM only on nodes that support that model. {._abstract}

**Procedure**

*   Edit the `domain` spec of your virtual machine configuration file. The following example shows a specific CPU model defined for a VM:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: myvm
    spec:
      template:
        spec:
          domain:
            cpu:
              model: Conroe
    # ...
    ```
    *   `spec.template.spec.domain.cpu.model` defines the CPU model for the VM.