{%- set _mod_docs_content_type = "CONCEPT" %}
# Private clusters in {{ ibm_power_server_title }} {id="private-clusters-about-ibm-power-virtual-server_{{ context }}"}

To create a private cluster on {{ ibm_power_server_name }}, you must provide an existing private Virtual Private Cloud (VPC) and subnets to host the cluster. The installation program must also be able to resolve the DNS records that the cluster requires. The installation program configures the Ingress Operator and API server for only internal traffic.

The cluster still requires access to internet to access the {{ ibm_cloud_name }} APIs.

The following items are not required or created when you install a private cluster:

*   Public subnets
*   Public network load balancers, which support public Ingress
*   A public DNS zone that matches the `baseDomain` for the cluster

You will also need to create an {{ ibm_name }} DNS service containing a DNS zone that matches your `baseDomain`. Unlike standard deployments on Power VS which use {{ ibm_name }} CIS for DNS, you must use {{ ibm_name }} DNS for your DNS service.

## Limitations {id="private-clusters-limitations-ibm-power-virtual-server_{{ context }}"}

Private clusters on {{ ibm_power_server_name }} are subject only to the limitations associated with the existing VPC that was used for cluster deployment.