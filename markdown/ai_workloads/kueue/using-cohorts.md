---
title: Using cohorts
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using cohorts {id="using-cohorts"}
{%- set context = "using-cohorts" %}

You can use cohorts to group cluster queues and determine which cluster queues can share borrowable resources with each other. {._abstract}

Cluster queues in the same cohort tree can borrow unused quota from other cluster queues or cohorts. Borrowing and lending limits apply throughout the tree.

By using cohorts, you can optimize resource utilization, prevent under-utilization, and enable fair sharing configurations.
In addition, you can simplify resource management and allocation between teams, because you can group cluster queues for related workloads or for each team.
You can also use cohorts to set resource quotas at a group level to define the limits for resources that a group of cluster queues can consume.

{% leveloffset +1 %}{% include "./modules/kueue-clusterqueue-configuring-cohorts-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-understanding-hierarchical-cohorts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configuring-hierarchical-cohorts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-hierarchical-cohort-metrics.md" %}{% endleveloffset %}

## Additional resources {id="using-cohorts-additional-resources_{{ context }}" ._additional-resources}

*   [Configuring quotas](/ai_workloads/kueue/configuring-quotas#configuring-quotas)
*   [Configuring fair sharing](/ai_workloads/kueue/configuring-fairsharing#configuring-fairsharing)
*   [Creating a Kueue custom resource](/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)
*   [Cohorts (Kubernetes documentation)](https://kueue.sigs.k8s.io/docs/concepts/cohort/)