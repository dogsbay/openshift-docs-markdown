{%- set _mod_docs_content_type = "CONCEPT" %}
# Private clusters in {{ ibm_cloud_title }} {id="private-clusters-about-ibm-cloud_{{ context }}"}

To create a private cluster on {{ ibm_cloud_name }}, you must provide an existing private VPC and subnets. The installation program must also resolve the DNS records that the cluster requires, and configures the Ingress Operator and API server for only internal traffic. {._abstract}

The cluster still requires access to internet to access the {{ ibm_cloud_name }} APIs.

The following items are not required or created when you install a private cluster:

*   Public subnets
*   Public network load balancers, which support public ingress
*   A public DNS zone that matches the `baseDomain` for the cluster

The installation program does use the `baseDomain` that you specify to create a private DNS zone and the required records for the cluster. The cluster is configured so that the Operators do not create public records for the cluster and all cluster machines are placed in the private subnets that you specify.

## Limitations {id="private-clusters-limitations-ibm-cloud_{{ context }}"}

Private clusters on {{ ibm_cloud_name }} are subject only to the limitations associated with the existing VPC that was used for cluster deployment.