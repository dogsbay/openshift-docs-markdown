---
title: Understanding the cluster-compare plugin
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding the cluster-compare plugin {id="understanding-the-cluster-compare-plugin"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "understanding-cluster-compare" %}

The `cluster-compare` plugin is an OpenShift CLI (`oc`) plugin that compares a cluster configuration with a reference configuration. The plugin reports configuration differences while suppressing expected variations by using configurable validation rules and templates.

Use the `cluster-compare` plugin in development, production, and support scenarios to ensure cluster compliance with a reference configuration, and to quickly identify and troubleshoot relevant configuration differences.

{% leveloffset +1 %}{% include "./modules/cluster-compare-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/understanding-a-reference-config.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Telco RAN DU reference design specification for {{ product_title }}](/scalability_and_performance/telco-ran-du-rds#telco-ran-du-ref-design-specs)