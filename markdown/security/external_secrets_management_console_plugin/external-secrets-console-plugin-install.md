---
title: "Installing {{ external_secrets_console_plugin }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing {{ external_secrets_console_plugin }} {id="external-secrets-console-plugin-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-console-plugin-install" %}

Install the {{ external_secrets_console_plugin }} from the {{ product_title }} web console **Software Catalog** to manage certificates and secrets across installed secrets management Operators.

{%- set FeatureName = "{{ external_secrets_console_plugin }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/external-secrets-console-plugin-install-web-console.md" %}{% endleveloffset %}