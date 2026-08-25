---
title: Manually importing a hosted cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Manually importing a hosted cluster {id="hcp-import"}
{%- set context = "hcp-import" %}

Hosted clusters are automatically imported into {{ mce_short }} after the hosted control plane becomes available. {._abstract}

{% leveloffset +1 %}{% include "./modules/hcp-import-limitations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating node pools in a hosted cluster](/hosted_control_planes/hcp-updating#hcp-update-node-pools_hcp-updating)
*   [Updating a control plane in a hosted cluster](/hosted_control_planes/hcp-updating#hcp-update-ocp-hc_hcp-updating)
*   [Discovering {{ mce }} hosted clusters in {{ rh_rhacm_title }}](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/multicluster_engine_operator_with_red_hat_advanced_cluster_management/hosted-acm#discover-hosted-acm)

{% leveloffset +1 %}{% include "./modules/hcp-import-manual.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-import-manual-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-import-disable.md" %}{% endleveloffset %}