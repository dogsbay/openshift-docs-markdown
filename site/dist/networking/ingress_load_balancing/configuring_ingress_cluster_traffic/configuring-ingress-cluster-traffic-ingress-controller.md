---
title: Configuring ingress cluster traffic by using an Ingress Controller
---

# Configuring ingress cluster traffic by using an Ingress Controller {#configuring-ingress-cluster-traffic-ingress-controller}

You can use the Ingress Controller to control how external users communicate with services that run inside the cluster.

Before you begin any of the procedures that are listed in the Configuring ingress cluster traffic by using an Ingress Controller document, ensure that you meet the following prerequisites. A cluster administrator performs these prerequisites:

- Set up the external port to the cluster networking environment so that requests can reach the cluster.
- Make sure there is at least one user with cluster admin role. To add this role to a user, run the following command:

  ```terminal
  $ oc adm policy add-cluster-role-to-user cluster-admin username
  ```
- You have an OpenShift Container Platform cluster with at least one master and at least one node and a system outside the cluster that has network access to the cluster. This procedure assumes that the external system is on the same subnet as the cluster. The additional networking required for external systems on a different subnet is out-of-scope for this topic.

### Additional resources {#additional-resources_ingress-sharding}

- [Baseline Ingress Controller (router) performance](/openshift-docs-markdown/scalability_and_performance/optimization/routing-optimization#baseline-router-performance_routing-optimization)
- [Configuring the Ingress Controller](/openshift-docs-markdown/networking/networking_operators/ingress-operator#configuring-ingress-controller)
- [Installing a cluster on bare metal](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
- [Installing a cluster on vSphere](/openshift-docs-markdown/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)
- [About network policy](/openshift-docs-markdown/networking/network_security/network_policy/about-network-policy#about-network-policy)
