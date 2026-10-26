{%- set _mod_docs_content_type = "CONCEPT" %}
# Access a VM on a secondary network by using its external FQDN {id="virt-access-vm-external-fqdn_{{ context }}"}

You can access a virtual machine (VM) that is attached to a secondary network interface from outside the cluster by using its fully qualified domain name (FQDN). You must configure the DNS server, retrieve the cluster FQDN, then connect to the VM by using the `ssh` command. {._abstract}

{%- set FeatureName = "Accessing a VM from outside the cluster by using its FQDN" %}
{% include "./snippets/technology-preview.md" %}

## Additional resources {id="additional-resources-virt-access-vm-external-fqdn_{{ context }}" ._additional-resources}
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Configuring ingress cluster traffic by using a load balancer](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-load-balancer#configuring-ingress-cluster-traffic-load-balancer)
*   [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
{%- endif %}
*   [Configuring IP addresses for virtual machines](/virt/vm_networking/virt-configuring-viewing-ips-for-vms#virt-configuring-viewing-ips-for-vms)