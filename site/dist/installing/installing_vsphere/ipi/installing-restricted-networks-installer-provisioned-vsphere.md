---
title: Installing a cluster on vSphere in a disconnected environment
---

# Installing a cluster on vSphere in a disconnected environment {#installing-restricted-networks-installer-provisioned-vsphere}

In OpenShift Container Platform 4.22, you can install a cluster on VMware vSphere infrastructure in a restricted network by creating an internal mirror of the installation release content.

## Prerequisites {#prerequisites_installing-restricted-networks-installer-provisioned-vsphere}

- You have completed the tasks in "Preparing to install a cluster using installer-provisioned infrastructure".
- You reviewed your VMware platform licenses. Red Hat does not place any restrictions on your VMware licenses, but some VMware infrastructure components require licensing.
- You reviewed details about the OpenShift Container Platform installation and update processes.
- You read the documentation on selecting a cluster installation method and preparing it for users.
- You created a registry on your mirror host and obtained the `imageContentSources` data for your version of OpenShift Container Platform.

  > [!IMPORTANT]
  > Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
- You provisioned persistent storage for your cluster. To deploy a private image registry, your storage must provide the ReadWriteMany access mode.
- The OpenShift Container Platform installer requires access to port 443 on the vCenter and ESXi hosts. You verified that port 443 is accessible.
- If you use a firewall, you confirmed with the administrator that port 443 is accessible. Control plane nodes must be able to reach vCenter and ESXi hosts on port 443 for the installation to succeed.
- If you use a firewall and plan to use the Telemetry service, you configured the firewall to allow the sites that your cluster requires access to.

  > [!NOTE]
  > If you are configuring a proxy, be sure to also review this site list.

**Additional resources**

- [Additional VMware vSphere configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-additional-vsphere_installation-config-parameters-vsphere)
- [Deprecated VMware vSphere configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#deprecated-parameters-vsphere_installation-config-parameters-vsphere)
- [vSphere automatic migration](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration-sc-vsphere_persistent-storage-csi-migration)
- [VMware vSphere CSI Driver Operator](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-top-aware_persistent-storage-csi-vsphere)

**Additional resources**

- [Installation configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#installation-config-parameters-vsphere)

**Additional resources**

- [Preparing to install a cluster using installer-provisioned infrastructure](/openshift-docs-markdown/installing/installing_vsphere/ipi/ipi-vsphere-preparing-to-install#ipi-vsphere-preparing-to-install)
- [OpenShift Container Platform installation and update processes](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Creating a registry on your mirror host](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
- [Persistent storage](/openshift-docs-markdown/storage/understanding-persistent-storage#understanding-persistent-storage)
- [Configuring the firewall to allow required sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [Customize your cluster](/openshift-docs-markdown/installing/install_config/installing-customizing#installing-customizing)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Registering your disconnected cluster](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
- [Set up your registry and configure registry storage](/openshift-docs-markdown/registry/configuring_registry_storage/configuring-registry-storage-vsphere#configuring-registry-storage-vsphere)
