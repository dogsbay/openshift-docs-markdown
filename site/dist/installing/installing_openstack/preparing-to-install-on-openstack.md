---
title: Preparing to install on OpenStack
---

# Preparing to install on OpenStack {#preparing-to-install-on-openstack}

You can install OpenShift Container Platform on {{ rh_openstack_first }}.

Prerequisites
:   - You reviewed details about the OpenShift Container Platform installation and update processes.
    - You read the documentation on selecting a cluster installation method and preparing it for users.

Choosing a method to install OpenShift Container Platform on OpenStack
:   You can install OpenShift Container Platform on installer-provisioned or user-provisioned infrastructure. The default installation type uses installer-provisioned infrastructure, where the installation program provisions the underlying infrastructure for the cluster. You can also install OpenShift Container Platform on infrastructure that you provision. If you do not use infrastructure that the installation program provisions, you must manage and maintain the cluster resources yourself.

For more information about installer-provisioned and user-provisioned installation processes, see "Installation process".

Installing a cluster on installer-provisioned infrastructure
:   You can install a cluster on {{ rh_openstack_first }} infrastructure that is provisioned by the OpenShift Container Platform installation program, by using one of the following methods:

- Installing a cluster on {{ rh_openstack_first }} with customizations: You can install a customized cluster on {{ rh_openstack }}. The installation program allows for some customization to be applied at the installation stage. For other customization options, see "Postinstallation cluster tasks".
- Installing a cluster on {{ rh_openstack_first }} in a restricted network: You can install OpenShift Container Platform on {{ rh_openstack }} in a restricted or disconnected network by creating an internal mirror of the installation release content. You can use this method to install a cluster that does not require an active internet connection to obtain the software components. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content.

Installing a cluster on user-provisioned infrastructure
:   You can install a cluster on {{ rh_openstack }} infrastructure that you provision. By using this installation method, you can integrate your cluster with existing infrastructure and modifications. For installations on user-provisioned infrastructure, you must create all {{ rh_openstack }} resources, like Nova servers, Neutron ports, and security groups. You can use the provided Ansible playbooks to assist with the deployment process.

## Additional resources {#additional-resources_preparing-to-install-on-openstack}

- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Installation process](/openshift-docs-markdown/architecture/architecture-installation#installation-process_architecture-installation)
- [Installing a cluster on {{ rh_openstack_first }} with customizations](/openshift-docs-markdown/installing/installing_openstack/installing-openstack-installer-custom#installing-openstack-installer-custom)
- [Postinstallation cluster tasks](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#post-install-cluster-tasks)
- [Installing a cluster on {{ rh_openstack_first }} in a restricted network](/openshift-docs-markdown/installing/installing_openstack/installing-openstack-installer-restricted#installing-openstack-installer-restricted)
- [Installing a cluster on {{ rh_openstack_first }} on your own infrastructure](/openshift-docs-markdown/installing/installing_openstack/installing-openstack-user#installing-openstack-user)
