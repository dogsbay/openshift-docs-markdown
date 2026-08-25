---
title: Installing a cluster on OpenStack on your own infrastructure
---

# Installing a cluster on OpenStack on your own infrastructure {#installing-openstack-user}

In OpenShift Container Platform version 4.22, you can install a cluster on {{ rh_openstack_first }} that runs on user-provisioned infrastructure.

By using your own infrastructure, you can integrate your cluster with existing infrastructure and modifications. The process requires more effort on your part than installer-provisioned installations, because you must create all {{ rh_openstack }} resources, like Nova servers, Neutron ports, and security groups. However, Red Hat provides Ansible playbooks to help you in the deployment process.

Ensure that you meet the following prerequisites:

- You reviewed details about the OpenShift Container Platform installation and update processes.
- You read the documentation on selecting a cluster installation method and preparing it for users.
- You verified that OpenShift Container Platform 4.22 is compatible with your {{ rh_openstack }} version by using the "Supported platforms for OpenShift Container Platform clusters" section. You can also compare platform support across different versions by viewing the OpenShift Container Platform on {{ rh_openstack }} support matrix.
- You have an {{ rh_openstack }} account where you want to install OpenShift Container Platform.
- You understand performance and scalability practices for cluster scaling, control plane sizing, and etcd. For more information, see "Recommended control plane practices".
- On the machine from which you run the installation program, you have:

  - A single directory in which you can keep the files you create during the installation process
  - Python 3

You can complete the following configurations after you install a cluster on {{ rh_openstack }} on your own infrastructure:

- Customize your cluster.
- If necessary, you can use remote health reporting.
- If you need to enable external access to node ports, configure ingress cluster traffic by using a node port.
- If you did not configure {{ rh_openstack }} to accept application traffic over floating IP addresses, configure {{ rh_openstack }} access with floating IP addresses.

**Additional resources**

- [Installation and update](/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
- [Supported platforms for OpenShift Container Platform clusters](/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
- [OpenShift Container Platform on {{ rh_openstack }} support matrix](https://access.redhat.com/articles/4679401)
- [Recommended control plane practices](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-host-practices)
- [Postinstallation cluster tasks](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Configuring ingress cluster traffic by using a NodePort](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#nw-using-nodeport_configuring-ingress-cluster-traffic-nodeport)
- [Configuring network settings after installing {{ rh_openstack }}](/installing/installing_openstack/installing-openstack-network-config#installation-osp-configuring-api-floating-ip_installing-openstack-network-config)

**Additional resources**

- [Installation configuration parameters for OpenStack](/installing/installing_openstack/installation-config-parameters-openstack#installation-config-parameters-openstack)

**Additional resources**

- [The {{ rh_openstack }} documentation](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/networking-overview_rhosp-network#tenant-provider-networks_network-overview)

**Additional resources**

- [The provider networks documentation](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/networking-overview_rhosp-network#tenant-provider-networks_network-overview)
- [role-based access control (RBAC)](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/config-rbac-policies_rhosp-network#proc_create-rbac-policies_config-rbac-policies)

**Additional resources**

- [Bare Metal service (Ironic)](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/bare_metal_provisioning/index)
- [A {{ rh_openstack }} flavor](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_the_bare_metal_provisioning_service/assembly_configuring-the-bare-metal-provisioning-service-after-deployment#proc_creating-flavors-for-launching-bare-metal-instances_bare-metal-post-deployment)

**Additional resources**

- [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
