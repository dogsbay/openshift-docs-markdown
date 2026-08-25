{%- set _mod_docs_content_type = "REFERENCE" %}

# Common default cluster roles for users {id="olmv1-default-cluster-roles-users_{{ context }}"}

An installed cluster extension can include default cluster roles that grant regular users role-based access control (RBAC) to the extension’s API resources. {._abstract}

Cluster extensions commonly include the following default cluster role policies:


`view` cluster role
:   Grants read-only access to custom resource (CR) objects for specified API resources across the cluster. This role provides resource visibility without permission to modify resources, which is ideal for monitoring and viewing.

`edit` cluster role
:   Grants permissions to create, update, and delete CR objects across the cluster. This role is intended for users who manage resources but do not manage RBAC or cluster permissions.

`admin` cluster role
:   Grants full administrative permissions, including create, update, and delete actions, over all CR objects for specified API resources across the cluster.