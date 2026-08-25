{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ oadp_short }} Self-Service prerequisites {id="oadp-self-service-prerequisites_{{ context }}"}

Configure your cluster environment to enable {{ oadp_short }} Self-Service backup and restore operations by meeting the following prerequisites. This helps namespace administrators perform data protection tasks in their assigned namespaces. {._abstract}

*   The cluster administrator has configured the {{ oadp_short }} `DataProtectionApplication` (DPA) CR to enable Self-Service. 
*   The cluster administrator has completed the following tasks:
    *   Created a namespace `admin` user account.
    *   Created a namespace for the namespace `admin` user.
    *   Assigned appropriate privileges for the namespace admin user’s namespace. This ensures that the namespace admin user is authorized to access and perform backup and restore operations in their assigned namespace.
*   Optionally, the cluster administrator can create a `NonAdminBackupStorageLocation` (NABSL) CR for the namespace `admin` user.