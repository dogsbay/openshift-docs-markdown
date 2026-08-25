---
title: Creating infrastructure machine sets
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Creating infrastructure machine sets {id="creating-infrastructure-machinesets"}
{%- set context = "creating-infrastructure-machinesets" %}

To reduce subscription costs, you can use infrastructure machine sets to create machines that host only infrastructure components, such as the default router, the integrated container image registry, cluster metrics, and monitoring. These infrastructure machines are not counted toward the total number of subscriptions that are required to run the environment. {._abstract}

For information about infrastructure nodes and which components can run on infrastructure nodes, see the "Red Hat OpenShift control plane and infrastructure nodes" section in the OpenShift sizing and subscription guide for enterprise Kubernetes document.

To create an infrastructure node, see "Creating a compute machine set", "Creating an infrastructure node", or "Creating an infrastructure node". Use the sample compute machine set for your cloud to deploy an infrastructure machine set. Modify the sample configuration file with the details of your environment.

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/infrastructure-components.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [OpenShift sizing and subscription guide for enterprise Kubernetes](https://www.redhat.com/en/resources/openshift-subscription-sizing-guide)

{% leveloffset +1 %}{% include "./modules/machineset-yaml-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Machine sets that deploy machines as Spot Instances](/machine_management/creating_machinesets/creating-machineset-aws#machineset-non-guaranteed-instance_creating-machineset-aws)

{% leveloffset +1 %}{% include "./modules/machineset-yaml-azure.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Machine sets that deploy machines as Spot VMs](/machine_management/creating_machinesets/creating-machineset-azure#machineset-non-guaranteed-instance_creating-machineset-azure)
*   [Using the Azure Marketplace offering](/machine_management/creating_machinesets/creating-machineset-azure#installation-azure-marketplace-subscribe_creating-machineset-azure)

{% leveloffset +1 %}{% include "./modules/machineset-yaml-azure-stack-hub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-ibm-cloud.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-gcp.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Machine sets that deploy machines as preemptible VM instances](/machine_management/creating_machinesets/creating-machineset-gcp#machineset-non-guaranteed-instance_legacy-preempt)

{% leveloffset +1 %}{% include "./modules/machineset-yaml-nutanix.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-osp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machineset-yaml-vsphere.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)

{% leveloffset +1 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-an-infra-node.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} infrastructure components](/machine_management/creating-infrastructure-machinesets#infrastructure-components_creating-infrastructure-machinesets)
*   [Moving resources to infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#moving-resources-to-infrastructure-machinesets_creating-infrastructure-machinesets)

{% leveloffset +1 %}{% include "./modules/creating-infra-machines.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Node configuration management with machine config pools](/architecture/control-plane#architecture-machine-config-pools_control-plane)

{% leveloffset +1 %}{% include "./modules/binding-infra-node-workloads-using-taints-tolerations.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} infrastructure components](/machine_management/creating-infrastructure-machinesets#infrastructure-components_creating-infrastructure-machinesets)
*   [Controlling pod placement using the scheduler](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)
*   [Moving resources to infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#moving-resources-to-infrastructure-machinesets_creating-infrastructure-machinesets)
*   [Understanding taints and tolerations](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)

{% leveloffset +1 %}{% include "./modules/infra-machine-sets-moving.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/infrastructure-moving-router.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/infrastructure-moving-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/infrastructure-moving-monitoring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-vertical-autoscaler-moving-vpa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-resource-override-move-infra.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Moving monitoring components to different nodes](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/configuring-performance-and-scalability#moving-monitoring-components-to-different-nodes_configuring-performance-and-scalability)

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [OpenShift sizing and subscription guide for enterprise Kubernetes](https://www.redhat.com/en/resources/openshift-subscription-sizing-guide)
*   [Create an infrastructure machine set](/machine_management/creating-infrastructure-machinesets#machineset-creating_creating-infrastructure-machinesets)
*   [Label an infrastructure node](/machine_management/creating-infrastructure-machinesets#creating-an-infra-node_creating-infrastructure-machinesets)
*   [Use a machine config pool](/machine_management/creating-infrastructure-machinesets#creating-infra-machines_creating-infrastructure-machinesets)