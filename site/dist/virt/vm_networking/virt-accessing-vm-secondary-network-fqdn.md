---
title: Accessing a virtual machine by using its external FQDN
---

# Accessing a virtual machine by using its external FQDN {#virt-accessing-vm-secondary-network-fqdn}

You can access a virtual machine (VM) that is attached to a secondary network interface from outside the cluster by using its fully qualified domain name (FQDN). You must configure the DNS server, retrieve the cluster FQDN, then connect to the VM by using the `ssh` command.

## Additional resources {#additional-resources_virt-accessing-vm-secondary-network-fqdn}

- [Configuring ingress cluster traffic by using a load balancer](/openshift-docs-markdown/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-load-balancer#configuring-ingress-cluster-traffic-load-balancer)
- [About MetalLB and the MetalLB Operator](/openshift-docs-markdown/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
- [Configuring IP addresses for virtual machines](/openshift-docs-markdown/virt/vm_networking/virt-configuring-viewing-ips-for-vms#virt-configuring-viewing-ips-for-vms)
