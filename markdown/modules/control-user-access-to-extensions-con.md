{%- set _mod_docs_content_type = "CONCEPT" %}
# Control user access to extensions {id="control-user-access-to-extensions-con_{{ context }}"}

A cluster extension managed by {{ olmv1_first }} can provide `CustomResourceDefinition` (CRD) objects that expose new cluster APIs. Cluster administrators automatically have full access to these resources, but {{ olmv1 }} does not configure role-based access control (RBAC) for regular users, so you must define the policy that lets them create, view, or edit the extension’s custom resources.