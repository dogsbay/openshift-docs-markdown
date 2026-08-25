---
title: Activating kernel samepage merging (KSM)
---

# Activating kernel samepage merging (KSM) {#virt-activating-ksm}

{{ VirtProductName }} can activate kernel samepage merging (KSM) when nodes are overloaded. KSM deduplicates identical data found in the memory pages of virtual machines (VMs). If you have very similar VMs, KSM can make it possible to schedule more VMs on a single node.

> [!IMPORTANT]
> You must only use KSM with trusted workloads.

## Prerequisites {#prerequisites_virt-activating-ksm}

- Ensure that an administrator has configured KSM support on any nodes where you want {{ VirtProductName }} to activate KSM.

## Additional resources {#additional-resources_virt-activating-ksm}

- [Specifying nodes for virtual machines](/openshift-docs-markdown/virt/managing_vms/advanced_vm_management/virt-specifying-nodes-for-vms#virt-specifying-nodes-for-vms)
- [Placing pods on specific nodes using node selectors](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
- [Managing kernel samepage merging](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/configuring_and_managing_virtualization/index#proc_managing-ksm_optimizing-virtual-machine-cpu-performance)
