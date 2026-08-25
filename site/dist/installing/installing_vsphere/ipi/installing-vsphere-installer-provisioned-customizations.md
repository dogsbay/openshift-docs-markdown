---
title: Installing a cluster on vSphere with customizations
---

# Installing a cluster on vSphere with customizations {#installing-vsphere-installer-provisioned-customizations}

In OpenShift Container Platform version 4.22, you can install a cluster on your {{ vmw_first }} instance by using installer-provisioned infrastructure with customizations, including network configuration options. In each, you modify parameters in the `install-config.yaml` file before you install the cluster.

By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

You must set most of the network configuration parameters during installation, and you can modify only `kubeProxy` configuration parameters in a running cluster.

## Prerequisites {#prerequisites_installing-vsphere-installer-provisioned-customizations}

- You have completed the tasks in "Preparing to install a cluster using installer-provisioned infrastructure".
- You reviewed your {{ vmw_short }} platform licenses. Red Hat does not place any restrictions on your {{ vmw_short }} licenses, but some {{ vmw_short }} infrastructure components require licensing.
- You reviewed details about the OpenShift Container Platform installation and update processes.
- You read the documentation on selecting a cluster installation method and preparing it for users.
- You provisioned persistent storage for your cluster. To deploy a private image registry, your storage must provide `ReadWriteMany` access modes.
- The OpenShift Container Platform installer requires access to port 443 on the vCenter and ESXi hosts. You verified that port 443 is accessible.
- If you use a firewall, you confirmed with the administrator that port 443 is accessible. Control plane nodes must be able to reach vCenter and ESXi hosts on port 443 for the installation to succeed.
- If you use a firewall, you configured it to allow the sites that your cluster requires access to.

  > [!NOTE]
  > Be sure to also review this site list if you are configuring a proxy.

**Additional resources**

- [Additional {{ vmw_full }} configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-additional-vsphere_installation-config-parameters-vsphere)
- [Deprecated {{ vmw_full }} configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#deprecated-parameters-vsphere_installation-config-parameters-vsphere)
- [{{ vmw_short }} automatic migration](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration-sc-vsphere_persistent-storage-csi-migration)
- [{{ vmw_full }} CSI Driver Operator](/openshift-docs-markdown/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-top-aware_persistent-storage-csi-vsphere)

**Additional resources**

- [Installation configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#installation-config-parameters-vsphere)

**Additional resources**

- [Network configuration parameters](/openshift-docs-markdown/installing/installing_vsphere/installation-config-parameters-vsphere#installation-configuration-parameters-network_installation-config-parameters-vsphere)

**Additional resources**

- [`.spec.platformSpec.vsphere.nodeNetworking`](/openshift-docs-markdown/rest_api/config_apis/infrastructure-config-openshift-io-v1#spec-platformspec-vsphere-nodenetworking)

**Additional resources**

- [Configuring the registry for vSphere](/openshift-docs-markdown/registry/configuring_registry_storage/configuring-registry-storage-vsphere#registry-configuring-storage-vsphere_configuring-registry-storage-vsphere)

**Additional resources**

- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

**Additional resources**

- [Preparing to install a cluster using installer-provisioned infrastructure](/openshift-docs-markdown/installing/installing_vsphere/ipi/ipi-vsphere-preparing-to-install#ipi-vsphere-preparing-to-install)
- [OpenShift Container Platform installation and update processes](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Persistent storage](/openshift-docs-markdown/storage/understanding-persistent-storage#understanding-persistent-storage)
- [Configuring your firewall to allow required sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Set up your registry and configure registry storage](/openshift-docs-markdown/registry/configuring_registry_storage/configuring-registry-storage-vsphere#configuring-registry-storage-vsphere)
- [View the events from the {{ vmw_short }} Problem Detector Operator to determine if the cluster has permission or storage configuration issues](/openshift-docs-markdown/installing/installing_vsphere/using-vsphere-problem-detector-operator#vsphere-problem-detector-viewing-events_vsphere-problem-detector)
