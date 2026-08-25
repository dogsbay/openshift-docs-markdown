---
title: Configuring ingress cluster traffic by using a NodePort
---

# Configuring ingress cluster traffic by using a NodePort {#configuring-ingress-cluster-traffic-nodeport}

To enable external access to your application for specific networking requirements, expose a service by using a `NodePort`.

This configuration opens a specific port on every node in the cluster, allowing external traffic to reach your workloads by using an IP address of any node.

OpenShift Container Platform provides methods for communicating from outside the cluster with services running in the cluster. This method uses a `NodePort`.

Before starting the following procedures, the administrator must complete the following prerequisite tasks:

- Set up the external port to the cluster networking environment so that requests can reach the cluster.
- Have an OpenShift Container Platform cluster with at least one control plane node, at least one compute node, and a system outside the cluster that has network access to the cluster. This procedure assumes that the external system is on the same subnet as the cluster. The additional networking required for external systems on a different subnet is out-of-scope for this topic.
- Make sure there is at least one user with cluster admin role. To add this role to a user, run the following command:

  ```
  $ oc adm policy add-cluster-role-to-user cluster-admin <user_name>
  ```

## Additional resources {#configuring-ingress-cluster-traffic-nodeport-additional-resources}

- [Configuring the node port service range](/openshift-docs-markdown/networking/configuring_network_settings/configuring-node-port-service-range#configuring-node-port-service-range)
- [Adding a single NodePort service to an Ingress Controller](/openshift-docs-markdown/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/nw-configuring-ingress-controller-endpoint-publishing-strategy#nw-ingress-controller-nodeportservice-projects_nw-configuring-ingress-controller-endpoint-publishing-strategy)
