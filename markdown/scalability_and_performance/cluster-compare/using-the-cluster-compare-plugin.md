---
title: Using the cluster-compare plugin
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using the cluster-compare plugin {id="using-the-cluster-compare-plugin"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-cluster-compare-plugin" %}

You can use the `cluster-compare` plugin to compare a reference configuration with a configuration from a live cluster or `must-gather` data.

{% leveloffset +1 %}{% include "./modules/using-cluster-compare-live-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/using-cluster-compare-must-gather.md" %}{% endleveloffset %}

**Additional resources**

*   [Gathering data about your cluster](/support/gathering-cluster-data#about-must-gather_gathering-cluster-data)

{% leveloffset +1 %}{% include "./modules/cluster-compare-reference-args.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/using-cluster-compare-telco-ref.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Comparing a cluster with the telco RAN DU reference configuration](/scalability_and_performance/telco-ran-du-rds#using-cluster-compare-telco-ran_ran-ref-design-crs)
*   [Comparing a cluster with the telco core reference configuration](/scalability_and_performance/telco-core-rds#using-cluster-compare-telco_core_telco-core)