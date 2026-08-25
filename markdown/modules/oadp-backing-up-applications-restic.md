{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up applications with Restic {id="oadp-backing-up-applications-restic_{{ context }}"}

You back up Kubernetes resources, internal images, and persistent volumes with Restic by editing the `Backup` custom resource (CR).

You do not need to specify a snapshot location in the `DataProtectionApplication` CR.


:::important

Restic does not support backing up `hostPath` volumes. For more information, see [additional Restic limitations](https://{{ velero_domain }}/docs/v{{ velero_version }}/restic/#limitations).

:::


**Prerequisites**

*   You must install the OpenShift API for Data Protection (OADP) Operator.
*   You must not disable the default Restic installation by setting `spec.configuration.restic.enable` to `false` in the `DataProtectionApplication` CR.
*   The `DataProtectionApplication` CR must be in a `Ready` state.

**Procedure**

*   Edit the `Backup` CR, as in the following example:
    ```yaml
    apiVersion: velero.io/v1
    kind: Backup
    metadata:
      name: <backup>
      labels:
        velero.io/storage-location: default
      namespace: openshift-adp
    spec:
      defaultVolumesToFsBackup: true (1)
    ...
    ```
    1.  In OADP version 1.2 and later, add the `defaultVolumesToFsBackup: true` setting within the `spec` block. In OADP version 1.1, add `defaultVolumesToRestic: true`.