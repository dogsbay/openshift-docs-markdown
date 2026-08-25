{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ oadp_short }} self-service {id="oadp-cli-nonadmin-about_{{ context }}"}

Non-administrator users can use {{ oadp_short }} self-service to perform backup and restore operations in their authorized namespaces without requiring cluster-wide administrator privileges. {._abstract}

This feature provides secure, self-service data protection while maintaining administrator controls over backup and restore operations.

You can use {{ oadp_short }} self-service to complete the following tasks:

*   Create and manage namespace-scoped backups and restores.
*   View backup and restore status and logs.
*   Create dedicated backup storage locations with user-owned buckets and credentials.

## Limitations {id="oadp-cli-nonadmin-about-limitations_{{ context }}"}

*   Cross-cluster operations and migrations are not supported for non-administrator users.
*   Non-administrator volume snapshot locations (VSLs) are not supported. The VSL configured by the cluster administrator in the `DataProtectionApplication` custom resource (CR) is used.
*   Backups and restores are scoped to the namespace from which the command is run. You cannot specify a different namespace.
*   Cluster-scoped resources cannot be included in backups or restores.
*   `ResourceModifiers` and volume policies are not supported for non-administrator backup and restore operations.
*   Backup and restore logs by using a `NonAdminDownloadRequest` object are not supported for default backup storage locations (BSLs). To access logs, you must create a `NonAdminBackupStorageLocation` object.

## Prerequisites for non-administrator users {id="oadp-cli-nonadmin-about-prereqs_{{ context }}"}

Before you use {{ oadp_short }} self-service, a cluster administrator must complete the following tasks:

*   Install and configure the {{ oadp_short }} Operator with `nonAdmin.enable: true` in the `DataProtectionApplication` CR specification.
*   Create your user account, namespace, and namespace privileges, such as namespace administrator.
*   Grant editor roles for the following resources in your namespace:
    *   `nonadminbackups.oadp.openshift.io`
    *   `nonadminrestores.oadp.openshift.io`
    *   `nonadminbackupstoragelocations.oadp.openshift.io`
    *   `nonadmindownloadrequests.oadp.openshift.io`
*   Optionally, create a `NonAdminBackupStorageLocation` object for your namespace.