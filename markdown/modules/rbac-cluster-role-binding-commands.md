{%- set _mod_docs_content_type = "REFERENCE" -%}
{% if openshift_enterprise or openshift_webscale or openshift_origin or openshift_dedicated or openshift_rosa %}
# Cluster role binding commands {id="cluster-role-binding-commands_{{ context }}"}

You can use cluster role binding commands to grant or remove roles for users and groups across all projects in the cluster. {._abstract}

You can also manage cluster role bindings using the following operations. The `-n` flag is not used for these operations because cluster role bindings use non-namespaced resources.

**Cluster role binding operations**

| Command | Description |
| --- | --- |
| `$ oc adm policy add-cluster-role-to-user _<role>_ _<username>_` | Binds a given role to specified users for all projects in the cluster. |
| `$ oc adm policy remove-cluster-role-from-user _<role>_ _<username>_` | Removes a given role from specified users for all projects in the cluster. |
| `$ oc adm policy add-cluster-role-to-group _<role>_ _<groupname>_` | Binds a given role to specified groups for all projects in the cluster. |
| `$ oc adm policy remove-cluster-role-from-group _<role>_ _<groupname>_` | Removes a given role from specified groups for all projects in the cluster. |
{% endif %}