{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation of {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes {id="virt-install-ibm-cloud-bm-nodes_{{ context }}"}

Install {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes by using the Assisted Installer. The cluster has six bare-metal nodes: three control plane nodes and three compute nodes. An additional virtual machine is required for bootstrapping and to act as a Samba server, DHCP server, network gateway, and load balancer. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You have an account in {{ ibm_cloud_title }} with permissions to order and operate bare-metal nodes.
*   You have an {{ ibm_cloud_title }} SSL VPN user for accessing the Supermicro Intelligent Platform Management Interface (IPMI) of a node.
*   You have installed the {{ oc_first }}.