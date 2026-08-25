---
title: Manually scaling control plane machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Manually scaling control plane machines {id="cpmso-manually-scaling-control-planes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cpmso-manually-scaling-control-planes" %}

Manually scale to 4 or 5 control plane nodes on bare-metal infrastructure to recover from a degraded state, perform deep-level debugging, or ensure control plane stability in complex scenarios.


:::important

Red&#160;Hat supports a cluster that has 4 or 5 control plane nodes only on bare-metal infrastructure.

:::


{% leveloffset +1 %}{% include "./modules/creating-control-plane-node.md" %}{% endleveloffset %}