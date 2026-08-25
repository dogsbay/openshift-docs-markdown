{%- set _mod_docs_content_type = "REFERENCE" %}
# In-built permissions for cluster configuration {id="gitops-inbuilt-permissions-for-cluster-config_{{ context }}"}

By default, the Argo CD instance has permissions to manage specific cluster-scoped resources such as cluster Operators, optional OLM Operators and user management.


:::note

Argo CD does not have cluster-admin permissions.

:::


Permissions for the Argo CD instance:
|     |     |
| --- | --- |
| ***Resources*** | ***Descriptions*** |
| Resource Groups | Configure the user or administrator |
| `operators.coreos.com` | Optional Operators managed by OLM |
| `user.openshift.io` , `rbac.authorization.k8s.io` | Groups, Users and their permissions |
| `config.openshift.io` | Control plane Operators managed by CVO used to configure cluster-wide build configuration, registry configuration and scheduler policies |
| `storage.k8s.io` | Storage |
| `console.openshift.io` | Console customization |