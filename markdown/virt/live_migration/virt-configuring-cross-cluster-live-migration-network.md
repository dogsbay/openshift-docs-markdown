---
title: Configuring a cross-cluster live migration network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Configuring a cross-cluster live migration network {id="virt-configuring-cross-cluster-live-migration-network"}
{%- set context = "virt-configuring-cross-cluster-live-migration-network" %}

Cross-cluster live migration requires that the clusters be connected in the same network. Specifically, `virt-handler` pods must be able to communicate.

{% leveloffset +1 %}{% include "./modules/nw-multus-bridge-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-secondary-network-vm-live-migration.md" %}{% endleveloffset %}