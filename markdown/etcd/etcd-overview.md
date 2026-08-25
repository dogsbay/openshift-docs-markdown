---
title: Overview of etcd
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Overview of etcd {id="etcd-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "etcd-overview" %}

etcd is the primary Kubernetes data store on {{ product_title }}. Knowing how disk, network, and consensus latency affect etcd helps you keep the control plane reliable.

etcd (pronounced et-see-dee) is a consistent, distributed key-value store that stores small amounts of data across a cluster of machines that can fit entirely in memory. As the core component of many projects, etcd is also the primary data store for Kubernetes, which is the standard system for container orchestration.

By using etcd, you can benefit in several ways:

*   Support consistent uptime for your cloud-native applications, and keep them working even if individual servers fail
*   Store and replicate all cluster states for Kubernetes
*   Distribute configuration data to offer redundancy and resiliency for the configuration of nodes


:::important

The default etcd configuration optimizes container orchestration. Use it as designed for the best results.

:::


{% leveloffset +1 %}{% include "./modules/how-etcd-works.md" %}{% endleveloffset %}

**Additional resources**

*   [Recommended etcd practices](/etcd/etcd-practices#etcd-practices)

{% leveloffset +1 %}{% include "./modules/understand-etcd-performance.md" %}{% endleveloffset %}