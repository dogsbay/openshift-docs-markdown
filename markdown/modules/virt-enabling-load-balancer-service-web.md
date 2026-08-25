{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling load balancer service creation by using the web console {id="virt-enabling-load-balancer-service-web_{{ context }}"}

You can enable the creation of load balancer services for a virtual machine (VM) by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have configured a load balancer for the cluster.
*   You have logged in as a user with the `cluster-admin` role.
*   You created a network attachment definition for the network.

**Procedure**

1.  Go to **Virtualization** -> **Settings**.
1.  Click **Cluster**.
1.  Expand **General settings** and **SSH configuration**.
1.  Set **SSH over LoadBalancer service** to on.