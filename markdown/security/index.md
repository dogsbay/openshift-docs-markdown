---
title: OpenShift Container Platform security and compliance
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# {{ product_title }} security and compliance {id="security-compliance-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "security-compliance-overview" %}

Review the security and compliance capabilities available in {{ product_title }}, and learn how to secure your cluster.

{% leveloffset +1 %}{% include "./modules/security-overview-capabilities.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-compliance-capabilities.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Understanding authentication](/authentication/understanding-authentication#understanding-authentication)
*   [Configuring the internal OAuth server](/authentication/configuring-internal-oauth#configuring-internal-oauth)
*   [Understanding identity provider configuration](/authentication/understanding-identity-provider#understanding-identity-provider)
*   [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
*   [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies)