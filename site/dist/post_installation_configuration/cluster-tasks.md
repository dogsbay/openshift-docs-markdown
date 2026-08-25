---
title: Postinstallation cluster tasks
---

# Postinstallation cluster tasks {#post-install-cluster-tasks}

After installing OpenShift Container Platform, you can configure, scale, and maintain your cluster to meet operational requirements, including managing nodes and infrastructure workloads, enabling features, applying autoscaling, and maintaining etcd.

After installing OpenShift Container Platform, you can further expand and customize your cluster to your requirements.

## Available cluster customizations {#available_cluster_customizations}

You complete most of the cluster configuration and customization after you deploy your OpenShift Container Platform cluster. Several *configuration resources* are available.

> [!NOTE]
> If you install your cluster on {{ ibm_z_name }}, not all features and functions are available.

You modify the configuration resources to configure the major features of the cluster, such as the image registry, networking configuration, image build behavior, and the identity provider.

For current documentation of the settings that you control by using these resources, use the `oc explain` command, for example `oc explain builds --api-version=config.openshift.io/v1`

**Additional resources**

- [Adding worker nodes to an on-premise cluster](/openshift-docs-markdown/nodes/nodes/nodes-nodes-adding-node-iso#adding-node-iso)

**Additional resources**

- [Adding worker nodes using the web console](/openshift-docs-markdown/scalability_and_performance/managing-bare-metal-hosts#adding-bare-metal-host-to-cluster-using-web-console_managing-bare-metal-hosts)
- [Adding worker nodes using YAML in the web console](/openshift-docs-markdown/scalability_and_performance/managing-bare-metal-hosts#adding-bare-metal-host-to-cluster-using-yaml_managing-bare-metal-hosts)
- [Manually adding a worker node to an installer-provisioned infrastructure cluster](/openshift-docs-markdown/installing/installing_bare_metal/bare-metal-expanding-the-cluster#preparing-the-bare-metal-node_bare-metal-expanding)

**Additional resources**

- [Adding RHCOS worker nodes to a user-provisioned infrastructure cluster](/openshift-docs-markdown/post_installation_configuration/node-tasks#post-install-config-adding-fcos-compute)

**Additional resources**

- [Adding worker nodes using {{ cluster_manager }}](/openshift-docs-markdown/nodes/nodes/nodes-sno-worker-nodes#sno-adding-worker-nodes-to-sno-clusters_add-workers)
- [Adding worker nodes using the Assisted Installer REST API](/openshift-docs-markdown/nodes/nodes/nodes-sno-worker-nodes#adding-worker-nodes-using-the-assisted-installer-api)
- [Manually adding worker nodes to a {{ sno }} cluster](/openshift-docs-markdown/nodes/nodes/nodes-sno-worker-nodes#sno-adding-worker-nodes-to-single-node-clusters-manually_add-workers)

**Additional resources**

- [Creating your cluster with the console](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/2.9/html/clusters/cluster_mce_overview#on-prem-creating-your-cluster-with-the-console)

**Additional resources**

- [Control plane machine sets](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)
- [Getting started with control plane machine sets](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso-getting-started#cpmso-getting-started)

**Additional resources**

- [Creating infrastructure machine sets](/openshift-docs-markdown/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets)
- [Use a machine set to create an infrastructure node](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#machineset-creating_post-install-cluster-tasks)
- [Assign a label to infrastructure nodes](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#creating-an-infra-node_post-install-cluster-tasks)
- [Use a machine config pool for infrastructure nodes](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#creating-infra-machines_post-install-cluster-tasks)
- [Creating machine sets for different clouds](/openshift-docs-markdown/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets-clouds)
- [Schedule infrastructure workloads using node selectors](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#moving-resources-to-infrastructure-machinesets_post-install-cluster-tasks)

**Additional resources**

- [Project node selectors](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-node-selectors#project-node-selectors_nodes-scheduler-node-selectors)

**Additional resources**

- [Node configuration management with machine config pools](/openshift-docs-markdown/architecture/control-plane#architecture-machine-config-pools_control-plane)

**Additional resources**

- [Controlling pod placement using the scheduler](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)

**Additional resources**

- [Applying autoscaling to an OpenShift Container Platform cluster](/openshift-docs-markdown/machine_management/applying-autoscaling#applying-autoscaling)

**Additional resources**

- [Node scaling for etcd](/openshift-docs-markdown/etcd/etcd-performance#etcd-node-scaling_etcd-performance)

**Additional resources**

- [Recommended etcd practices](/openshift-docs-markdown/etcd/etcd-practices#recommended-etcd-practices)
- [Installing a user-provisioned cluster on bare metal](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
- [Replacing a bare-metal control plane node](/openshift-docs-markdown/installing/overview/index#replacing-a-bare-metal-control-plane-node_bare-metal-expanding)

**Additional resources**

- [Enabling features using feature gates](/openshift-docs-markdown/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
- [Unhealthy Pod Eviction Policy in the Kubernetes documentation](https://kubernetes.io/docs/tasks/run-application/configure-pdb/#unhealthy-pod-eviction-policy)
