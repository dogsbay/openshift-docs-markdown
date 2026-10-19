{%- set _mod_docs_content_type = "CONCEPT" %}
# Distributing certificates by using trust-manager operand {id="cert-manager-trust-manager-con_{{ context }}"}

The trust-manager operand simplifies the distribution of certificate authority (CA) certificates across {{ product_title }} clusters. As an administrator, you can configure the operand according to the cluster requirements and manage trust bundles efficiently. {._abstract}

{%- set FeatureName = "Distributing certificates by using trust manager" %}
{% include "./snippets/technology-preview.md" %}

The trust-manager operand provides the following benefits:

*   Distribution of CA certificates across your cluster as a Day 2 operation.
*   Consolidation of certificates from multiple sources, such as ConfigMaps, Secrets, inline data, and default CAs, into a single trust bundle.
*   Automatic updates to target objects whenever the underlying source certificates change.
*   Creation of trust bundles as secret objects for applications that explicitly require secrets instead of ConfigMap objects.
*   Automatic integration with the default trusted CA bundle of the cluster, requiring no manual configuration.