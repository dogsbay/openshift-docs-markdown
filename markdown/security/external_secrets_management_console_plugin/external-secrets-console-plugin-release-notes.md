---
title: External Secrets Management Console Plug-in release notes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# External Secrets Management Console Plug-in release notes {id="external-secrets-console-plugin-release-notes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-console-plugin-release-notes" %}

The {{ external_secrets_console_plugin }} provides a unified OpenShift Console interface for viewing and managing secrets-related custom resources (CRs) from multiple Operators such as cert-manager, External Secrets Operator, and Secrets Store CSI Driver.

These release notes track the development of {{ external_secrets_console_plugin }}.

For more information, see [{{ external_secrets_operator_short }} overview](/security/external_secrets_management_console_plugin/index#external-secrets-console-plugin-overview).

{%- set FeatureName = "{{ external_secrets_console_plugin }}" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/external-secrets-console-plugin-release-notes-tp.md" %}{% endleveloffset %}