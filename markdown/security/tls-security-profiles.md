---
title: Configuring TLS security profiles
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring TLS security profiles {id="tls-security-profiles"}
{%- set context = "tls-security-profiles" %}

To enforce secure cryptographic libraries for the {{ product_title }} components, cluster administrators can configure TLS security profiles to control cipher usage when the client connects to the Ingress Controller, the control plane, or the kubelet. {._abstract}

The control plane includes the following components:

*   Kubernetes API server
*   Kubernetes controller manager
*   Kubernetes scheduler
*   OpenShift API server
*   OpenShift OAuth API server
*   OpenShift OAuth server
*   etcd
*   Machine Config Operator
*   Machine Config Server.

{% leveloffset +1 %}{% include "./modules/tls-profiles-understanding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/tls-profiles-view-details.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/tls-profiles-ingress-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/tls-profiles-kubernetes-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/tls-profiles-kubelet-configuring.md" %}{% endleveloffset %}