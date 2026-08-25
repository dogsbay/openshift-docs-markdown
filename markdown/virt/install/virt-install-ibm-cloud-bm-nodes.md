---
title: "Installing {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}

# Installing {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes {id="virt-install-ibm-cloud-bm-nodes"}

{%- set context = "virt-install-ibm-cloud-bm-nodes" %}

Install {{ VirtProductName }} on {{ ibm_cloud_title }} bare-metal nodes using Assisted Installer. The cluster has 6 bare-metal nodes (3 control and 3 compute). An additional virtual machine is required for bootstrapping and to act as a Samba server, DHCP server, network gateway, and load balancer. {._abstract}

## Prerequisites {id="_prerequisites"}

*   An account in {{ ibm_cloud_title }} with permissions to order and operate bare-metal nodes.
*   An {{ ibm_cloud_title }} SSL VPN user, to access the SuperMicro IPMI interface of a node.
*   Install the OpenShift CLI (`oc`).

{% leveloffset +1 %}{% include "./modules/virt-install-ibm-cloud-config-new-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-install-ibm-cloud-initialize-new-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-install-ibm-cloud-cluster-network-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-install-ibm-cloud-complete-cluster-config.md" %}{% endleveloffset %}