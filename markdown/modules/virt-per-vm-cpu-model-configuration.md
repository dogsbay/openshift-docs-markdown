{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure a CPU model for a single VM {id="virt-per-vm-cpu-model-configuration_{{ context }}"}

Set a named CPU model on a single virtual machine (VM) when that VM needs a different CPU type from the cluster-wide default. A per-VM model always takes precedence over the default. {._abstract}

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