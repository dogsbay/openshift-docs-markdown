---
title: Configuring ingress cluster traffic by using a NodePort
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring ingress cluster traffic by using a NodePort {id="configuring-ingress-cluster-traffic-nodeport"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-ingress-cluster-traffic-nodeport" %}

To enable external access to your application for specific networking requirements, expose a service by using a `NodePort`. 

This configuration opens a specific port on every node in the cluster, allowing external traffic to reach your workloads by using an IP address of any node.

{{ product_title }} provides methods for communicating from outside the cluster with services running in the cluster. This method uses a `NodePort`.

Before starting the following procedures, the administrator must complete the following prerequisite tasks:

*   Set up the external port to the cluster networking environment so that requests can reach the cluster.
*   Have an {{ product_title }} cluster with at least one control plane node, at least one compute node, and a system outside the cluster that has network access to the cluster. This procedure assumes that the external system is on the same subnet as the cluster. The additional networking required for external systems on a different subnet is out-of-scope for this topic.
*   Make sure there is at least one user with cluster admin role. To add this role to a user, run the following command:
    ```
    $ oc adm policy add-cluster-role-to-user cluster-admin <user_name>
    ```

{% leveloffset +1 %}{% include "./modules/nw-using-nodeport.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-creating-project-and-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-exposing-service.md" %}{% endleveloffset %}

## Additional resources {id="configuring-ingress-cluster-traffic-nodeport-additional-resources"}

*   [Configuring the node port service range](/networking/configuring_network_settings/configuring-node-port-service-range#configuring-node-port-service-range)
*   [Adding a single NodePort service to an Ingress Controller](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/nw-configuring-ingress-controller-endpoint-publishing-strategy#nw-ingress-controller-nodeportservice-projects_nw-configuring-ingress-controller-endpoint-publishing-strategy)