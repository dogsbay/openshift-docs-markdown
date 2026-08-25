---
title: Installing a cluster on vSphere with network customizations
---

# Installing a cluster on vSphere with network customizations {#installing-vsphere-network-customizations}

In OpenShift Container Platform version 4.22, you can install a cluster on VMware vSphere infrastructure that you provision with customized network configuration options. By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

You must set most of the network configuration parameters during installation, and you can modify only `kubeProxy` configuration parameters in a running cluster.

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the vSphere platform and the installation process of OpenShift Container Platform. Use the user-provisioned infrastructure installation instructions as a guide; you are free to create the required resources through other methods.

## Prerequisites {#prerequisites_installing-vsphere-network-customizations_installing-vsphere-network-customizations}

- You have completed the tasks in "Preparing to install a cluster using user-provisioned infrastructure".
- You reviewed your VMware platform licenses. Red Hat does not place any restrictions on your VMware licenses, but some VMware infrastructure components require licensing.
- You reviewed details about the OpenShift Container Platform installation and update processes.
- You read the documentation on selecting a cluster installation method and preparing it for users.
- Completing the installation requires that you upload the {{ op_system_first }} OVA on vSphere hosts. The machine from which you complete this process requires access to port 443 on the vCenter and ESXi hosts. Verify that port 443 is accessible.
- If you use a firewall, you confirmed with the administrator that port 443 is accessible. Control plane nodes must be able to reach vCenter and ESXi hosts on port 443 for the installation to succeed.
- If you use a firewall, you configured it to allow the sites that your cluster requires access to.

**Additional resources**

- [Additional VMware vSphere configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-additional-vsphere_installation-config-parameters-vsphere)
- [Deprecated VMware vSphere configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#deprecated-parameters-vsphere_installation-config-parameters-vsphere)
- [vSphere automatic migration](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration-sc-vsphere_persistent-storage-csi-migration)
- [VMware vSphere CSI Driver Operator](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-top-aware_persistent-storage-csi-vsphere)

**Additional resources**

- [Installation configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#installation-config-parameters-vsphere)

**Additional resources**

- [Cluster Network Operator configuration](/openshift-docs-markdown/installing/installing_vsphere/upi/installing-vsphere-network-customizations#nw-operator-cr_installing-vsphere-network-customizations)
- [`.spec.platformSpec.vsphere.nodeNetworking`](/openshift-docs-markdown/rest_api/config_apis/infrastructure-config-openshift-io-v1#spec-platformspec-vsphere-nodenetworking)

**Additional resources**

- [Configuring the registry for vSphere](/openshift-docs-markdown/registry/configuring_registry_storage/configuring-registry-storage-vsphere#registry-configuring-storage-vsphere_configuring-registry-storage-vsphere)

**Additional resources**

- [Adding compute machines to vSphere](/openshift-docs-markdown/machine_management/user_infra/adding-vsphere-compute-user-infra#adding-vsphere-compute-user-infra)

**Additional resources**

- [Preparing to install a cluster using user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_vsphere/upi/upi-vsphere-preparing-to-install#upi-vsphere-preparing-to-install)
- [OpenShift Container Platform installation and update processes](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Configuring your firewall to allow required sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Set up your registry and configure registry storage](/openshift-docs-markdown/registry/configuring_registry_storage/configuring-registry-storage-vsphere#configuring-registry-storage-vsphere)
- [View the events from the vSphere Problem Detector Operator to determine if the cluster has permission or storage configuration issues](/openshift-docs-markdown/installing/installing_vsphere/using-vsphere-problem-detector-operator#vsphere-problem-detector-viewing-events_vsphere-problem-detector)
- [Creating an encrypted storage class for encrypted virtual machines](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-vsphere#vsphere-pv-encryption)
