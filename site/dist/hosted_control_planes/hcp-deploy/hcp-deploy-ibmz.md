---
title: Deploying {{ hcp }} on {{ ibm_z_title }}
---

# Deploying {{ hcp }} on {{ ibm_z_title }} {#hcp-deploy-ibmz}

You can deploy {{ hcp }} on {{ ibm_z_title }} by configuring a cluster to function as a management cluster. The management cluster is the OpenShift Container Platform cluster where the control planes are hosted. The management cluster is also known as the *hosting* cluster.

> [!NOTE]
> The *management* cluster is not the *managed* cluster. A managed cluster is a cluster that the hub cluster manages. The *management* cluster can run on either the x86_64 architecture, supported beginning with OpenShift Container Platform 4.17 and {{ mce }} 2.7, or the s390x architecture, supported beginning with OpenShift Container Platform 4.20 and {{ mce }} 2.10.

You can convert a managed cluster to a management cluster by using the `hypershift` add-on to deploy the HyperShift Operator on that cluster. Then, you can start to create the hosted cluster.

The {{ mce_short }} supports only the default `local-cluster`, which is a hub cluster that is managed, and the hub cluster as the management cluster.

To provision {{ hcp }} on bare metal, you can use the Agent platform. The Agent platform uses the central infrastructure management service to add worker nodes to a hosted cluster. For more information, see "Enabling the central infrastructure management service".

Each {{ ibm_z_title }} system host must be started with the PXE or ISO images that are provided by the central infrastructure management. After each host starts, it runs an Agent process to discover the details of the host and completes the installation. An Agent custom resource represents each host.

When you create a hosted cluster with the Agent platform, HyperShift Operator installs the Agent Cluster API provider in the hosted control plane namespace.

**Additional resources**

- [Advanced configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
- [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)
- [Installing the {{ hcp }} command-line interface](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-cli#hcp-cli-terminal_hcp-cli)

**Additional resources**

- [Manually importing a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-import#hcp-import)
- [Extracting the release image digest](/openshift-docs-markdown/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)
- [Creating a hosted cluster on bare metal by using the console](/openshift-docs-markdown/hosted_control_planes/hcp-deploy/hcp-deploy-bm#hcp-bm-hc-console_hcp-deploy-bm)

**Additional resources**

- [Installing in an LPAR](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/performing_a_standard_rhel_8_installation/installing-in-an-lpar_installing-rhel)
