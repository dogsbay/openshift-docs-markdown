---
title: Understanding low latency tuning for cluster nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding low latency tuning for cluster nodes {id="cnf-understanding-low-latency"}
{%- set context = "cnf-understanding-low-latency" %}

By first understanding low latency tuning for cluster nodes, you can then use edge computing as a key role in reducing latency and congestion problems and improving application performance for telco and 5G network applications. {._abstract}

Maintaining a network architecture with the lowest possible latency is key for meeting the network performance requirements of 5G. Compared to 4G technology, with an average latency of 50 ms, 5G is targeted to reach latency of 1 ms or less. This reduction in latency boosts wireless throughput by a factor of 10.

{% leveloffset +1 %}{% include "./modules/cnf-understanding-low-latency.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Tuning for Zero Packet Loss in {{ rh_openstack_first }}](https://www.redhat.com/en/blog/tuning-zero-packet-loss-red-hat-openstack-platform-part-1)

{% leveloffset +1 %}{% include "./modules/cnf-about-hyperthreading-for-low-latency-and-real-time-applications.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring Hyper-Threading for a cluster](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-configuring-hyperthreading-for-a-cluster_cnf-tuning-low-latency-nodes-with-perf-profile)