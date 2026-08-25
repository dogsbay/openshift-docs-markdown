---
title: Configuring OVN-Kubernetes internal IP address subnets
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring OVN-Kubernetes internal IP address subnets {id="configure-ovn-kubernetes-subnets"}
{%- set context = "configure-ovn-kubernetes-subnets" %}

As a cluster administrator, you can change the IP address ranges that the OVN-Kubernetes network plugin uses for the join and transit subnets. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-change-join-subnet.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-k-day-2-masq-subnet.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-change-transit-subnet.md" %}{% endleveloffset %}