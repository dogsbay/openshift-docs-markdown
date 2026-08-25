{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure a CPU model per-VM {id="virt-per-vm-cpu-model-configuration_{{ context }}"}

You can specify a named CPU model in the virtual machine (VM) specification. This per-VM configuration takes precedence over any cluster-wide default CPU model. {._abstract}

The VM CPU model depends on the availability of CPU models within the VM and the cluster.

*   If the VM does not have a defined CPU model, the `defaultCPUModel` is automatically set using the CPU model defined at the cluster-wide level.
*   If both the VM and the cluster have a defined CPU model, the VM’s CPU model takes precedence.
*   If neither the VM nor the cluster have a defined CPU model, the host-model is automatically set using the CPU model defined at the host level.

**Prerequisites**

*   Install the {{ oc_first }}.

**Procedure**

1.  To configure a named CPU model for a specific VM, edit the `VirtualMachine` custom resource (CR):
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
    ```
    *   `spec.template.spec.domain.cpu.model` defines the named CPU model for the VM.
1.  Apply the CR to your cluster.