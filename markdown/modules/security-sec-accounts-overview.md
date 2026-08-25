{%- set _mod_docs_content_type = "CONCEPT" %}
# Security accounts overview {id="security-sec-accounts-overview_{{ context }}"}

A service account is an {{ product_title }} account that allows a component to directly access the API. Service accounts are API objects that exist within each project.
Service accounts provide a flexible way to control API access without sharing a regular user’s credentials.  {._abstract}

You can use service accounts to apply role-based access control (RBAC) to pods. By assigning service accounts to workloads, such as pods and deployments, you can grant additional permissions, such as pulling from different registries. This also allows you to assign lower privileges to service accounts, reducing the security footprint of the pods that run under them.

For more information about service accounts, see "Understanding and creating service accounts".