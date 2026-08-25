{%- set _mod_docs_content_type = "CONCEPT" %}
# Private clusters in Azure {id="private-clusters-about-azure_{{ context }}"}

To create a private cluster on Microsoft Azure, you must provide an existing private VNet and subnets to host the cluster. The installation program must also be able to resolve the DNS records that the cluster requires. The installation program configures the Ingress Operator and API server for only internal traffic. {._abstract}

Depending how your network connects to the private VNET, you might need to use a DNS forwarder to resolve the cluster’s private DNS records. The cluster’s machines use `168.63.129.16` internally for DNS resolution. For more information, see "What is Azure Private DNS?" and "What is IP address 168.63.129.16?".

The cluster still requires access to internet to access the Azure APIs.

The following items are not required or created when you install a private cluster:

*   A `BaseDomainResourceGroup`, since the cluster does not create public records
*   Public IP addresses
*   Public DNS records
*   Public endpoints

        The cluster is configured so that the Operators do not create public records for the cluster and all cluster machines are placed in the private subnets that you specify.

## Limitations {id="private-clusters-limitations-azure_{{ context }}"}

Private clusters on Azure are subject to only the limitations that are associated with the use of an existing VNet.