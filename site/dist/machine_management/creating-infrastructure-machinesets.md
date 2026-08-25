---
title: Creating infrastructure machine sets
---

# Creating infrastructure machine sets {#creating-infrastructure-machinesets}

To reduce subscription costs, you can use infrastructure machine sets to create machines that host only infrastructure components, such as the default router, the integrated container image registry, cluster metrics, and monitoring. These infrastructure machines are not counted toward the total number of subscriptions that are required to run the environment.

For information about infrastructure nodes and which components can run on infrastructure nodes, see the "Red Hat OpenShift control plane and infrastructure nodes" section in the OpenShift sizing and subscription guide for enterprise Kubernetes document.

To create an infrastructure node, see "Creating a compute machine set", "Creating an infrastructure node", or "Creating an infrastructure node". Use the sample compute machine set for your cloud to deploy an infrastructure machine set. Modify the sample configuration file with the details of your environment.

**Additional resources**

- [OpenShift sizing and subscription guide for enterprise Kubernetes](https://www.redhat.com/en/resources/openshift-subscription-sizing-guide)

**Additional resources**

- [Machine sets that deploy machines as Spot Instances](/machine_management/creating_machinesets/creating-machineset-aws#machineset-non-guaranteed-instance_creating-machineset-aws)

**Additional resources**

- [Machine sets that deploy machines as Spot VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-non-guaranteed-instance_creating-machineset-azure)
- [Using the Azure Marketplace offering](/machine_management/creating_machinesets/creating-machineset-azure#installation-azure-marketplace-subscribe_creating-machineset-azure)

**Additional resources**

- [Machine sets that deploy machines as preemptible VM instances](/machine_management/creating_machinesets/creating-machineset-gcp#machineset-non-guaranteed-instance_legacy-preempt)

**Additional resources**

- [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

**Additional resources**

- [OpenShift Container Platform infrastructure components](/machine_management/creating-infrastructure-machinesets#infrastructure-components_creating-infrastructure-machinesets)
- [Moving resources to infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#moving-resources-to-infrastructure-machinesets_creating-infrastructure-machinesets)

**Additional resources**

- [Node configuration management with machine config pools](/architecture/control-plane#architecture-machine-config-pools_control-plane)

**Additional resources**

- [OpenShift Container Platform infrastructure components](/machine_management/creating-infrastructure-machinesets#infrastructure-components_creating-infrastructure-machinesets)
- [Controlling pod placement using the scheduler](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)
- [Moving resources to infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#moving-resources-to-infrastructure-machinesets_creating-infrastructure-machinesets)
- [Understanding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)

**Additional resources**

- [Moving monitoring components to different nodes](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/configuring-performance-and-scalability#moving-monitoring-components-to-different-nodes_configuring-performance-and-scalability)

## Additional resources {#additional-resources_creating-infrastructure-machinesets}

- [OpenShift sizing and subscription guide for enterprise Kubernetes](https://www.redhat.com/en/resources/openshift-subscription-sizing-guide)
- [Create an infrastructure machine set](/machine_management/creating-infrastructure-machinesets#machineset-creating_creating-infrastructure-machinesets)
- [Label an infrastructure node](/machine_management/creating-infrastructure-machinesets#creating-an-infra-node_creating-infrastructure-machinesets)
- [Use a machine config pool](/machine_management/creating-infrastructure-machinesets#creating-infra-machines_creating-infrastructure-machinesets)
