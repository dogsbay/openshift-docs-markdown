---
title: Configuring network settings after installing OpenStack
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Configuring network settings after installing OpenStack {id="installing-openstack-network-config"}
{%- set context = "installing-openstack-network-config" %}

You can configure network settings for an {{ product_title }} on {{ rh_openstack_first }} cluster after installation.

{% leveloffset +1 %}{% include "./modules/installation-osp-configuring-api-floating-ip.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-enabling-ovs-offload.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-hardware-offload-attaching-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-pod-connections-ipv6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-pod-creating-ipv6.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-pod-adding-connections-ipv6.md" %}{% endleveloffset %}