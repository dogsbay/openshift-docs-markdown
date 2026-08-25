---
title: Integrating Dynamic Resource Allocation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Integrating Dynamic Resource Allocation {id="kueue-dra-integrating-dynamic-resource-allocation"}
{%- set context = "kueue-dra-integrating-dynamic-resource-allocation" %}

You can configure {{ kueue_name }} to manage quota for workloads that use Dynamic Resource Allocation (DRA) to request GPUs. When DRA quota management is configured, {{ kueue_name }} counts DRA device requests toward quota in the same way that it counts traditional resources such as CPU and memory.

{%- set FeatureName = "Kueue integration with Dynamic Resource Allocation (DRA)" %}
{% include "./snippets/technology-preview.md" %}

If DRA device quota is not configured, {{ kueue_name }} does not account for GPU requests when admitting workloads, which can result in teams exceeding their GPU allocation.

{% leveloffset +1 %}{% include "./modules/kueue-dra-quota-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kueue-dra-resourceclaimtemplates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kueue-dra-extended-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kueue-dra-partitionable-devices.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Allocating GPUs to pods by using DRA](/nodes/pods/nodes-pods-allocate-dra#nodes-pods-allocate-dra)
*   [Configuring quotas](/ai_workloads/kueue/configuring-quotas#configuring-quotas)
*   [Creating a Kueue custom resource](/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)