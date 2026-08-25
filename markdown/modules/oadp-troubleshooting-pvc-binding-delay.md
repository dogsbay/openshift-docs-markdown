{%- set _mod_docs_content_type = "PROCEDURE" %}

# Troubleshooting PVC binding failures with the waitForFirstConsumer storage class {id="oadp-troubleshooting-pvc-binding-delay_{{ context }}"}

To ensure that restored persistent volume claims (PVCs) successfully bind to PVs when node affinity is configured, adjust the storage class binding mode settings during restore operations. {._abstract}

PVCs that use a storage class with `bindingMode: WaitForFirstConsumer` might fail to bind to a PV when node affinity is configured. This issue can occur during restore operations, including virtual machine file restore (VMFR) workflows.

**Procedure**

*   Set the `ignoreDelayBinding` field to `true` in the `restorePVC` section of the `nodeAgent` configuration in the `DataProtectionApplication` CR, as shown in the following example:
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: dpa-test
      namespace: openshift-adp
    spec:
    # ...
      configuration:
        nodeAgent:
          enable: true
          restorePVC:
            ignoreDelayBinding: true
          uploaderType: kopia
    ```