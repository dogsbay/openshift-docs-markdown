---
title: Handling machine configuration for {{ hcp }}
---

# Handling machine configuration for {{ hcp }} {#hcp-machine-config}

In a standalone OpenShift Container Platform cluster, a machine config pool manages a set of nodes. You can handle a machine configuration by using the `MachineConfigPool` custom resource (CR).

> [!TIP]
> You can reference any `machineconfiguration.openshift.io` resources in the `nodepool.spec.config` field of the `NodePool` CR.

In {{ hcp }}, the `MachineConfigPool` CR does not exist. A node pool contains a set of compute nodes. You can handle a machine configuration by using node pools.

You can manage your workloads in your hosted cluster by using the cluster autoscaler.

> [!NOTE]
> In OpenShift Container Platform 4.18 or later, the default container runtime for worker nodes is changed from runC to crun.

**Additional resources**

- [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)
- [Creating a host inventory by using the command line interface](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html-single/clusters/index#create-host-inventory-cli)

**Additional resources**

- [Scaling the NodePool object for a hosted cluster (bare-metal platforms)](/hosted_control_planes/hcp-manage/hcp-manage-bm#hcp-bm-scale-np_hcp-manage-bm)
- [Scaling the NodePool object for a hosted cluster (non-bare metal agent machines)](/hosted_control_planes/hcp-manage/hcp-manage-non-bm#hcp-bm-scale-np_hcp-manage-non-bm)
- [Scaling a node pool ({{ VirtProductName }})](/hosted_control_planes/hcp-deploy/hcp-deploy-virt#hcp-virt-scale-nodpool_hcp-deploy-virt)
