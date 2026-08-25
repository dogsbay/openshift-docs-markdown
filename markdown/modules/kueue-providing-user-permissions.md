{%- set _mod_docs_content_type = "CONCEPT" %}
# Providing user permissions {id="providing-user-permissions_{{ context }}"}

You can configure role-based access control (RBAC) objects for the users of your {{ kueue_name }} deployment. These objects determine which types of users can create which types of {{ kueue_name }} objects.   {._abstract}

You need to provide permissions to the users that require access to the specific APIs.

*   If the user needs access to the pending workloads from the `ClusterQueue` resource, a `ClusterRoleBinding` schema needs to be created referencing the ClusterRole `kueue-batch-admin-role`.
*   If the user needs access to the pending workloads from the `LocalQueue` resource, a `RoleBinding` schema needs to be created referencing the ClusterRole `kueue-batch-user-role`.