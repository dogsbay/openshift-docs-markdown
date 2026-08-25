---
title: "Deploying {{ hcp }} on {{ ibm_z_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on {{ ibm_z_title }} {id="hcp-deploy-ibmz"}
{%- set context = "hcp-deploy-ibmz" %}

You can deploy {{ hcp }} on {{ ibm_z_title }} by configuring a cluster to function as a management cluster. The management cluster is the {{ product_title }} cluster where the control planes are hosted. The management cluster is also known as the _hosting_ cluster.


:::note

The _management_ cluster is not the _managed_ cluster. A managed cluster is a cluster that the hub cluster manages. The _management_ cluster can run on either the x86_64 architecture, supported beginning with {{ product_title }} 4.17 and {{ mce }} 2.7, or the s390x architecture, supported beginning with {{ product_title }} 4.20 and {{ mce }} 2.10.

:::


You can convert a managed cluster to a management cluster by using the `hypershift` add-on to deploy the HyperShift Operator on that cluster. Then, you can start to create the hosted cluster.

The {{ mce_short }} supports only the default `local-cluster`, which is a hub cluster that is managed, and the hub cluster as the management cluster.

To provision {{ hcp }} on bare metal, you can use the Agent platform. The Agent platform uses the central infrastructure management service to add worker nodes to a hosted cluster. For more information, see "Enabling the central infrastructure management service".

Each {{ ibm_z_title }} system host must be started with the PXE or ISO images that are provided by the central infrastructure management. After each host starts, it runs an Agent process to discover the details of the host and completes the installation. An Agent custom resource represents each host.

When you create a hosted cluster with the Agent platform, HyperShift Operator installs the Agent Cluster API provider in the hosted control plane namespace.

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Advanced configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
*   [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)
*   [Installing the {{ hcp }} command-line interface](/hosted_control_planes/hcp-prepare/hcp-cli#hcp-cli-terminal_hcp-cli)

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-infra-reqs.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-custom-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibmz-create-hc.md" %}{% endleveloffset %}

**Additional resources**

*   [Manually importing a hosted cluster](/hosted_control_planes/hcp-import#hcp-import)
*   [Extracting the release image digest](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)
*   [Creating a hosted cluster on bare metal by using the console](/hosted_control_planes/hcp-deploy/hcp-deploy-bm#hcp-bm-hc-console_hcp-deploy-bm)

{% leveloffset +1 %}{% include "./modules/hcp-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-ref.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-infraenv.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-kvm-agents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-lpar-agents.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing in an LPAR](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/performing_a_standard_rhel_8_installation/installing-in-an-lpar_installing-rhel)

{% leveloffset +2 %}{% include "./modules/hcp-ibm-z-zvm-agents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-z-scale-np.md" %}{% endleveloffset %}