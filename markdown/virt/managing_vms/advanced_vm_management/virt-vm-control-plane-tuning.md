---
title: Tune the control plane
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Tune the control plane {id="virt-vm-control-plane-tuning"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-control-plane-tuning" %}

You can configure how the control plane handles concurrency when you create or migrate virtual machines (VMs). For example, set the `QPS` or `burst` rates to batch create virtual machines (VMs) in a batch, or tune migration settings in the `HyperConverged` custom resource (CR).

{% leveloffset +1 %}{% include "./modules/virt-configuring-highburst-profile.md" %}{% endleveloffset %}