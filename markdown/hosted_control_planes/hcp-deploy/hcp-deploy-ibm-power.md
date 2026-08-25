---
title: "Deploying {{ hcp }} on {{ ibm_power_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on {{ ibm_power_title }} {id="hcp-deploy-ibm-power"}
{%- set context = "hcp-deploy-ibm-power" %}

You can deploy {{ hcp }} on {{ ibm_power_title }} by configuring a cluster to function as a hosting cluster. This configuration provides an efficient and scalable solution for managing many clusters. The hosting cluster is an {{ product_title }} cluster that hosts control planes. The hosting cluster is also known as the _management_ cluster.


:::note

The _management_ cluster is not the _managed_ cluster. A managed cluster is a cluster that the hub cluster manages.

:::


The {{ mce_short }} supports only the default `local-cluster`, which is a managed hub cluster, and the hub cluster as the hosting cluster.

To provision {{ hcp }} on bare-metal infrastructure, you can use the Agent platform. The Agent platform uses the central infrastructure management service to add compute nodes to a hosted cluster. For more information, see "Enabling the central infrastructure management service".

You must start each {{ ibm_power_title }} host with a Discovery image that the central infrastructure management provides. After each host starts, it runs an Agent process to discover the details of the host and completes the installation. An Agent custom resource represents each host.

When you create a hosted cluster with the Agent platform, HyperShift installs the Agent Cluster API provider in the hosted control plane namespace.

{% leveloffset +1 %}{% include "./modules/hcp-ibm-power-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Advanced configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
*   [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)
*   [Installing the hosted control plane command-line interface](/hosted_control_planes/hcp-prepare/hcp-cli#hcp-cli-terminal_hcp-cli)
*   [Manually enabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-enable-manual_hcp-enable-disable)
*   [Disabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-disable-feature_hcp-enable-disable)

{% leveloffset +1 %}{% include "./modules/hcp-ibm-power-infra-reqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-power-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-custom-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-hc.md" %}{% endleveloffset %}

**Additional resources**

*   [Requirements for hosted control planes](/hosted_control_planes/hcp-prepare/hcp-requirements#hcp-requirements)
*   [DNS configurations on bare metal](/hosted_control_planes/hcp-deploy/hcp-deploy-bm#hcp-bm-dns_hcp-deploy-bm)
*   [Manually importing a hosted cluster](/hosted_control_planes/hcp-import#hcp-import)
*   [Extracting the release image digest](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)

{% leveloffset +1 %}{% include "./modules/hcp-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-ref.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ibm-power-create-heterogeneous-nodepools-agent-hc-con.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ibm-power-create-heterogeneous-nodepools-agent-hc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ibm-power-heterogeneous-nodepools-create-agent-cluster.md" %}{% endleveloffset %}

**Additional resources**

*   [Multi-arch release images](https://multi.ocp.releases.ci.openshift.org/)

{% leveloffset +2 %}{% include "./modules/hcp-create-heterogeneous-nodepools.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ibm-power-heterogeneous-nodepools-agent-hc-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-create-infraenv.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-adding-agents.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-scale-the-nodepool.md" %}{% endleveloffset %}