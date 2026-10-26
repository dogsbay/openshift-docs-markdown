{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set a policy attribute and CPU feature {id="virt-setting-policy-attributes_{{ context }}"}

Set a CPU feature and a policy attribute on a virtual machine (VM) so that the VM runs only where the feature is available. The feature must be supported by the host CPU or emulated by the hypervisor. {._abstract}

**Procedure**

*   Edit the `domain` spec of your VM configuration file. The following example sets the CPU feature and the `require` policy for a virtual machine (VM):
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
              features:
                - name: apic
                  policy: require
    ```
    *   `spec.template.spec.domain.cpu.features.name` defines the name of the CPU feature for the VM.
    *   `spec.template.spec.domain.cpu.features.policy` defines the policy attribute for the VM.