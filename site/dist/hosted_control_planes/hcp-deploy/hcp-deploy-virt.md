---
title: Deploying {{ hcp }} on {{ VirtProductName }}
---

# Deploying {{ hcp }} on {{ VirtProductName }} {#hcp-deploy-virt}

With {{ hcp }} and {{ VirtProductName }}, you can create OpenShift Container Platform clusters with worker nodes that are hosted by KubeVirt virtual machines.

{{ hcp_capital }} on {{ VirtProductName }} provides several benefits:

- Enhances resource usage by packing {{ hcp }} and hosted clusters in the same underlying bare-metal infrastructure
- Separates {{ hcp }} and hosted clusters to provide strong isolation
- Reduces cluster provision time by eliminating the bare-metal node bootstrapping process
- Manages many releases under the same base OpenShift Container Platform cluster

The {{ hcp }} feature is enabled by default.

You can use the hosted control plane command-line interface, `hcp`, to create an OpenShift Container Platform hosted cluster. The hosted cluster is automatically imported as a managed cluster. If you want to disable this automatic import feature, see "Disabling the automatic import of hosted clusters into multicluster engine Operator".

**Additional resources**

- [Disabling the automatic import of hosted clusters into {{ mce_short }}](/openshift-docs-markdown/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)

**Additional resources**

- [Installing OpenShift Virtualization using the web console](/openshift-docs-markdown/virt/install/installing-virt#installing-virt-web)
- [Postinstallation storage configuration](/openshift-docs-markdown/post_installation_configuration/post-install-storage-configuration#post-install-storage-configuration)
- [Install OpenShift on any x86_64 platform with user-provisioned infrastructure](https://console.redhat.com/openshift/install/platform-agnostic/user-provisioned)
- [Configuring MetalLB](/openshift-docs-markdown/hosted_control_planes/hcp-deploy/hcp-deploy-virt#hcp-metallb_hcp-deploy-virt)
- [Advanced configuration ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
- [Recommended etcd practices](/openshift-docs-markdown/etcd/etcd-practices#recommended-etcd-practices)
- [Persistent storage using Logical Volume Manager Storage](/openshift-docs-markdown/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms)

**Additional resources**

- [Installing the MetalLB Operator](/openshift-docs-markdown/networking/networking_operators/metallb-operator/metallb-operator-install#metallb-operator-install_metallb-operator-install)

**Additional resources**

- [Labeling management cluster nodes](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
- [Configuring a custom API server certificate in a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

**Additional resources**

- [Labeling management cluster nodes](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
- [Configuring a custom API server certificate in a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

**Additional resources**

- [Labeling management cluster nodes](/openshift-docs-markdown/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
- [Configuring a custom API server certificate in a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)
- [Creating a credential for an on-premises environment ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#creating-a-credential-for-an-on-premises-environment)
- [Accessing the hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-manage/hcp-manage-virt#hcp-virt-access_hcp-manage-virt)

**Additional resources**

- [Scaling up and down workloads in a hosted cluster](/openshift-docs-markdown/hosted_control_planes/hcp-machine-config#scale-up-down-autoscaler-hcp_hcp-machine-config)

**Additional resources**

- [Scaling down the data plane to zero](https://access.redhat.com/documentation/en-us/openshift_container_platform/4.15/html/hosted_control_planes/troubleshooting-hosted-control-planes#scale-down-data-plane_hcp-troubleshooting)
