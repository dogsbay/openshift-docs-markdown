{%- set _mod_docs_content_type = "PROCEDURE" %}

# Remove the VM delete protection option from the cluster {id="virt-removing-vm-delete-protection_{{ context }}"}

You can make the delete protection option unavailable on your cluster by applying a `ValidatingAdmissionPolicy`. A virtual machine (VM) that already has delete protection keeps the setting, but you cannot enable protection on a new VM. {._abstract}

As a cluster administrator, you can choose not to make the VM delete protection option available. VMs with delete protection already enabled retain that setting; for any new VMs that are created, enabling the option is not allowed.

You can remove the delete protection option by establishing a validation admission policy for the cluster and then creating the necessary binding to use the policy in the cluster.

**Prerequisites**

*   You must have cluster administrator privileges.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create the validation admission policy, as shown in the following example:
    ```yaml
    apiVersion: admissionregistration.k8s.io/v1
    kind: ValidatingAdmissionPolicy
    metadata:
      name: "disable-vm-delete-protection"
    spec:
      failurePolicy: Fail
      matchConstraints:
        resourceRules:
        - apiGroups:   ["kubevirt.io"]
          apiVersions: ["*"]
          operations:  ["UPDATE", "CREATE"]
          resources:   ["virtualmachines"]
      variables:
        - expression: string('kubevirt.io/vm-delete-protection')
          name: vmDeleteProtectionLabel
      validations:
      - expression: >-
          !has(object.metadata.labels) ||
          !object.metadata.labels.exists(label, label == variables.vmDeleteProtectionLabel) ||
          has(oldObject.metadata.labels) &&
          oldObject.metadata.labels.exists(label, label == variables.vmDeleteProtectionLabel)
        message: "Virtual Machine delete protection feature is disabled"
    ```
1.  Apply the validation admission policy to the cluster:
    ```terminal
    $ oc apply -f disable-vm-delete-protection.yaml
    ```
1.  Create the validation admission policy binding, as shown in the following example:
    ```yaml
    apiVersion: admissionregistration.k8s.io/v1
    kind: ValidatingAdmissionPolicyBinding
    metadata:
      name: "disable-vm-delete-protection-binding"
    spec:
      policyName: "disable-vm-delete-protection"
      validationActions: [Deny]
      matchResources:
    ```
1.  Apply the validation admission policy binding to the cluster:
    ```terminal
    $ oc apply -f disable-vm-delete-protection-binding.yaml
    ```