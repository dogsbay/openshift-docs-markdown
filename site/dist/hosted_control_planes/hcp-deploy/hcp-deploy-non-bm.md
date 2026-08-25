---
title: Deploying {{ hcp }} on non-bare-metal agent machines
---

# Deploying {{ hcp }} on non-bare-metal agent machines {#hcp-deploy-non-bm}

To maintain infrastructure flexibility while using existing virtualization layers, you can deploy {{ hcp }} on non-bare-metal Agent machines. You can use the management benefits of the Agent platform when running on virtualized environments or other cloud-based virtual machines.

You can deploy {{ hcp }} by configuring a cluster to function as a hosting cluster. The hosting cluster is an OpenShift Container Platform cluster where the control planes are hosted. The hosting cluster is also known as the management cluster.

> [!NOTE]
> The management cluster is not the same thing as the *managed* cluster. A managed cluster is a cluster that the hub cluster manages.

The {{ hcp }} feature is enabled by default.

The {{ mce_short }} supports only the default `local-cluster` managed hub cluster. On {{ rh_rhacm_first }} 2.10, you can use the `local-cluster` managed hub cluster as the hosting cluster.

A *hosted cluster* is an OpenShift Container Platform cluster with its API endpoint and control plane that are hosted on the hosting cluster. The hosted cluster includes the control plane and its corresponding data plane. You can use the {{ mce_short }} console or the `hcp` command-line interface (CLI) to create a hosted cluster.

The hosted cluster is automatically imported as a managed cluster. If you want to disable this automatic import feature, see "Disabling the automatic import of hosted clusters into {{ mce_short }}".

**Additional resources**

- [Disabling the automatic import of hosted clusters into {{ mce_short }}](/openshift-docs-markdown/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)

**Additional resources**

- [Enabling the central infrastructure management service ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#enable-cim)
- [Recommended etcd practices](/openshift-docs-markdown/etcd/etcd-practices#recommended-etcd-practices)
- [Persistent storage using logical volume manager storage](/openshift-docs-markdown/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms_logical-volume-manager-storage)

**Additional resources**

- [Advanced configuration ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
- [Enabling the central infrastructure management service ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)

**Additional resources**

- [Recommended etcd practices](/openshift-docs-markdown/etcd/etcd-practices#recommended-etcd-practices)
- [Persistent storage using logical volume manager storage](/openshift-docs-markdown/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms_logical-volume-manager-storage)
- [Disabling the automatic import of hosted clusters into {{ mce_short }}](/openshift-docs-markdown/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)
- [Manually enabling the {{ hcp }} feature](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-enable-manual_hcp-enable-disable)
- [Disabling the {{ hcp }} feature](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-disable-feature_hcp-enable-disable)

**Additional resources**

- [Manually importing a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-import#hcp-import-manual_hcp-import)
- [Configuring a custom API server certificate in a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)
- [Extracting the release image digest](/openshift-docs-markdown/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)

**Additional resources**

- [Creating a credential for an on-premises environment ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#creating-a-credential-for-an-on-premises-environment)
- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console-overview)
- [Configuring a custom API server certificate in a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

**Additional resources**

- [Accessing the hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-manage/hcp-manage-bm#hcp-bm-access_hcp-manage-bm)
- [Configuring a custom API server certificate in a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)
