---
title: "{{ oadp_short }} Self-Service"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ oadp_short }} Self-Service {id="oadp-self-service"}
{%- set context = "oadp-self-service" %}

Use {{ oadp_short }} Self-Service to enable namespace administrators to back up and restore their applications without cluster admin privileges. This helps you delegate backup operations while maintaining administrative control. {._abstract}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-namespace-scoped.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring an htpasswd identity provider](/authentication/identity_providers/configuring-htpasswd-identity-provider#configuring-htpasswd-identity-provider)

{% leveloffset +1 %}{% include "./modules/oadp-self-service-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-how-it-works.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-namespace-permissions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-unsupported-features.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-phases.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-self-service-about-nabsl.md" %}{% endleveloffset %}