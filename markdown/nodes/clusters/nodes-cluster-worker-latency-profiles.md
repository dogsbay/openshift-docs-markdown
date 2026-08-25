---
title: Improving cluster stability in high latency environments using worker latency profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cluster-worker-latency-profiles" %}
{% include "./_attributes/common-attributes.md" %}
# Improving cluster stability in high latency environments using worker latency profiles {id="nodes-cluster-worker-latency-profiles"}

Review the following information to learn about _worker latency profiles_, which adjust the frequency that the Kubelet and the Kubernetes Controller Manager wait for status updates before taking action if a pod is unreachable. {._abstract}

{% include "./snippets/worker-latency-profile-intro.md" %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-worker-latency-profiles-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-worker-latency-profiles-using.md" %}{% endleveloffset %}