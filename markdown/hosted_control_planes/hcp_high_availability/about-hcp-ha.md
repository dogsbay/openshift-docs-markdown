---
title: "About high availability for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About high availability for {{ hcp }} {id="about-hcp-ha"}
{%- set context = "about-hcp-ha" %}

You can maintain high availability (HA) for {{ hcp }} by recovering etcd members for a hosted cluster, backing up and restoring etcd for a hosted cluster, and completing a disaster recovery process for a hosted cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/hcp-mgmt-component-loss-impact.md" %}{% endleveloffset %}