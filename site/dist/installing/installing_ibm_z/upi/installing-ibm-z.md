---
title: Installing a cluster with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }}
---

# Installing a cluster with z/VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {#installing-ibm-z}

You can install OpenShift Container Platform on {{ ibm_z_name }} or {{ ibm_linuxone_name }} by using z/VM on infrastructure that you provision, giving you full control over networking, storage, and compute resources.

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

- [Creating machine configs with Butane](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)

**Additional resources**

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

## Additional resources {#additional-resources_installing-ibm-z}

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [How to generate SOSREPORT within OpenShift Container Platform version 4 nodes without SSH](https://access.redhat.com/solutions/4387261)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Enabling multipathing with kernel arguments on {{ op_system }}](/openshift-docs-markdown/machine_configuration/machine-configs-configure#rhcos-enabling-multipath-day-2_machine-configs-configure)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
