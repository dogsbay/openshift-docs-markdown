---
title: Configuring ingress cluster traffic for a service external IP
---

# Configuring ingress cluster traffic for a service external IP {#configuring-ingress-cluster-traffic-service-external-ip}

You can use either a MetalLB implementation or an IP failover deployment to attach an ExternalIP resource to a service so that the service is available to traffic outside your OpenShift Container Platform cluster.

Hosting an external IP address in this way is only applicable for a cluster installed on bare-metal hardware.

You must ensure that you correctly configure the external network infrastructure to route traffic to the service.

Before you begin the procedure, ensure that you meet the following prerequisite:

- You configured your cluster with ExternalIPs enabled. For more information, see "Configuring ExternalIPs for services" in the *Additional resources* section.

> [!NOTE]
> Do not use the same ExternalIP for the egress IP.

## Additional resources {#configuring-ingress-cluster-traffic-service-external-ip-additional-resources}

[Configuring ExternalIPs for services](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-externalip#configuring-externalip)

- [About MetalLB and the MetalLB Operator](/networking/networking_operators/metallb-operator/about-metallb#about-metallb)
- [Configuring IP failover](/networking/configuring_network_settings/configuring-ipfailover#configuring-ipfailover)
- [Configuring ExternalIPs for services](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-externalip#configuring-externalip)
