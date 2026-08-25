---
title: Tuning hosted control planes for low latency with the performance profile
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Tuning hosted control planes for low latency with the performance profile {id="cnf-tuning-low-latency-hosted-cp-nodes-with-perf-profile"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cnf-low-latency-perf-profile-hosted-cp" %}

Tune hosted control planes for low latency by applying a performance profile. With the performance profile, you can restrict CPUs for infrastructure and application containers and configure huge pages, Hyper-Threading, and CPU partitions for latency-sensitive processes.

{% leveloffset +1 %}{% include "./modules/cnf-create-performance-profiles-hosted-cp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cnf-gathering-data-about-hosted-cluster-using-must-gather.md" %}{% endleveloffset %}

**Additional resources**

*   [Gathering data about your cluster](/support/gathering-cluster-data#nodes-nodes-managing) 

{% leveloffset +2 %}{% include "./modules/cnf-running-the-performance-creator-profile-hosted.md" %}{% endleveloffset %}

**Additional resources**

*   [Performance Profile Creator arguments](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#performance-profile-creator-arguments_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +2 %}{% include "./modules/apply-performance-profile-hosted-cluster.md" %}{% endleveloffset %}