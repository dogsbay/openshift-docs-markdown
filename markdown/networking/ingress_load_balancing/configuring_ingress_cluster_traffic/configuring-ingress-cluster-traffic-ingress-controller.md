---
title: Configuring ingress cluster traffic by using an Ingress Controller
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring ingress cluster traffic by using an Ingress Controller {id="configuring-ingress-cluster-traffic-ingress-controller"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-ingress-cluster-traffic-ingress-controller" %}

You can use the Ingress Controller to control how external users communicate with services that run inside the cluster.

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
Before you begin any of the procedures that are listed in the Configuring ingress cluster traffic by using an Ingress Controller document, ensure that you meet the following prerequisites. A cluster administrator performs these prerequisites:

*   Set up the external port to the cluster networking environment so that requests
can reach the cluster.
*   Make sure there is at least one user with cluster admin role. To add this role
to a user, run the following command:
    ```terminal
    $ oc adm policy add-cluster-role-to-user cluster-admin username
    ```
*   You have an {{ product_title }} cluster with at least one master and at least one node and a system outside the cluster that has network access to the cluster. This procedure assumes that the external system is on the same subnet as the cluster. The additional networking required for external systems on a different subnet is out-of-scope for this topic.

{% leveloffset +1 %}{% include "./modules/nw-using-ingress-and-routes.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/nw-creating-project-and-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-exposing-service.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +1 %}{% include "./modules/nw-ingress-sharding-concept.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ingress-sharding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-traditional-sharding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-overlapped-sharding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-sharding-default.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-sharding-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-sharding-route-labels.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-sharding-namespace-labels.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-sharding-route-configuration.md" %}{% endleveloffset %}

### Additional resources {id="additional-resources_ingress-sharding"}

*   [Baseline Ingress Controller (router) performance](/scalability_and_performance/optimization/routing-optimization#baseline-router-performance_routing-optimization)
*   [Configuring the Ingress Controller](/networking/networking_operators/ingress-operator#configuring-ingress-controller)
*   [Installing a cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
*   [Installing a cluster on vSphere](/installing/installing_vsphere/upi/installing-vsphere#installing-vsphere)
*   [About network policy](/networking/network_security/network_policy/about-network-policy#about-network-policy)
{% endif %}