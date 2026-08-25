---
title: Using cohorts
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using cohorts {id="using-cohorts"}
{%- set context = "using-cohorts" %}

You can use cohorts to group cluster queues and determine which cluster queues can share borrowable resources with each other.

Borrowable resources are defined as the unused nominal quota of all the cluster queues in a cohort.

By using cohorts, you can optimize resource utilization, prevent under-utilization, and enable fair sharing configurations.
In addition, you can simplify resource management and allocation between teams, because you can group cluster queues for related workloads or for each team.
You can also use cohorts to set resource quotas at a group level to define the limits for resources that a group of cluster queues can consume.

{% leveloffset +1 %}{% include "./modules/kueue-clusterqueue-configuring-cohorts-reference.md" %}{% endleveloffset %}