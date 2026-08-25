---
title: Installing a cluster on {{ ibm_cloud_title }} with customizations
---

# Installing a cluster on {{ ibm_cloud_title }} with customizations {#installing-ibm-cloud-customizations}

In OpenShift Container Platform version 4.22, you can install a customized cluster on {{ ibm_cloud_name }} by using installer-provisioned infrastructure. Change parameters in the `install-config.yaml` file before you install the cluster.

By customizing your network configuration, your cluster can coexist with existing IP address allocations in your environment and integrate with existing MTU and VXLAN configurations.

You must set most of the network configuration parameters during installation, and you can change only `kubeProxy` configuration parameters in a running cluster.

**Additional resources**

- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Configuring an {{ ibm_cloud_name }} account](/openshift-docs-markdown/installing/installing_ibm_cloud/installing-ibm-cloud-account#installing-ibm-cloud-account)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Configuring IAM for {{ ibm_cloud_name }}](/openshift-docs-markdown/installing/installing_ibm_cloud/configuring-iam-ibm-cloud#configuring-iam-ibm-cloud)

**Additional resources**

- [Installation configuration parameters for {{ ibm_cloud_name }}](/openshift-docs-markdown/installing/installing_ibm_cloud/installation-config-parameters-ibm-cloud-vpc#installation-config-parameters-ibm-cloud-vpc)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

<a name="additional-resources_installing-ibm-cloud-customizations-console"></a>**Additional resources**

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)

## Additional resources {#additional-resources_installing-ibm-cloud-customizations}

- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
