---
title: Configuring role-based permissions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring role-based permissions {id="rbac-permissions"}
{%- set context = "rbac-permissions" %}

You can configure role-based access control (RBAC) for your {{ kueue_name }} deployment to control which users can create specific {{ kueue_name }} objects. {._abstract}

{% leveloffset +1 %}{% include "./modules/kueue-cluster-roles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configure-rbac-batch-admins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configure-rbac-batch-users.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Glossary of common terms for {{ product_title }} authentication and authorization](/authentication/index#openshift-auth-common-terms_overview-of-authentication-authorization)