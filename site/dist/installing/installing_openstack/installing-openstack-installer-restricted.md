---
title: Installing a cluster on OpenStack in a disconnected environment
---

# Installing a cluster on OpenStack in a disconnected environment {#installing-openstack-installer-restricted}

In OpenShift Container Platform 4.22, you can install a cluster on {{ rh_openstack_first }} in a restricted network by creating an internal mirror of the installation release content.

Ensure that you meet the following prerequisites:

- You reviewed details about the OpenShift Container Platform installation and update processes.
- You read the documentation on selecting a cluster installation method and preparing it for users.
- You verified that OpenShift Container Platform 4.22 is compatible with your {{ rh_openstack }} version. For more information, see "Supported platforms for OpenShift Container Platform clusters". You can also compare platform support across different versions by viewing the "OpenShift Container Platform on {{ rh_openstack }} support matrix".
- You created a registry on your mirror host and obtained the `imageContentSources` data for your version of OpenShift Container Platform. Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
- You understand performance and scalability practices for cluster scaling, control plane sizing, and etcd. For more information, see "Recommended control plane practices".
- You have the metadata service enabled in {{ rh_openstack }}.

You can complete the following configurations after you install a cluster on {{ rh_openstack_first }} in a disconnected environment:

- Customize your cluster.
- If the mirror registry that you used to install your cluster has a trusted CA, add it to the cluster by configuring additional trust stores.
- Enable remote health reporting.
- Register your disconnected cluster.
- Configure image streams for the Cluster Samples Operator and the `must-gather` tool.
- Learn how to use Operator Lifecycle Manager in disconnected environments.
- If you did not configure {{ rh_openstack }} to accept application traffic over floating IP addresses, configure {{ rh_openstack }} access with floating IP addresses.

**Additional resources**

- [Installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Supported platforms for OpenShift Container Platform clusters](/openshift-docs-markdown/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
- [OpenShift Container Platform on {{ rh_openstack }} support matrix (Knowledgebase article)](https://access.redhat.com/articles/4679401)
- [Mirroring images for a disconnected installation by using the `oc adm` command](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
- [Recommended control plane practices](/openshift-docs-markdown/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-host-practices)
- [Postinstallation cluster tasks](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Image configuration resources](/openshift-docs-markdown/openshift_images/image-configuration#images-configuration-cas_image-configuration)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Registering your disconnected cluster](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Configuring network settings after installing {{ rh_openstack }}](/openshift-docs-markdown/installing/installing_openstack/installing-openstack-network-config#installation-osp-configuring-api-floating-ip_installing-openstack-network-config)

**Additional resources**

- [huge pages](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/configuring_the_compute_service_for_instance_creation/assembly_configuring-compute-nodes-for-performance_compute-performance#proc_configuring-huge-pages-on-compute-nodes_compute-performance)
- [Configuring Compute nodes for performance](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html-single/configuring_the_compute_service_for_instance_creation/configuring-compute-nodes-for-performance#configuring-compute-nodes-for-performance)

**Additional resources**

- [Installation configuration parameters for {{ rh_openstack }}](/openshift-docs-markdown/installing/installing_openstack/installation-config-parameters-openstack#installation-config-parameters-openstack)

**Additional resources**

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)

**Additional resources**

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
