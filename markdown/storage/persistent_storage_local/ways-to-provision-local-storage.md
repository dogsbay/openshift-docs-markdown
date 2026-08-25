---
title: Local storage overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Local storage overview {id="ways-to-provision-local-storage_{{ context }}"}
{%- set context = "ways-to-provision-local-storage" %}

Local storage provides direct access to disks attached to cluster nodes, delivering lower latency and higher throughput than network-attached or cloud-based storage. Use local storage for performance-sensitive workloads, single-node clusters, or environments without cloud storage infrastructure. {._abstract}

{% leveloffset +1 %}{% include "./modules/persistent-storage-local-top-level-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/comparison-of-solutions-to-provision-node-local-storage.md" %}{% endleveloffset %}