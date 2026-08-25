---
title: Postinstallation node tasks
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "post-install-node-tasks" %}
# Postinstallation node tasks {id="post-install-node-tasks"}
{% include "./_attributes/common-attributes.md" %}

You can perform postinstallation node tasks to add and manage compute machines, configure node resources and hardware, improve availability, and control workload scheduling.

After installing {{ product_title }}, you can further expand and customize your
cluster to your requirements through certain node tasks.

## Adding {{ op_system }} compute machines to an {{ product_title }} cluster {id="post-install-config-adding-fcos-compute"}

You can add more {{ op_system_first }} compute machines to your {{ product_title }} cluster on bare metal.

Before you add more compute machines to a cluster that you installed on bare metal infrastructure, you must create {{ op_system }} machines for it to use. You can either use an ISO image or network PXE booting to create the machines.

***Prerequisites***

*   You installed a cluster on bare metal.
*   You have installation media and {{ op_system_first }} images that you used to create your cluster. If you do not have these files, you must obtain them by following the instructions in the installation procedure.

{% leveloffset +2 %}{% include "./modules/machine-user-infra-machines-iso.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)

{% leveloffset +2 %}{% include "./modules/machine-user-infra-machines-pxe.md" %}{% endleveloffset %}

**Additional resources**

*   [How does one set up a serial terminal and/or console in Red Hat Enterprise Linux? (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/articles/7212)
*   [`IMAGE_GZIP` option in iPXE (iPXE documentation)](https://ipxe.org/buildcfg/image_gzip)

{% leveloffset +2 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-node-custom-partition.md" %}{% endleveloffset %}

**Additional resources**

*   [Disk partitioning for {{ product_title }}](/installing/installing_bare_metal/upi/installing-bare-metal#installation-user-infra-machines-advanced_disk_installing-bare-metal)

{% include "./snippets/machine-user-provisioned-limitations.md" %}

{% leveloffset +1 %}{% include "./modules/post-install-deploying-machine-health-checks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-health-checks-about.md" %}{% endleveloffset %}

**Additional resources**

*   [About control plane machine sets](/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)

{% leveloffset +2 %}{% include "./modules/machine-health-checks-resource.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-health-checks-short-circuiting.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-health-checks-creating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-manually-scaling.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/differences-between-machinesets-and-machineconfigpool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/recommended-node-host-practices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/create-a-kubeletconfig-crd-to-edit-kubelet-parameters.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/modify-unavailable-workers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/master-node-sizing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/setting-up-cpu-manager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-huge-pages.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/what-huge-pages-do.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/how-huge-pages-are-consumed-by-apps.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-huge-pages.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-plugins-about.md" %}{% endleveloffset %}

**Additional resources**

*   [Nvidia GPU device plugin for COS-based operating system](https://github.com/GoogleCloudPlatform/Container-engine-accelerators/tree/master/cmd/nvidia_gpu)
*   [Nvidia official GPU device plugin](https://github.com/NVIDIA/k8s-device-plugin)
*   [Solarflare device plugin](https://github.com/vikaschoudhary16/sfc-device-plugin)
*   [KubeVirt device plugins: vfio and kvm](https://github.com/kubevirt/kubernetes-device-plugins)
*   [Kubernetes device plugin for {{ ibm_name }} Crypto Express (CEX) cards](https://github.com/ibm-s390-cloud/k8s-cex-dev-plugin)

{% leveloffset +2 %}{% include "./modules/nodes-pods-plugins-device-mgr.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-plugins-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-taints-tolerations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-adding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-adding-machineset.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-binding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-special.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-taints-tolerations-removing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-topology-manager.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/topology-manager-policies.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/setting-up-topology-manager.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pod-interactions-with-topology-manager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-overcommit-resource-requests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-resource-override.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-override-deploy-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-override-deploy-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-node-overcommit.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-resources-containers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-qos-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-qos-about-swap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-configure-nodes.md" %}{% endleveloffset %}

**Additional resources**

*   [Disabling or enforcing CPU limits using CPU CFS quotas](/post_installation_configuration/node-tasks#nodes-cluster-overcommit-node-enforcing_post-install-node-tasks)
*   [Reserving resources for system processes](/post_installation_configuration/node-tasks#nodes-cluster-overcommit-node-resources_post-install-node-tasks)
*   [Understanding how to reserve memory across quality of service tiers](/post_installation_configuration/node-tasks#qos-about-reserve_post-install-node-tasks)

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-node-enforcing.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-node-resources.md" %}{% endleveloffset %}

**Additional resources**

*   [Allocating resources for nodes](/nodes/nodes/nodes-nodes-resources-configuring#nodes-nodes-resources-configuring-setting_nodes-nodes-resources-configuring)

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-node-disable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-cluster-project-overcommit.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-overcommit-project-disable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-garbage-collection.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-nodes-garbage-collection-containers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-nodes-garbage-collection-images.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-nodes-garbage-collection-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-using-node-tuning-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-tuning-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/accessing-an-example-cluster-node-tuning-operator-specification.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/custom-tuning-specification.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-node-tuning-operator-default-profiles-set.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/node-tuning-operator-supported-tuned-daemon-plug-ins.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-managing-max-pods-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-machine-scaling-static-ip.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-vsphere-scaling-machines-static-ip.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-vsphere-machine-set-concept-static-ip.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-vsphere-machine-set-scaling-static-ip.md" %}{% endleveloffset %}

**Additional resources**

*   [Static IP addresses for vSphere nodes](/installing/installing_vsphere/ipi/ipi-vsphere-installation-reqs#installation-vsphere-installer-infra-requirements_ipi-vsphere-installation-reqs)