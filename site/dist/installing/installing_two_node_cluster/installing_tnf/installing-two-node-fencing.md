---
title: Preparing to install a two-node OpenShift cluster with fencing
---

# Preparing to install a two-node OpenShift cluster with fencing {#installing-two-node-fencing}

A two-node OpenShift Container Platform cluster with fencing provides high availability (HA) with a reduced hardware footprint. This configuration is designed for distributed or edge environments where deploying a full three-node control plane cluster is not practical.

A two-node cluster does not include compute nodes. The two control plane machines run user workloads in addition to managing the cluster.

Fencing is managed by Pacemaker, which can isolate an unresponsive node by using the Baseboard Management Console (BMC) of the node. After the unresponsive node is fenced, the remaining node can safely continue operating the cluster without the risk of resource corruption.

> [!NOTE]
> You can deploy a two-node OpenShift Container Platform cluster with fencing by using either the user-provisioned infrastructure method or the installer-provisioned infrastructure method.

The two-node OpenShift cluster with fencing requires the following hosts:

**Minimum required hosts**

| Hosts | Description |
| --- | --- |
| Two control plane machines | The control plane machines run the Kubernetes and OpenShift Container Platform services that form the control plane. |
| One temporary bootstrap machine | You need a bootstrap machine to deploy the OpenShift Container Platform cluster on the control plane machines. You can remove the bootstrap machine after you install the cluster. |

The bootstrap and control plane machines must use Red Hat Enterprise Linux CoreOS (RHCOS) as the operating system. For instructions on installing RHCOS and starting the bootstrap process, see "Installing RHCOS and starting the OpenShift Container Platform bootstrap process".

> [!NOTE]
> The requirement to use RHCOS applies only to user-provisioned infrastructure deployments. For installer-provisioned infrastructure deployments, the bootstrap and control plane machines are provisioned automatically by the installation program, and you do not need to manually install RHCOS.

## Additional resources {#additional-resources_installing-two-node-fencing}

- [Installing RHCOS and starting the OpenShift Container Platform bootstrap process](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#creating-machines-bare-metal_installing-bare-metal-network-customizations)
- [Creating a manifest file for a customized br-ex bridge](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#creating-manifest-file-customized-br-ex-bridge_ipi-install-installation-workflow)
- [Configuring and managing high availability clusters in RHEL](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_high_availability_clusters/index)
