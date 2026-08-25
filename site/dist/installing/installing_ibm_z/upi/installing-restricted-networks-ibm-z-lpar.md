---
title: Installing a cluster in an LPAR on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in a disconnected environment
---

# Installing a cluster in an LPAR on {{ ibm_z_title }} and {{ ibm_linuxone_title }} in a disconnected environment {#installing-restricted-networks-ibm-z-lpar}

In OpenShift Container Platform version 4.22, you can install a cluster directly in a logical partition (LPAR) on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure that you provision in a disconnected environment, without using a hypervisor layer.

> [!NOTE]
> While this document refers to only {{ ibm_z_name }}, all information in it also applies to {{ ibm_linuxone_name }}.

**Additional resources**

- [Preparing to install a cluster on {{ ibm_z_title }} using user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_ibm_z/upi/upi-ibm-z-preparing-to-install#upi-ibm-z-preparing-to-install)
- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Mirroring images for a disconnected installation](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
- [Persistent storage using {{ rh_storage }}](/openshift-docs-markdown/storage/persistent_storage/persistent-storage-ocs#persistent-storage-ocs)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

**Additional resources**

- [Installation configuration parameters for {{ ibm_z_name }}](/openshift-docs-markdown/installing/installing_ibm_z/installation-config-parameters-ibm-z#installation-config-parameters-ibm-z)

**Additional resources**

- [Creating machine configs with Butane](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)

**Additional resources**

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

## Additional resources {#additional-resources_installing-restricted-networks-ibm-z-lpar}

- [How to generate SOSREPORT within OpenShift Container Platform version 4 nodes without SSH](https://access.redhat.com/solutions/4387261)
- [Image configuration resources (Classic)](/openshift-docs-markdown/openshift_images/image-configuration#images-configuration-cas_image-configuration)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
