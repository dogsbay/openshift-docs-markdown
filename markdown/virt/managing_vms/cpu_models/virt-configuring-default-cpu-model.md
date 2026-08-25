---
title: Configure CPU models
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configure CPU models {id="virt-configuring-default-cpu-model"}
{%- set context = "virt-configuring-default-cpu-model" %}

You can configure CPU models for your virtual machines at both the cluster level and individual VM level. Set a cluster-wide default CPU model to automatically apply to all new VMs, or configure a specific CPU model for individual VMs to override the cluster default. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-configuring-default-cpu-model.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-per-vm-cpu-model-configuration.md" %}{% endleveloffset %}