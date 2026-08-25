{% if context == "installing-azure-private" %}
{%- set private = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# User-defined outbound routing {id="installation-azure-user-defined-routing_{{ context }}"}

You can configure user-defined outbound routing for a {{ product_title }} cluster to reach the internet without public IP addresses or a public load balancer. {._abstract}

You must use a pre-existing `VNet` for outbound routing when you install a cluster. The installation program does not configure this network.

When you configure a cluster to use user-defined routing, the installation program does not create the following resources:

*   Outbound rules for access to the internet.
*   Public IPs for the public load balancer.
*   Kubernetes Service object to add the cluster machines to the public load balancer for outbound requests.

Before you set user-defined routing, ensure that the following items are available:

*   Egress to the internet so that you can pull container images, unless you use an {{ product_registry }} mirror.
*   Access from the cluster to Azure APIs.
*   Access to the required allowlist endpoints.

Several pre-existing networking setups support internet access by using user-defined routing.

{% if restricted %}

## Restricted cluster with Azure Firewall {id="restricted-cluster-with-azure-firewall_{{ context }}"}

You can use Azure Firewall to restrict the outbound routing for the Virtual Network (`VNet`) that is used to install the {{ product_title }} cluster. You can create a {{ product_title }} cluster in a restricted network by using a `VNet` with Azure Firewall and configuring user-defined routing.


:::important

If you use Azure Firewall to restrict internet access, you must set the `publish` field to `Internal` in the `install-config.yaml` file. Azure Firewall does not work properly with Azure public load balancers.

:::

{% endif %}

{% if private %}

## Private cluster with network address translation {id="private-cluster-with-network-address-translation_{{ context }}"}

You can use Azure Virtual Network (`VNet`) network address translation (NAT) to provide outbound internet access for the subnets in your cluster.

When you use a `VNet` setup with Azure NAT and user-defined routing configured, you can create a private cluster with no public endpoints.

## Private cluster with Azure Firewall {id="private-cluster-with-azure-firewall_{{ context }}"}

You can use Azure Firewall to provide outbound routing for the `VNet` used to install the cluster.

When you use a `VNet` setup with Azure Firewall and user-defined routing configured, you can create a private cluster with no public endpoints.

## Private cluster with a proxy configuration {id="private-cluster-with-proxy-configuration_{{ context }}"}

You can use a proxy with user-defined routing to allow egress to the internet. You must ensure that cluster Operators do not access Azure APIs by using a proxy; Operators must have access to Azure APIs outside of the proxy.

When you use the default route table for subnets, with `0.0.0.0/0` populated automatically by Azure, all Azure API requests are routed over Azure’s internal network even though the IP addresses are public. As long as the Network Security Group rules allow egress to Azure API endpoints, proxies with user-defined routing configured allow you to create private clusters with no public endpoints.

## Private cluster with no internet access {id="private-cluster-with-no-internet-access_{{ context }}"}

You can install a private network that restricts all access to the internet, except the Azure API. Mirror the release image registry locally. Your cluster must have access to the following:

*   An {{ product_registry }} mirror that allows for pulling container images
*   Access to Azure APIs

With these requirements available, you can use user-defined routing to create private clusters with no public endpoints.
{% endif %}

{% if restricted or private %}

**Additional resources**
{._additional-resources}

{% if restricted %}
*   [Providing user-defined routing with Azure Firewall](https://learn.microsoft.com/en-us/azure/aks/egress-outboundtype#deploy-a-cluster-with-outbound-type-of-udr-and-azure-firewall)
*   [Azure Firewall does not work properly with Azure public load balancers](https://learn.microsoft.com/en-us/azure/firewall/integrate-lb) {._additional-resources}
{% endif %}

{% if private %}
*   [Azure VNet network address translation (NAT)](https://docs.microsoft.com/en-us/azure/virtual-network/nat-overview)
*   [Create a NAT gateway by using Azure CLI](https://docs.microsoft.com/en-us/azure/virtual-network/quickstart-create-nat-gateway-cli)
*   [Providing user-defined routing with Azure Firewall](https://docs.microsoft.com/en-us/azure/aks/egress-outboundtype#deploy-a-cluster-with-outbound-type-of-udr-and-azure-firewall)
{% endif %}
{% endif %}

{% if context == "installing-azure-private" %}
{%- set private = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set restricted = "" -%}
{% endif %}