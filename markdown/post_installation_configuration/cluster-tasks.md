---
title: Postinstallation cluster tasks
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "post-install-cluster-tasks" %}
# Postinstallation cluster tasks {id="post-install-cluster-tasks"}
{% include "./_attributes/common-attributes.md" %}

After installing {{ product_title }}, you can configure, scale, and maintain your cluster to meet operational requirements, including managing nodes and infrastructure workloads, enabling features, applying autoscaling, and maintaining etcd.

After installing {{ product_title }}, you can further expand and customize your cluster to your requirements.

## Available cluster customizations {id="available_cluster_customizations"}

You complete most of the cluster configuration and customization after you deploy your {{ product_title }} cluster. Several _configuration resources_ are available.


:::note

If you install your cluster on {{ ibm_z_name }}, not all features and functions are available.

:::


You modify the configuration resources to configure the major features of the cluster, such as the image registry, networking configuration, image build behavior, and the identity provider.

For current documentation of the settings that you control by using these resources, use the `oc explain` command, for example `oc explain builds --api-version=config.openshift.io/v1`

{% leveloffset +2 %}{% include "./modules/post-install-cluster-config-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-install-operator-config-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-install-additional-config-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-install-informational-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-adding-worker-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/post-install-adding-nodes-on-prem.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding worker nodes to an on-premise cluster](/nodes/nodes/nodes-nodes-adding-node-iso#adding-node-iso)

{% leveloffset +2 %}{% include "./modules/post-install-adding-nodes-ipi.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding worker nodes using the web console](/scalability_and_performance/managing-bare-metal-hosts#adding-bare-metal-host-to-cluster-using-web-console_managing-bare-metal-hosts)
*   [Adding worker nodes using YAML in the web console](/scalability_and_performance/managing-bare-metal-hosts#adding-bare-metal-host-to-cluster-using-yaml_managing-bare-metal-hosts)
*   [Manually adding a worker node to an installer-provisioned infrastructure cluster](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#preparing-the-bare-metal-node_bare-metal-expanding)

{% leveloffset +2 %}{% include "./modules/post-install-adding-nodes-upi.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding RHCOS worker nodes to a user-provisioned infrastructure cluster](/post_installation_configuration/node-tasks#post-install-config-adding-fcos-compute)

{% leveloffset +2 %}{% include "./modules/post-install-adding-nodes-assisted.md" %}{% endleveloffset %}

**Additional resources**

*   [Adding worker nodes using {{ cluster_manager }}](/nodes/nodes/nodes-sno-worker-nodes#sno-adding-worker-nodes-to-sno-clusters_add-workers)
*   [Adding worker nodes using the Assisted Installer REST API](/nodes/nodes/nodes-sno-worker-nodes#adding-worker-nodes-using-the-assisted-installer-api)
*   [Manually adding worker nodes to a {{ sno }} cluster](/nodes/nodes/nodes-sno-worker-nodes#sno-adding-worker-nodes-to-single-node-clusters-manually_add-workers)

{% leveloffset +2 %}{% include "./modules/post-install-adding-nodes-mce.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating your cluster with the console](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.9/html/clusters/cluster_mce_overview#on-prem-creating-your-cluster-with-the-console)

{% leveloffset +1 %}{% include "./modules/post-install-adjust-worker-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/differences-between-machinesets-and-machineconfigpool.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-manually-scaling.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machineset-delete-policy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-scheduler-node-selectors-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-worker-latency-profiles.md" %}{% endleveloffset %}

{% include "./snippets/worker-latency-profile-intro.md" %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-worker-latency-profiles-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-worker-latency-profiles-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-cpms-setup.md" %}{% endleveloffset %}

**Additional resources**

*   [Control plane machine sets](/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)
*   [Getting started with control plane machine sets](/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-getting-started)

{% leveloffset +2 %}{% include "./modules/creating-control-plane-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-creating-infrastructure-machinesets-production.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets)
*   [Use a machine set to create an infrastructure node](/post_installation_configuration/cluster-tasks#machineset-creating_post-install-cluster-tasks)
*   [Assign a label to infrastructure nodes](/post_installation_configuration/cluster-tasks#creating-an-infra-node_post-install-cluster-tasks)
*   [Use a machine config pool for infrastructure nodes](/post_installation_configuration/cluster-tasks#creating-infra-machines_post-install-cluster-tasks)
*   [Creating machine sets for different clouds](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets-clouds)
*   [Schedule infrastructure workloads using node selectors](/post_installation_configuration/cluster-tasks#moving-resources-to-infrastructure-machinesets_post-install-cluster-tasks)

{% leveloffset +2 %}{% include "./modules/machineset-creating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-an-infra-node.md" %}{% endleveloffset %}

**Additional resources**

*   [Project node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#project-node-selectors_nodes-scheduler-node-selectors)

{% leveloffset +2 %}{% include "./modules/creating-infra-machines.md" %}{% endleveloffset %}

**Additional resources**

*   [Node configuration management with machine config pools](/architecture/control-plane#architecture-machine-config-pools_control-plane)

{% leveloffset +1 %}{% include "./modules/post-install-assigning-machine-set-resources-to-infra-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/binding-infra-node-workloads-using-taints-tolerations.md" %}{% endleveloffset %}

**Additional resources**

*   [Controlling pod placement using the scheduler](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)

{% leveloffset +1 %}{% include "./modules/post-install-moving-resources-to-infrastructure-machinesets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/infrastructure-moving-router.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/infrastructure-moving-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/infrastructure-moving-monitoring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-autoscaler-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/cluster-autoscaler-cr.md" %}{% endleveloffset %}

{%- set FeatureName = "cluster autoscaler" -%}
{%- set FeatureResourceName = "ClusterAutoscaler" %}
{% leveloffset +2 %}{% include "./modules/deploying-resource.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-applying-autoscaling.md" %}{% endleveloffset %}

**Additional resources**

*   [Applying autoscaling to an {{ product_title }} cluster](/machine_management/applying-autoscaling#applying-autoscaling)

{% leveloffset +1 %}{% include "./modules/post-install-enabling-feature-gates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-enabling-features-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-enabling-features-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-cluster-enabling-features-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-etcd-tasks.md" %}{% endleveloffset %}

**Additional resources**

*   [Node scaling for etcd](/etcd/etcd-performance#etcd-node-scaling_etcd-performance)

{% leveloffset +2 %}{% include "./modules/about-etcd-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/etcd-encryption-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/enabling-etcd-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/disabling-etcd-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/backup-etcd.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/etcd-defrag-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/etcd-defrag-automatic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/etcd-defrag.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/dr-restoring-cluster-state.md" %}{% endleveloffset %}

**Additional resources**

*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Installing a user-provisioned cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
*   [Replacing a bare-metal control plane node](/installing/overview/index#replacing-a-bare-metal-control-plane-node_bare-metal-expanding)

{% leveloffset +2 %}{% include "./modules/dr-scenario-cluster-state-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/post-install-pod-disruption-budgets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-pod-disruption-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-pod-disruption-configuring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/pod-disruption-eviction-policy.md" %}{% endleveloffset %}

**Additional resources**

*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
*   [Unhealthy Pod Eviction Policy in the Kubernetes documentation](https://kubernetes.io/docs/tasks/run-application/configure-pdb/#unhealthy-pod-eviction-policy)