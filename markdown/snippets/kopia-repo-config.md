{%- set _mod_docs_content_type = "SNIPPET" %}

:::note

The configuration of the Kopia algorithms for splitting, hashing, and encryption in the Data Protection Application (DPA) apply only during the initial Kopia repository creation, and cannot be changed later.

To use different Kopia algorithms, ensure that the object storage does not contain any previous Kopia repositories of backups. Configure a new object storage in the Backup Storage Location (BSL) or specify a unique prefix for the object storage in the BSL configuration.

:::