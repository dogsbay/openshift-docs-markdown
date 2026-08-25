{%- set _mod_docs_content_type = "CONCEPT" %}
# What namespace-scoped backup and restore means {id="oadp-self-service-overview-namespace-scope_{{ context }}"}

{{ oadp_short }} Self-Service ensures that namespace admin users can only operate within their authorized namespace. For example, if you do not have access to a namespace, as a namespace admin user, you cannot back up that namespace. {._abstract}

A namespace admin user cannot access backup and restore data of other users.

The cluster administrator enforces the access control through custom resources (CRs) that securely manage the backup and restore operations.

Additionally, the cluster administrator can control the allowed options within the CRs, restricting certain operations for added security by using `spec` enforcements in the `DataProtectionApplication` (DPA) CR.

Namespace `admin` users can perform the following Self-Service operations:

*   Create and manage backups of their authorized namespaces.
*   Restore data to their authorized namespaces.
*   Configure their own backup storage locations.
*   Check backup and restore status.
*   Request retrieval of relevant logs.