---
title: Enabling Windows container workloads
---

# Enabling Windows container workloads {#enabling-windows-container-workloads}

Before adding Windows workloads to your cluster, you must install the Windows Machine Config Operator (WMCO), which is available in the OpenShift Container Platform software catalog. The WMCO orchestrates the process of deploying and managing Windows workloads on a cluster.

> [!NOTE]
> Dual NIC is not supported on WMCO-managed Windows instances.

## Prerequisites {#_prerequisites}

- You have access to an OpenShift Container Platform cluster using an account with `cluster-admin` permissions.
- You have installed the OpenShift CLI (`oc`).
- You have installed your cluster using one of the following infrastructures:

  - Any installer-provisioned infrastructure
  - A user-provisioned infrastructure with the `platform: none` field set in your `install-config.yaml` file
- You have configured hybrid networking with OVN-Kubernetes for your cluster. For more information, see "Configuring hybrid networking".
- You are running an OpenShift Container Platform cluster version 4.6.8 or later.

> [!NOTE]
> Windows instances deployed by the WMCO are configured with the containerd container runtime. Because WMCO installs and manages the runtime, it is recommended that you do not manually install containerd on nodes.

For the comprehensive prerequisites for the Windows Machine Config Operator, see "Windows Machine Config Operator prerequisites".

## Installing the Windows Machine Config Operator {#installing-the-wmco}

You can install the Windows Machine Config Operator using either the web console or OpenShift CLI (`oc`).

> [!NOTE]
> Due to a limitation within the Windows operating system, `clusterNetwork` CIDR addresses of class E, such as `240.0.0.0`, are not compatible with Windows nodes.

## Additional resources {#additional-resources_enabling-windows-container-workloads}

- [Windows Machine Config Operator prerequisites](/openshift-docs-markdown/windows_containers/wmco_rn/windows-containers-release-notes-prereqs#windows-containers-release-notes-prereqs)
- [Configuring hybrid networking](/openshift-docs-markdown/networking/ovn_kubernetes_network_provider/configuring-hybrid-networking#configuring-hybrid-ovnkubernetes)
- [Configuring the cluster-wide proxy](/openshift-docs-markdown/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)
- [About disconnected installation mirroring](/openshift-docs-markdown/disconnected/index#installing-mirroring-disconnected-about)
- [Using Windows containers with a mirror registry](/openshift-docs-markdown/windows_containers/enabling-windows-container-workloads#wmco-disconnected-cluster_enabling-windows-container-workloads)
- [Rebooting a OpenShift Container Platform node gracefully](/openshift-docs-markdown/nodes/nodes/nodes-nodes-rebooting#nodes-nodes-rebooting-gracefully_nodes-nodes-rebooting)
- [Backing up etcd data](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
- [Generating a key pair for cluster node SSH access](/openshift-docs-markdown/installing/installing_azure/ipi/installing-azure-default#ssh-agent-using_installing-azure-default)
- [Adding Operators to a cluster](/openshift-docs-markdown/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)
