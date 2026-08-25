---
title: "Managing distributed workloads with the {{ lws_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing distributed workloads with the {{ lws_operator }} {id="lws-managing"}

{%- set context = "lws-managing" %}

You can use the {{ lws_operator }} to manage distributed inference workloads and process large-scale inference requests efficiently.

{% leveloffset +1 %}{% include "./modules/lws-install-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/lws-config.md" %}{% endleveloffset %}

## Additional resources {id="lws-managing_additional-resources"}

*   [LeaderWorkerSet API (Kubernetes)](https://lws.sigs.k8s.io/docs/reference/leaderworkerset.v1/)