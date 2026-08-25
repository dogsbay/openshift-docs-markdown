---
title: Postinstallation node tasks
---

# Postinstallation node tasks {#post-install-node-tasks}

You can perform postinstallation node tasks to add and manage compute machines, configure node resources and hardware, improve availability, and control workload scheduling.

After installing OpenShift Container Platform, you can further expand and customize your cluster to your requirements through certain node tasks.

## Adding {{ op_system }} compute machines to an OpenShift Container Platform cluster {#post-install-config-adding-fcos-compute}

You can add more {{ op_system_first }} compute machines to your OpenShift Container Platform cluster on bare metal.

Before you add more compute machines to a cluster that you installed on bare metal infrastructure, you must create {{ op_system }} machines for it to use. You can either use an ISO image or network PXE booting to create the machines.

***Prerequisites***

- You installed a cluster on bare metal.
- You have installation media and {{ op_system_first }} images that you used to create your cluster. If you do not have these files, you must obtain them by following the instructions in the installation procedure.

**Additional resources**

- [Installing a cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)

**Additional resources**

- [How does one set up a serial terminal and/or console in Red Hat Enterprise Linux? (Red Hat Knowledgebase article)](https://access.redhat.com/articles/7212)
- [`IMAGE_GZIP` option in iPXE (iPXE documentation)](https://ipxe.org/buildcfg/image_gzip)

**Additional resources**

- [Disk partitioning for OpenShift Container Platform](/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-infra-machines-advanced_disk_installing-bare-metal)

**Additional resources**

- [About control plane machine sets](/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)

**Additional resources**

- [Nvidia GPU device plugin for COS-based operating system](https://github.com/GoogleCloudPlatform/Container-engine-accelerators/tree/master/cmd/nvidia_gpu)
- [Nvidia official GPU device plugin](https://github.com/NVIDIA/k8s-device-plugin)
- [Solarflare device plugin](https://github.com/vikaschoudhary16/sfc-device-plugin)
- [KubeVirt device plugins: vfio and kvm](https://github.com/kubevirt/kubernetes-device-plugins)
- [Kubernetes device plugin for {{ ibm_name }} Crypto Express (CEX) cards](https://github.com/ibm-s390-cloud/k8s-cex-dev-plugin)

**Additional resources**

- [Disabling or enforcing CPU limits using CPU CFS quotas](/post_installation_configuration/node-tasks#nodes-cluster-overcommit-node-enforcing_post-install-node-tasks)
- [Reserving resources for system processes](/post_installation_configuration/node-tasks#nodes-cluster-overcommit-node-resources_post-install-node-tasks)
- [Understanding how to reserve memory across quality of service tiers](/post_installation_configuration/node-tasks#qos-about-reserve_post-install-node-tasks)

**Additional resources**

- [Allocating resources for nodes](/nodes/nodes/nodes-nodes-resources-configuring#nodes-nodes-resources-configuring-setting_nodes-nodes-resources-configuring)

**Additional resources**

- [Static IP addresses for vSphere nodes](/installing/installing_vsphere/ipi/ipi-vsphere-installation-reqs#installation-vsphere-installer-infra-requirements_ipi-vsphere-installation-reqs)
