---
title: About the Cloud Credential Operator in mint mode
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About the Cloud Credential Operator in mint mode {id="cco-mode-mint"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cco-mode-mint" %}

You can use the Cloud Credential Operator (CCO) in mint mode to create and reconcile credentials for components in the cluster. 

Mint mode is the default CCO credentials mode for {{ product_title }} on platforms that support it. Mint mode supports {{ aws_first }} and {{ gcp_first }} clusters.

{% leveloffset +1 %}{% include "./modules/mint-mode-credentials-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/mint-mode-permission-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/admin-credentials-root-secret-formats.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-rotating-cloud-creds.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Removing cloud provider credentials](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)