---
title: Configuring ingress cluster traffic using a load balancer
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring ingress cluster traffic using a load balancer {id="configuring-ingress-cluster-traffic-load-balancer"}
{%- set context = "configuring-ingress-cluster-traffic-load-balancer" %}

{{ product_title }} provides methods for communicating from outside the cluster with services running in the cluster. This method uses a load balancer. {._abstract}

Before starting the following procedures, the administrator must complete the following prerequisite tasks:

*   Set up the external port to the cluster networking environment so that requests can reach the cluster.
*   Have an {{ product_title }} cluster with at least one control plane node, at least one compute node, and a system outside the cluster that has network access to the cluster. This procedure assumes that the external system is on the same subnet as the cluster. The additional networking required for external systems on a different subnet is out-of-scope for this topic.
*   Make sure there is at least one user with cluster admin role. To add this role to a user, run the following command:
    ```terminal
    $ oc adm policy add-cluster-role-to-user cluster-admin username
    ```

{% leveloffset +1 %}{% include "./modules/nw-using-load-balancer-getting-traffic.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-creating-project-and-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-exposing-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-create-load-balancer-service.md" %}{% endleveloffset %}