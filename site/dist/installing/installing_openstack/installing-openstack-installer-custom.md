---
title: Installing a cluster on OpenStack with customizations
---

# Installing a cluster on OpenStack with customizations {#installing-openstack-installer-custom}

In OpenShift Container Platform version 4.22, you can install a customized cluster on {{ rh_openstack_first }}. To customize the installation, modify parameters in the `install-config.yaml` before you install the cluster.

Ensure that you meet the following prerequisites:

- You reviewed details about the OpenShift Container Platform installation and update processes.
- You read the documentation on selecting a cluster installation method and preparing it for users.
- You verified that OpenShift Container Platform 4.22 is compatible with your {{ rh_openstack }} version by using the supported platforms for OpenShift Container Platform clusters section. You can also compare platform support across different versions by viewing the OpenShift Container Platform on {{ rh_openstack }} support matrix.
- You have a storage service installed in {{ rh_openstack }}, such as block storage (Cinder) or object storage (Swift). Object storage is the recommended storage technology for OpenShift Container Platform registry cluster deployment. For more information, see "Optimizing storage".
- You understand performance and scalability practices for cluster scaling, control plane sizing, and etcd. For more information, see "Recommended practices for scaling the cluster".
- You have the metadata service enabled in {{ rh_openstack }}.

You can complete the following configurations after you install a cluster on {{ rh_openstack }} with customizations:

- Customize your cluster.
- Enable remote health reporting.
- Configure ingress cluster traffic by using a node port.
- If you did not configure {{ rh_openstack }} to accept application traffic over floating IP addresses, configure {{ rh_openstack }} access with floating IP addresses.

**Additional resources**

- [Installation and update](/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
- [Supported platforms for OpenShift Container Platform clusters](/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
- [OpenShift Container Platform on {{ rh_openstack }} support matrix (Red Hat Knowledgebase)](https://access.redhat.com/articles/4679401)
- [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
- [Recommended practices for scaling the cluster](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-host-practices)

**Additional resources**

- [Installation configuration parameters for {{ rh_openstack }}](/installing/installing_openstack/installation-config-parameters-openstack#installation-config-parameters-openstack)

**Additional resources**

- [Understanding multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)

**Additional resources**

- [Creating a mirror registry with mirror registry for Red Hat OpenShift](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry)

**Additional resources**

- [Accessing the web console](/web_console/web-console#web-console)

**Additional resources**

- [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {#additional-resources_installing-openstack-installer-custom}

- [Postinstallation cluster tasks](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Configuring ingress cluster traffic by using a NodePort](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#nw-using-nodeport_configuring-ingress-cluster-traffic-nodeport)
- [Configuring network settings after installing {{ rh_openstack }}](/installing/installing_openstack/installing-openstack-network-config#installation-osp-configuring-api-floating-ip_installing-openstack-network-config)
