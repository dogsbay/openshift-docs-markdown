{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage cluster authorization and RBAC permissions {id="manage-cluster-authorization-and-rbac-permissions-con_{{ context }}"}

Authorization in {{ product_title }} is enforced with role-based access control (RBAC), which binds users and groups to roles that grant specific actions on specific resources. By combining cluster roles with local roles in a project, you can give each team exactly the permissions it needs while keeping tenants isolated from each other.