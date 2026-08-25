{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scheduling virtual machines with the supported CPU model {id="virt-schedule-supported-cpu-model-vms_{{ context }}"}

You can configure a CPU model for a virtual machine (VM) to schedule it on a node where its CPU model is supported. {._abstract}

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