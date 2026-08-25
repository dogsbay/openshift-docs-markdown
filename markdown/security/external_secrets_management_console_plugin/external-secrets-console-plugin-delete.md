---
title: "Deleting certificates and secrets with {{ external_secrets_console_plugin }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deleting certificates and secrets with {{ external_secrets_console_plugin }} {id="external-secrets-console-plugin-delete"}
{%- set context = "external-secrets-console-plugin-delete" %}

Delete certificates and secrets from installed secrets management Operators using the {{ external_secrets_console_plugin }} in the {{ product_title }} web console. {._abstract}

{%- set FeatureName = "{{ external_secrets_console_plugin }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/external-secrets-console-plugin-delete-certificates-secrets.md" %}{% endleveloffset %}