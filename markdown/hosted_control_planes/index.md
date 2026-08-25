---
title: "{{ hcp_capital }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ hcp_capital }} overview {id="hcp-overview"}
{%- set context = "hcp-overview" %}

You can deploy {{ product_title }} clusters by using two different control plane configurations: standalone or {{ hcp }}.  {._abstract}

The standalone configuration uses dedicated virtual machines or physical machines to host the control plane. With {{ hcp }} for {{ product_title }}, you create control planes as pods on a management cluster without the need for dedicated virtual or physical machines for each control plane.

{% leveloffset +1 %}{% include "./modules/hosted-control-planes-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cluster lifecycle with {{ mce }} overview ({{ rh_rhacm_title }} official documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#cluster_mce_overview)

{% leveloffset +1 %}{% include "./modules/hcp-ocp-differences.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling etcd encryption](/etcd/etcd-encrypt#etcd-encrypt)

{% leveloffset +1 %}{% include "./modules/hcp-mce-acm-relationship-intro.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-acm-discover.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Discovering {{ mce_short }} hosted clusters in {{ rh_rhacm_title }} ({{ rh_rhacm_title }} official documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.11/html/clusters/cluster_mce_overview#discover-hosted-acm)

{% leveloffset +1 %}{% include "./modules/hosted-control-planes-version-support.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Kubernetes API versioning](https://kubernetes.io/docs/reference/using-api/#api-versioning)
*   [AMD64 release images](https://amd64.ocp.releases.ci.openshift.org/)
*   [ARM64 release images](https://arm64.ocp.releases.ci.openshift.org/)
*   [Multi-arch release images](https://multi.ocp.releases.ci.openshift.org/)

{% leveloffset +1 %}{% include "./modules/hosted-control-planes-concepts-personas.md" %}{% endleveloffset %}