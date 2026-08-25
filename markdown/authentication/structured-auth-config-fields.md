---
title: Configuring advanced direct authentication fields
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring advanced direct authentication fields {id="structured-auth-config-fields"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "structured-auth-config-fields" %}

You can configure advanced direct authentication fields in the `authentications.config.openshift.io` custom resource definition (CRD) to enable enhanced OIDC configurations, security enforcement, and flexible token validation for standalone and hosted control plane (HCP) clusters.

{%- set FeatureName = "Advanced direct authentication fields" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/structured-auth-config-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/structured-auth-config-discovery-url.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/structured-auth-config-cel-claim-mapping.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/structured-auth-config-claim-validation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/structured-auth-config-user-validation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/structured-auth-config-fields-reference.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling direct authentication with an external OIDC identity provider](/authentication/external-auth#external-auth)
*   [Common Expression Language (CEL) specification](https://cel.dev/)
*   [Common Expression Language in Kubernetes](https://kubernetes.io/docs/reference/using-api/cel/)