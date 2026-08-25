{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the user-provisioned infrastructure {id="installation-infrastructure-user-infra_{{ context }}"}

Before you install {{ product_title }} on user-provisioned infrastructure, you must prepare the underlying infrastructure. {._abstract}

This section provides details about the high-level steps required to set up your cluster infrastructure in preparation for an {{ product_title }} installation. This includes configuring IP networking and network connectivity for your cluster nodes,
{%- if ibm_z %}
preparing a web server for the Ignition files,
{%- endif %}
enabling the required ports through your firewall, and setting up the required DNS and load balancing infrastructure.

After preparation, your cluster infrastructure must meet the requirements outlined in the _Requirements for a cluster with user-provisioned infrastructure_ section.

**Prerequisites**

*   You have reviewed the [{{ product_title }} 4.x Tested Integrations](https://access.redhat.com/articles/4128421) page.
*   You have reviewed the infrastructure requirements detailed in the _Requirements for a cluster with user-provisioned infrastructure_ section.

**Procedure**

{% if ibm_z %}
1.  Set up static IP addresses.
1.  Set up an HTTP or HTTPS server to provide Ignition files to the cluster nodes.

{% endif %}
{% if not ibm_z %}

1.  If you are using DHCP to provide the IP networking configuration to your cluster nodes, configure your DHCP service.
    1.  Add persistent IP addresses for the nodes to your DHCP server configuration. In your configuration, match the MAC address of the relevant network interface to the intended IP address for each node.
    1.  When you use DHCP to configure IP addressing for the cluster machines, the machines also obtain the DNS server information through DHCP. Define the persistent DNS server address that is used by the cluster nodes through your DHCP server configuration.

        :::note

        If you are not using a DHCP service, you must provide the IP networking configuration and the address of the DNS server to the nodes at {{ op_system }} install time. These can be passed as boot arguments if you are installing from an ISO image. See the _Installing {{ op_system }} and starting the {{ product_title }} bootstrap process_ section for more information about static IP provisioning and advanced networking options.
        
        :::

    1.  Define the hostnames of your cluster nodes in your DHCP server configuration. See the _Setting the cluster node hostnames through DHCP_ section for details about hostname considerations.

        :::note

        If you are not using a DHCP service, the cluster nodes obtain their hostname through a reverse DNS lookup.
        
        :::

{% endif %}
{% if ibm_z_kvm %}
1.  Choose to perform either a fast track installation of {{ op_system_first }} or a full installation of {{ op_system_first }}. For the full installation, you must set up an HTTP or HTTPS server to provide Ignition files and install images to the cluster nodes. For the fast track installation an HTTP or HTTPS server is not required, however, a DHCP server is required. See sections “Fast-track installation: Creating {{ op_system_first }} machines" and “Full installation: Creating {{ op_system_first }} machines".
{% endif %}

1.  Ensure that your network infrastructure provides the required network connectivity between the cluster components. See the _Networking requirements for user-provisioned infrastructure_ section for details about the requirements.
1.  Configure your firewall to enable the ports required for the {{ product_title }} cluster components to communicate. See _Networking requirements for user-provisioned infrastructure_ section for details about the ports that are required.

    :::important

    By default, port `1936` is accessible for an {{ product_title }} cluster, because each control plane node needs access to this port. 

    For ingress health check probes, the `/healthz/ready` endpoint is available on this port.

    Avoid using the Ingress load balancer to expose this port, because doing so might result in the exposure of sensitive information, such as statistics and metrics, related to Ingress Controllers.
    
    :::

1.  Setup the required DNS infrastructure for your cluster.
    1.  Configure DNS name resolution for the Kubernetes API, the application wildcard, the bootstrap machine, the control plane machines, and the compute machines.
    1.  Configure reverse DNS resolution for the Kubernetes API, the bootstrap machine, the control plane machines, and the compute machines.

        See the _User-provisioned DNS requirements_ section for more information about the {{ product_title }} DNS requirements.
1.  Validate your DNS configuration.
    1.  From your installation node, run DNS lookups against the record names of the Kubernetes API, the wildcard routes, and the cluster nodes. Validate that the IP addresses in the responses correspond to the correct components.
    1.  From your installation node, run reverse DNS lookups against the IP addresses of the load balancer and the cluster nodes. Validate that the record names in the responses correspond to the correct components.

        See the _Validating DNS resolution for user-provisioned infrastructure_ section for detailed DNS validation steps.
1.  Provision the required API and application ingress load balancing infrastructure. See the _Load balancing requirements for user-provisioned infrastructure_ section for more information about the requirements.

    :::note

    Some load balancing solutions require the DNS name resolution for the cluster nodes to be in place before the load balancing is initialized.
    
    :::


{% if context == "installing-ibm-z" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-kvm" %}
{%- set ibm_z_kvm = "" -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = "" -%}
{% endif %}
{% if context == "installing-restricted-networks-ibm-z-lpar" %}
{%- set ibm_z = "" -%}
{% endif %}