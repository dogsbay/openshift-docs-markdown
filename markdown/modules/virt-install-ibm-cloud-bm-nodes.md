{%- set _mod_docs_content_type = "CONCEPT" %}
# Installation of {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes {id="virt-install-ibm-cloud-bm-nodes_{{ context }}"}

Use the Assisted Installer to deploy a six-node {{ VirtProductName }} cluster on {{ ibm_cloud_title }} bare-metal nodes when you need dedicated hardware for your virtual machines. A bastion virtual server provides bootstrapping, DHCP, networking, and load balancing. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You have an account in {{ ibm_cloud_title }} with permissions to order and operate bare-metal nodes.
*   You have an {{ ibm_cloud_title }} SSL VPN user for accessing the Supermicro Intelligent Platform Management Interface (IPMI) of a node.
*   You have installed the {{ oc_first }}.