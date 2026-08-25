---
title: "Managing {{ hcp }} on {{ rh_openstack }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing {{ hcp }} on {{ rh_openstack }} {id="hcp-manage-openstack"}
{%- set context = "hcp-manage-openstack" %}

After you deploy {{ hcp }} on {{ rh_openstack_first }} agent machines, you can manage a hosted cluster.

{% leveloffset +1 %}{% include "./modules/hcp-openstack-accessing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-openstack-autoscale.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-manage-openstack-az.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hosted-clusters-openstack-addl-ports-cases.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hosted-clusters-openstack-addl-ports-options.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hosted-clusters-openstack-addl-ports-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hosted-clusters-openstack-performance.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hosted-clusters-openstack-performance-tuning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hosted-clusters-openstack-performance-enabling.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sr-iov-operator_installing-sriov-operator)