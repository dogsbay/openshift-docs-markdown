---
title: Adding worker nodes to {{ sno }} clusters
---

# Adding worker nodes to {{ sno }} clusters {#nodes-sno-worker-nodes}

You can add worker nodes to {{ sno }} clusters in case you need additional capacity in your cluster.

Single-node clusters reduce the host prerequisites for deployment to a single host. This is useful for deployments in constrained environments or at the network edge. However, sometimes you need to add additional capacity to your cluster, for example, in telecommunications and network edge scenarios. In these scenarios, you can add worker nodes to the single-node cluster.

> [!NOTE]
> Unlike multi-node clusters, by default all ingress traffic is routed to the single control-plane node, even after adding additional worker nodes.

There are several ways that you can add worker nodes to a single-node cluster. You can add worker nodes to a cluster manually, using [{{ cluster_manager_first }}](https://console.redhat.com/openshift/assisted-installer/clusters), or by using the Assisted Installer REST API directly.

> [!IMPORTANT]
> Adding worker nodes does not expand the cluster control plane, and it does not provide high availability to your cluster. For {{ sno }} clusters, high availability is handled by failing over to another site. When adding worker nodes to {{ sno }} clusters, a tested maximum of two worker nodes is recommended. Exceeding the recommended number of worker nodes might result in lower overall performance, including cluster failure.

> [!NOTE]
> To add worker nodes, you must have access to the {{ cluster_manager }}. This method is not supported when using the Agent-based installer to install a cluster in a disconnected environment.

<a name="additional-resources_add-workers"></a>**Additional resources**

- [Minimum resource requirements for cluster installation](/installing/installing_bare_metal/upi/installing-restricted-networks-bare-metal#installation-minimum-resource-requirements_installing-restricted-networks-bare-metal)
- [Recommended practices for scaling the cluster](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-scale-practices_cluster-scaling)
- [Creating a bootable ISO image on a USB drive](/installing/installing_sno/install-sno-installing-sno#installing-with-usb-media_install-sno-installing-sno-with-the-assisted-installer)
- [Booting from an ISO image served over HTTP using the Redfish API](/installing/installing_sno/install-sno-installing-sno#install-booting-from-an-iso-over-http-redfish_install-sno-installing-sno-with-the-assisted-installer)
- [Deleting nodes from a cluster](/nodes/nodes/nodes-nodes-working#nodes-nodes-working-deleting_nodes-nodes-working)
- [User-provisioned DNS requirements](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#installation-dns-user-infra_installing-bare-metal-network-customizations)
- [Approving the certificate signing requests for your machines](/nodes/nodes/nodes-sno-worker-nodes#installation-approve-csrs_add-workers)
