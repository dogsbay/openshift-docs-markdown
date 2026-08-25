{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling CSI in the DataProtectionApplication CR {id="oadp-enabling-csi-dpa_{{ context }}"}

You enable the Container Storage Interface (CSI) in the `DataProtectionApplication` custom resource (CR) in order to back up persistent volumes with CSI snapshots. {._abstract}

**Prerequisites**

*   The cloud provider must support CSI snapshots.

**Procedure**

*   Edit the `DataProtectionApplication` CR, as in the following example:
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    ...
    spec:
      configuration:
        velero:
          defaultPlugins:
          - openshift
          - csi
    ```

    where:

    `csi`
    :   Specifies the `csi` default plugin.