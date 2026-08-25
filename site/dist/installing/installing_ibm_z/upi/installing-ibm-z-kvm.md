---
title: Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}
---

# Installing a cluster with {{ op_system_base }} KVM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {#installing-ibm-z-kvm}

You can install OpenShift Container Platform on {{ ibm_z_name }} or {{ ibm_linuxone_name }} by using {{ op_system_base }} KVM on infrastructure that you provision, giving you full control over networking, storage, and compute resources.

> [!NOTE]
> While this document refers only to {{ ibm_z_name }}, all information in it also applies to {{ ibm_linuxone_name }}.

**Additional resources**

- [Preparing to install a cluster on {{ ibm_z_title }} using user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_ibm_z/upi/upi-ibm-z-preparing-to-install#upi-ibm-z-preparing-to-install)
- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Persistent storage using {{ rh_storage }}](/openshift-docs-markdown/storage/persistent_storage/persistent-storage-ocs#persistent-storage-ocs)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

**Additional resources**

- [Installation configuration parameters for {{ ibm_z_name }}](/openshift-docs-markdown/installing/installing_ibm_z/installation-config-parameters-ibm-z#installation-config-parameters-ibm-z)

**Additional resources**

- [Introducing {{ ibm_name }} Secure Execution for Linux](https://www.ibm.com/docs/en/linux-on-systems?topic=virtualization-secure-execution)
- [Linux as an {{ ibm_name }} Secure Execution host or guest](https://www.ibm.com/docs/en/linux-on-systems?topic=ibm-z-secure-execution)
- [Setting up {{ ibm_name }} Secure Execution on {{ ibm_z_title }}](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_virtualization/securing-virtual-machines-in-rhel_configuring-and-managing-virtualization#setting-up-secure-execution-on-ibm-z_securing-virtual-machines-in-rhel)

**Additional resources**

- [Creating machine configs with Butane](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)

**Additional resources**

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

## Additional resources {#additional-resources_installing-ibm-z-kvm}

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [How to generate SOSREPORT within OpenShift Container Platform version 4 nodes without SSH](https://access.redhat.com/solutions/4387261)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
