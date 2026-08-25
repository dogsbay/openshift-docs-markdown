{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a network Ingress to your {{ product_title }} cluster {id="ocm-networking-tab-adding-ingress_{{ context }}"}

You can add a network Ingress to your cluster from the {{ cluster_manager_url }} web UI. {._abstract}

**Prerequisites**

*   You have a Red Hat account.
*   You have the required permissions to make changes to your cluster in {{ cluster_manager }}.

**Procedure**

1.  From the ***Networking*** tab in {{ cluster_manager }}, click the ***Additional application router*** toggle to enable the Ingress. There are two options you can add to the additional router:
    1.  ***Make router private***: This checkbox allows you to control cluster privacy. By default, your Ingress router is publicly exposed and allows anyone access. You can limit access to applications or websites you run on your cluster by selecting this checkbox. For example, if you only want internal employees to access this cluster, then using this option requires a private connection, such as a virtual private network (VPN) or virtual private cloud (VPC) peering connection.
    1.  ***Label match for additional router***: This field provides a way to target the specific route you want exposed in this additional Ingress router. By default, the router exposes all routes. If you leave this field blank, these routes stay exposed.

        A commonly used setup has a private default router, which means any applications deployed require a VPN or VPC peering to access. You can create an additional public router with a label match of  `route=external`. Then, if you add the `route=external` label to additional routes, the additional router matches this label and exposes it for public use.
1.  Click ***Change settings*** to confirm that you want to add the network Ingress.