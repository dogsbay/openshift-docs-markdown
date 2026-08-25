---
title: Understanding authentication
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding authentication {id="understanding-authentication"}
{%- set context = "understanding-authentication" %}

To interact with {{ product_title }}, log in so the authentication layer can verify your identity. The authorization layer then uses your identity to determine which actions and resources you can access. {._abstract}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
As an administrator, you can configure authentication for {{ product_title }}.
{% endif %}

{% leveloffset +1 %}{% include "./modules/rbac-users.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rbac-groups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/rbac-api-authentication.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oauth-server-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/oauth-token-requests.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +3 %}{% include "./modules/authentication-api-impersonation.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [User impersonation (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation)

{% leveloffset +3 %}{% include "./modules/authentication-prometheus-system-metrics.md" %}{% endleveloffset %}

{% endif %}