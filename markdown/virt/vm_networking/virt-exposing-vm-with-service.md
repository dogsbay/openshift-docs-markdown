---
title: Exposing a virtual machine by using a service
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Exposing a virtual machine by using a service {id="virt-exposing-vm-with-service"}
{%- set context = "virt-exposing-vm-with-service" %}

You can expose a virtual machine (VM) within or outside the cluster by exposing a VM as a Kubernetes service. You can leverage native load balancing and observability tools that provide unified traffic management, consistent SSL termination, and centralized security policies across hybrid workloads. {._abstract}

{% leveloffset +1 %}{% include "./modules/virt-about-services.md" %}{% endleveloffset %}

{%- if not openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/virt-dual-stack-support-services.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/virt-creating-service-cli.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Configuring ingress cluster traffic by using a `NodePort`](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#configuring-ingress-cluster-traffic-nodeport)
*   [Configuring ingress cluster traffic by using a load balancer](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-load-balancer#configuring-ingress-cluster-traffic-load-balancer)
*   [Installing the MetalLB Operator](/networking/networking_operators/metallb-operator/metallb-operator-install#metallb-operator-install)
*   [Configuring services to use MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-services#metallb-configure-services)
{% endif %}