---
title: Recommended infrastructure practices
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Recommended infrastructure practices {id="recommended-infrastructure-practices"}
{%- set context = "recommended-infrastructure-practices" %}

This topic provides recommended performance and scalability practices for infrastructure in {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/infrastructure-node-sizing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/scaling-cluster-monitoring-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/prometheus-database-storage-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-cluster-monitoring.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Infrastructure Nodes in OpenShift 4](https://access.redhat.com/solutions/5034771)
*   [{{ product_title }} cluster maximums](/scalability_and_performance/planning-your-environment-according-to-object-maximums#planning-your-environment-according-to-object-maximums)
*   [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets)