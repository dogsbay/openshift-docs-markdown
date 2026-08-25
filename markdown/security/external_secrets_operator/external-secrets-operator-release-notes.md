---
title: "{{ external_secrets_operator }} release notes"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-operator-release-notes" %}
# {{ external_secrets_operator }} release notes {id="external-secrets-operator-release-notes"}

The {{ external_secrets_operator }} is a cluster-wide service that provides lifecycle management for secrets fetched from external secret management systems.

These release notes track the development of {{ external_secrets_operator_short }}.

For more information, see [{{ external_secrets_operator_short }} overview](/security/external_secrets_operator/index#external-secrets-operator-about).

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-rn-1-2.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-rn-1-1-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-rn-1-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-rn-1-0-1.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-rn-1-0.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-rn-0-1.md" %}{% endleveloffset %}