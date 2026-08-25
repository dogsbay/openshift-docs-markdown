---
title: "{{ external_secrets_console_plugin }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ external_secrets_console_plugin }} {id="external-secrets-console-plugin-overview"}
{%- set context = "external-secrets-console-plugin-overview" %}

The {{ external_secrets_console_plugin }} is an Operator that manages the secrets and custom resource definitions (CRDs) for the secrets management Operators. Using {{ external_secrets_console_plugin }}, you can monitor and delete the custom resources (CRs) of all the installed secrets management Operators. {._abstract}

{%- set FeatureName = "{{ external_secrets_console_plugin }}" %}
{% include "./snippets/technology-preview.md" %}

The following secrets management Operators can be managed with {{ external_secrets_console_plugin }}:

*   {{ external_secrets_operator }}
*   {{ cert_manager_operator }}
*   {{ secrets_store_operator }}

You can use the plug-in to complete the following tasks:

*   View and filter secrets-related CRs from all installed secrets management Operators in a unified dashboard.
*   Inspect resource details including metadata, spec, status, and Kubernetes events.
*   Delete CRs directly from the console with name-confirmation.
*   View real-time resource health and status, including sync state, certificate expiry, and provider type.
*   Automatic Operator detection that shows resources only from Operators that are installed on the cluster.