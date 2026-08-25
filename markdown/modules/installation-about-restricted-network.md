{% if context == "installing-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud = true -%}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ipi = true -%}
{%- set ipi_powervs = true -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-nutanix-installer-provisioned" %}
{%- set ipi = true -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set ipi = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# About installations in restricted networks {id="installation-about-restricted-networks_{{ context }}"}

You can install {{ product_title }} {{ product_version }} in a restricted network without an active internet connection to obtain software components. Restricted network installations can use installer-provisioned or user-provisioned infrastructure, depending on the cloud platform to which you are installing the cluster. {._abstract}

{% if not (ibm_power or ibm_cloud) %}
If you choose to perform a restricted network installation on a cloud platform, you still require access to its cloud APIs. Some cloud functions, such as Amazon Web Service’s Route 53 DNS and IAM services, require internet access.
Depending on your network, you might require less internet access for an installation on bare-metal hardware, Nutanix, or on VMware vSphere.
{% endif %}

{% if not ibm_cloud %}
To complete a restricted network installation, you must create a registry that mirrors the contents of the {{ product_registry }} and contains the installation media. You can create this registry on a mirror host, which can access both the internet and your closed network, or by using other methods that meet your restrictions.
{% endif %}

{% if not ipi %}

:::important

Because of the complexity of the configuration for user-provisioned installations, consider completing a standard user-provisioned infrastructure installation before you attempt a restricted network installation using user-provisioned infrastructure. Completing this test installation might make it easier to isolate and troubleshoot any issues that might arise during your installation in a restricted network.

:::

{% endif %}

{% if ibm_cloud %}
## Required internet access and an installation host {id="required-internet-access-and-an-installation-host_{{ context }}"}

You complete the installation using a bastion host or portable device that can access both the internet and your closed network. You must use a host with internet access to:

*   Download the installation program, the OpenShift CLI (`oc`), and the CCO utility (`ccoctl`).
*   Use the installation program to locate the {{ op_system_first }} image and create the installation configuration file.
*   Use `oc` to extract `ccoctl` from the CCO container image.
*   Use `oc` and `ccoctl` to configure IAM for {{ ibm_cloud_name }}.

## Access to a mirror registry {id="access-to-a-mirror-registry_{{ context }}"}

To complete a restricted network installation, you must create a registry that mirrors the contents of the {{ product_registry }} and contains the installation media.

You can create this registry on a mirror host, which can access both the internet and your restricted network, or by using other methods that meet your organization’s security restrictions.

For more information on mirroring images for a disconnected installation, see "Additional resources".

## Access to IBM service endpoints {id="access-to-ibm-service-endpoints_{{ context }}"}

The installation program requires access to the following {{ ibm_cloud_name }} service endpoints:

*   Cloud Object Storage
*   DNS Services
*   Global Search
*   Global Tagging
*   Identity Services
*   Resource Controller
*   Resource Manager
*   VPC


:::note

If you are specifying an {{ ibm_name }} Key Protect for {{ ibm_cloud_name }} root key as part of the installation process, the service endpoint for Key Protect is also required.

:::


By default, the public endpoint is used to access the service. If network restrictions limit access to public service endpoints, you can override the default behavior.

Before deploying the cluster, you can update the installation configuration file (`install-config.yaml`) to specify the URI of an alternate service endpoint. For more information on usage, see "Additional resources".
{% endif %}

## Additional limits {id="installation-restricted-network-limits_{{ context }}"}

Clusters in restricted networks have the following additional limitations and restrictions:

*   The `ClusterVersion` status includes an `Unable to retrieve available updates`
error.
*   By default, you cannot use the contents of the Developer Catalog because
 you cannot access the required image stream tags.

{% if context == "installing-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installing-ibm-cloud-restricted" %}
{%- set ibm_cloud = false -%}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-power-vs" %}
{%- set ipi = false -%}
{%- set ipi_powervs = false -%}
{% endif %}
{% if context == "installing-restricted-networks-gcp-installer-provisioned" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-openstack-installer-restricted" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-installer-provisioned-vsphere" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-aws-installer-provisioned" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-nutanix-installer-provisioned" %}
{%- set ipi = false -%}
{% endif %}
{% if context == "installing-restricted-networks-azure-installer-provisioned" %}
{%- set ipi = false -%}
{% endif %}