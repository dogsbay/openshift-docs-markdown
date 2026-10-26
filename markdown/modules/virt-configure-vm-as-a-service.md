{%- set _mod_docs_content_type = "CONCEPT" %}
# VM exposure as a Kubernetes service {id="virt-configure-vm-as-a-service_{{ context }}"}

You can expose a virtual machine (VM) within or outside the cluster by exposing a VM as a Kubernetes service. You can use native load balancing and observability tools that provide unified traffic management, consistent SSL termination, and centralized security policies across hybrid workloads. {._abstract}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Configuring ingress cluster traffic by using a `NodePort`](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#configuring-ingress-cluster-traffic-nodeport)
*   [Configuring ingress cluster traffic by using a load balancer](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-load-balancer#configuring-ingress-cluster-traffic-load-balancer)
*   [Installing the MetalLB Operator](/networking/networking_operators/metallb-operator/metallb-operator-install#metallb-operator-install)
*   [Configuring services to use MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-services#metallb-configure-services)
{% endif %}