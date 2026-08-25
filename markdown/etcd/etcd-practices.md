---
title: Recommended etcd practices
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Recommended etcd practices {id="etcd-practices"}
{%- set context = "etcd-practices" %}

Follow storage, latency, and hardware validation guidance for etcd to reduce leader elections, API timeouts, and control plane instability on {{ product_title }}. {._abstract}

{% leveloffset +1 %}{% include "./modules/recommended-etcd-practices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/recommended-cluster-latency-etcd.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Setting tuning parameters for etcd](/etcd/etcd-performance#etcd-tuning-parameters_etcd-performance)

{% leveloffset +1 %}{% include "./modules/etcd-verify-hardware.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [How to use `fio` to check etcd disk performance in {{ product_title }}](https://access.redhat.com/solutions/4885641)
*   [etcd performance troubleshooting guide for {{ product_title }}](https://access.redhat.com/articles/6271341)