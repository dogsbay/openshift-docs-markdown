---
title: Deploying {{ hcp }} on {{ ibm_power_title }}
---

# Deploying {{ hcp }} on {{ ibm_power_title }} {#hcp-deploy-ibm-power}

You can deploy {{ hcp }} on {{ ibm_power_title }} by configuring a cluster to function as a hosting cluster. This configuration provides an efficient and scalable solution for managing many clusters. The hosting cluster is an OpenShift Container Platform cluster that hosts control planes. The hosting cluster is also known as the *management* cluster.

> [!NOTE]
> The *management* cluster is not the *managed* cluster. A managed cluster is a cluster that the hub cluster manages.

The {{ mce_short }} supports only the default `local-cluster`, which is a managed hub cluster, and the hub cluster as the hosting cluster.

To provision {{ hcp }} on bare-metal infrastructure, you can use the Agent platform. The Agent platform uses the central infrastructure management service to add compute nodes to a hosted cluster. For more information, see "Enabling the central infrastructure management service".

You must start each {{ ibm_power_title }} host with a Discovery image that the central infrastructure management provides. After each host starts, it runs an Agent process to discover the details of the host and completes the installation. An Agent custom resource represents each host.

When you create a hosted cluster with the Agent platform, HyperShift installs the Agent Cluster API provider in the hosted control plane namespace.

**Additional resources**

- [Advanced configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
- [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)
- [Installing the hosted control plane command-line interface](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-cli#hcp-cli-terminal_hcp-cli)
- [Manually enabling the {{ hcp }} feature](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-enable-manual_hcp-enable-disable)
- [Disabling the {{ hcp }} feature](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-disable-feature_hcp-enable-disable)

**Additional resources**

- [Requirements for hosted control planes](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-requirements#hcp-requirements)
- [DNS configurations on bare metal](/openshift-docs-markdown/hosted_control_planes/hcp-deploy/hcp-deploy-bm#hcp-bm-dns_hcp-deploy-bm)
- [Manually importing a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-import#hcp-import)
- [Extracting the release image digest](/openshift-docs-markdown/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)

**Additional resources**

- [Multi-arch release images](https://multi.ocp.releases.ci.openshift.org/)
