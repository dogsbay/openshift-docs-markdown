---
title: Troubleshooting cluster comparisons
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting cluster comparisons {id="troubleshooting-cluster-comparisons"}

{%- set context = "troubleshooting-cluster-comparisons" %}

When using the `cluster-compare` plugin, you might see unexpected results, such as false positives or conflicts when multiple cluster custom resources (CRs) exist. {._abstract}

{% leveloffset +1 %}{% include "./modules/troubleshooting-cc-false-positives.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/troubleshooting-cc-multiple-matches.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Installing the cluster-compare plugin](/scalability_and_performance/cluster-compare/installing-cluster-compare-plugin#installing-cluster-compare_installing-cluster-compare-plugin)
*   [Configuring manual matching between CRs and templates](/scalability_and_performance/cluster-compare/advanced-ref-config-customization#cluster-compare-manual-match_advanced-ref-config-customization)