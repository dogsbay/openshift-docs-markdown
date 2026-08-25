---
title: Admission fair sharing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Admission fair sharing {id="admission-fair-sharing"}
{%- set context = "admission-fair-sharing" %}

Use admission fair sharing to fairly distribute workloads across local Queues that share a single `ClusterQueue`. 

You can balance workload admission by prioritizing workloads from local Queues that have used fewer resources historically. With admission fair sharing, you can track usage over time with a configurable decay function and apply admission penalties when workloads are admitted.

When multiple tenants share a single `ClusterQueue`, some tenants risk resource starvation. Admission fair sharing adresses this issue by meeting the following requirements:


Enforce multi-tenant fairness (business critical)
:   Ensure fair distribution of cluster resources across all tenants based on their usage history.  


Improve service predictability
:   Guarantee each tenant gets a consistent share of resources, reducing latency spikes and preventing starvation.


Enable scalable governance
:   Complement static quotas with dynamic, usage-based admission ordering that adapts as tenant demand changes.

{% leveloffset +1 %}{% include "./modules/kueue-configuring-kueue-instance-for-admission-fair-sharing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kueue-setting-resource-weights.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configuring-clusterqueue-for-admission-fair-sharing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configuring-localqueue-for-admission-fair-sharing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-verifying-the-admission-fair-sharing-status.md" %}{% endleveloffset %}