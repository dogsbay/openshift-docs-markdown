---
title: Configuring role-based permissions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring role-based permissions {id="rbac-permissions"}
{%- set context = "rbac-permissions" %}

You can configure role-based access control (RBAC) for your {{ kueue_name }} deployment to control which users can create specific {{ kueue_name }} objects.

## Cluster roles {id="authentication-clusterroles"}

The {{ kueue_name }} Operator deploys `kueue-batch-admin-role` and `kueue-batch-user-role` cluster roles by default.


kueue-batch-admin-role
:   This cluster role includes the permissions to manage cluster queues, local queues, workloads, and resource flavors.

kueue-batch-user-role
:   This cluster role includes the permissions to manage jobs and to view local queues and workloads.

{% leveloffset +1 %}{% include "./modules/kueue-configure-rbac-batch-admins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configure-rbac-batch-users.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Glossary of common terms for {{ product_title }} authentication and authorization](/authentication/index#openshift-auth-common-terms_overview-of-authentication-authorization)