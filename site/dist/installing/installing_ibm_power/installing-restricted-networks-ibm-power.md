---
title: Installing a cluster on {{ ibm_power_title }} in a disconnected environment
---

# Installing a cluster on {{ ibm_power_title }} in a disconnected environment {#installing-restricted-networks-ibm-power}

You can install OpenShift Container Platform on {{ ibm_power_name }} infrastructure that you provision in a disconnected environment by mirroring the required release images to an internal registry and then running the installation program.

> [!IMPORTANT]
> Additional considerations exist for non-bare metal platforms. Review the guidelines for deploying OpenShift Container Platform on non-tested platforms before you install an OpenShift Container Platform cluster.

**Additional resources**

- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Mirroring images for a disconnected installation](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
- [Persistent storage using {{ rh_storage }}](/openshift-docs-markdown/storage/persistent_storage/persistent-storage-ocs#persistent-storage-ocs)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Configuring chrony time service](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-chrony_installing-customizing)

**Additional resources**

- [Installation configuration parameters for {{ ibm_power_name }}](/openshift-docs-markdown/installing/installing_ibm_power/installation-config-parameters-ibm-power#installation-config-parameters-ibm-power)

**Additional resources**

- [`dracut.cmdline` manual page](https://www.man7.org/linux/man-pages/man7/dracut.cmdline.7.html)

## Additional resources {#additional-resources_installing-restricted-networks-ibm-power}

- [Guidelines for deploying OpenShift Container Platform on non-tested platforms](https://access.redhat.com/articles/4207611)
- [Enabling multipathing with kernel arguments on {{ op_system }}](/openshift-docs-markdown/machine_configuration/machine-configs-configure#rhcos-enabling-multipath-day-2_machine-configs-configure)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Configuring additional trust stores](/openshift-docs-markdown/openshift_images/image-configuration#images-configuration-cas_image-configuration)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Registering your disconnected cluster](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
