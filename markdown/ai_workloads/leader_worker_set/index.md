---
title: "{{ lws_operator }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ lws_operator }} overview {id="lws-about"}

{%- set context = "lws-about" %}

Use the {{ lws_operator }} to manage multi-node AI/ML inference deployments efficiently. The {{ lws_operator }} treats groups of pods as one unit to simplify scaling, recovery, and updates for large workloads. {._abstract}

Using large language models (LLMs) for AI/ML inference often requires significant compute resources, and workloads typically must be sharded across multiple nodes. This can make deployments complex, creating challenges around scaling, recovery from failures, and efficient pod placement.

The {{ lws_operator }} simplifies these multi-node deployments by treating a group of pods as a single, coordinated unit. It manages the lifecycle of each pod in the group, scales the entire group together, and performs updates and failure recovery at the group level to ensure consistency.

{% leveloffset +1 %}{% include "./modules/lws-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/lws-arch.md" %}{% endleveloffset %}

## Additional resources {id="lws-about_additional-resources" ._additional-resources}

*   [LeaderWorkerSet documentation (Kubernetes)](https://lws.sigs.k8s.io/docs/overview/)