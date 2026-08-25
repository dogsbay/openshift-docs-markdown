---
title: Uninstalling the External Secrets Operator for Red Hat OpenShift
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Uninstalling the External Secrets Operator for Red Hat OpenShift {id="external-secrets-operator-uninstall"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-operator-uninstall" %}

You can remove the {{ external_secrets_operator }} from {{ product_title }} by uninstalling the Operator and removing its related resources.

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-uninstall-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-remove-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-remove-resources-cli.md" %}{% endleveloffset %}