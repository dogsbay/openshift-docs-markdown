---
title: "Disconnected environment support in {{ olmv1 }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Disconnected environment support in {{ olmv1 }} {id="disconnected-catalogs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "disconnected-catalogs" %}

{{ olmv1_first }} supports cluster extension lifecycle management in internet-disconnected environments. This feature helps cluster administrators run mission-critical production workloads in high-security, disconnected clusters.

{% leveloffset +1 %}{% include "./modules/olmv1-about-disconnected.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring images for a disconnected installation using the oc-mirror plugin v1](/disconnected/installing-mirroring-disconnected#installing-mirroring-disconnected)
*   [Mirroring images for a disconnected installation using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)