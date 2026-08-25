---
title: "Load balancing on {{ rh_openstack }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Load balancing on {{ rh_openstack }} {id="load-balancing-openstack"}
{%- set context = "load-balancing-openstack" %}

To distribute network traffic and communications activity evenly across your compute instances in {{ rh_openstack }}, configure load balancing services. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-osp-loadbalancer-limitations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-osp-loadbalancer-etp-local.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-api-octavia.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-api-scaling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-services-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-osp-configuring-external-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-osp-specify-floating-ip.md" %}{% endleveloffset %}