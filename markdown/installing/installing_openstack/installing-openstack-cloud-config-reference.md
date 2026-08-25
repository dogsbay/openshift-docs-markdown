---
title: OpenStack Cloud Controller Manager reference guide
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# OpenStack Cloud Controller Manager reference guide {id="installing-openstack-cloud-config-reference"}
{%- set context = "installing-openstack-cloud-config-reference" %}

The reference guide provides a comprehensive overview of the {{ rh_openstack_first }} Cloud Controller Manager (CCM) config map parameters, specifically detailing load balancer options and properties automatically managed by the Operator. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-openstack-external-ccm.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cloud Controller Manager (Kubernetes documentation)](https://kubernetes.io/docs/concepts/architecture/cloud-controller/)

{% leveloffset +1 %}{% include "./modules/cluster-cloud-controller-config-osp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ccm-config-lb-options.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-cloud-controller-config-overrides.md" %}{% endleveloffset %}