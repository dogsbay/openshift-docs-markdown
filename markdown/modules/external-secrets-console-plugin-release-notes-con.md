{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ external_secrets_console_plugin }} release notes {id="external-secrets-console-plugin-release-notes-con_{{ context }}"}

The {{ external_secrets_console_plugin }} provides a unified OpenShift Console interface for viewing and managing secrets-related custom resources (CRs) from multiple Operators such as cert-manager, External Secrets Operator, and Secrets Store CSI Driver. {._abstract}

These release notes track the development of {{ external_secrets_console_plugin }}.

{%- set FeatureName = "{{ external_secrets_console_plugin }}" %}
{% include "./snippets/technology-preview.md" %}