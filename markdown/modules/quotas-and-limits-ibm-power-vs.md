{%- set _mod_docs_content_type = "CONCEPT" %}
# Quotas and limits on {{ ibm_power_server_title }} {id="quotas-and-limits-ibm-power-vs_{{ context }}"}

The {{ product_title }} cluster uses several {{ ibm_cloud_name }} and {{ ibm_power_server_name }} components. Default quotas and limits affect your ability to install clusters, so you might need to request additional resources for your {{ ibm_cloud_name }} account depending on your configuration, region, or number of clusters. {._abstract}

## Virtual private cloud {id="_virtual_private_cloud"}

Each {{ product_title }} cluster creates its own Virtual Private Cloud (VPC). The default quota of VPC instances per region is 10. If you have 10 VPC instances created, you must increase your quota before attempting an installation.

## Application load balancer {id="_application_load_balancer"}

By default, each cluster creates two application load balancers (ALBs):

*   Internal load balancer for the control plane API server
*   External load balancer for the control plane API server

You can create additional `LoadBalancer` service objects to create additional ALBs. The default quota of VPC ALBs are 50 per region. To have more than 50 ALBs, you must increase this quota.

VPC ALBs are supported. Classic ALBs are not supported for {{ ibm_power_server_name }}.

## Transit gateways {id="_transit_gateways"}

Each {{ product_title }} cluster creates its own transit gateway to enable communication with a VPC. The default quota of transit gateways per {{ ibm_cloud_name }} account is 10. If you have 10 transit gateways created, you must increase your quota before attempting an installation.

## Dynamic host configuration protocol (DHCP) service {id="_dynamic_host_configuration_protocol_dhcp_service"}

There is a limit of one Dynamic Host Configuration Protocol (DHCP) service per {{ ibm_power_server_name }} instance.

## Virtual server instances {id="_virtual_server_instances"}

By default, a cluster creates server instances with the following resources:

*   0.5 CPUs
*   32 GB RAM
*   System Type: `s922`
*   Processor Type: `uncapped`, `shared`
*   Storage Tier: `Tier-3`

The installation program creates the following nodes:

*   One bootstrap machine, which the installation process removes after the installation is complete
*   Three control plane nodes
*   Three compute nodes