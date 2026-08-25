---
title: "Impersonating the system:admin user"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Impersonating the system:admin user {id="impersonating-system-admin"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "impersonating-system-admin" %}

You can configure API requests to impersonate users or groups to test permissions and troubleshoot access issues in {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/authentication-api-impersonation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/impersonation-system-admin-user.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/impersonation-system-admin-group.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/impersonation-multiple-groups-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/starting-impersonation-users-groups-pages.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/stopping-impersonation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/unauthenticated-users-cluster-role-binding.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [User impersonation (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation)