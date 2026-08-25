---
title: About the Cloud Credential Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About the Cloud Credential Operator {id="about-cloud-credential-operator"}
{%- set context = "about-cloud-credential-operator" %}

To allow {{ product_title }} components to request cloud provider credentials with the specific permissions that are required for the cluster to run, you can use the Cloud Credential Operator (CCO) to manage cloud provider credentials as custom resource definitions (CRDs).  {._abstract}

You can configure the Cloud Credential Operator (CCO) to operate in several different modes. These options provide transparency and flexibility in how the CCO uses cloud credentials.

{% leveloffset +1 %}{% include "./modules/cco-mode-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cco-determine-mode.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cco-determine-mode-gui.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cco-determine-mode-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cco-about-default-behaviors.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_about-cloud-credential-operator_{{ context }}" ._additional-resources}

*   [Cluster Operators reference page for the Cloud Credential Operator](/operators/operator-reference#cloud-credential-operator_operator-reference)
*   [About the Cloud Credential Operator in mint mode](/authentication/managing_cloud_provider_credentials/cco-mode-mint#cco-mode-mint)
*   [About the Cloud Credential Operator in passthrough mode](/authentication/managing_cloud_provider_credentials/cco-mode-passthrough#cco-mode-passthrough)
*   [About the Cloud Credential Operator in manual mode with long-term credentials for components](/authentication/managing_cloud_provider_credentials/cco-mode-manual#cco-mode-manual)
*   [About the Cloud Credential Operator in manual mode with short-term credentials for components](/authentication/managing_cloud_provider_credentials/cco-short-term-creds#cco-short-term-creds)