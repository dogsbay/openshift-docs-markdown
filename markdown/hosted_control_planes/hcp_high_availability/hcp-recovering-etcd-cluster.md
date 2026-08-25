---
title: "Recovering an unhealthy etcd cluster for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Recovering an unhealthy etcd cluster for {{ hcp }} {id="hcp-recovering-etcd-cluster"}
{%- set context = "hcp-recovering-etcd-cluster" %}

In a highly available control plane, three etcd pods run as a part of a stateful set in an etcd cluster. To recover an etcd cluster, identify unhealthy etcd pods by checking the etcd cluster health.

{% leveloffset +1 %}{% include "./modules/hosted-cluster-etcd-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-recover-failing-etcd-pods.md" %}{% endleveloffset %}