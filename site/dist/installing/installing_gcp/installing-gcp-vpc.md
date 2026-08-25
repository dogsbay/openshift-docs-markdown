---
title: Installing a cluster on {{ gcp_short }} into an existing VPC
---

# Installing a cluster on {{ gcp_short }} into an existing VPC {#installing-gcp-vpc}

In OpenShift Container Platform version 4.22, you can install a cluster into an existing Virtual Private Cloud (VPC) on {{ gcp_first }}. The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, you modify parameters in the `install-config.yaml` file before you install the cluster.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing).
- You [configured a {{ gcp_short }} project](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster.
- If you use a firewall, you [configured it to allow the sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
- If you manage your {{ gcp_short }} firewall rules, you [configured the required firewall rules](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-account#installation-gcp-user-managed-firewall-rules_installing-gcp-account).

**Additional resources**

- [Installation configuration parameters for {{ gcp_short }}](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Additional {{ gcp_first }} configuration parameters](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

**Additional resources**

- [Installation configuration parameters for {{ gcp_first }}](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

**Additional resources**

- [Installation configuration parameters for GCP](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)
- [Enabling customer-managed encryption keys for a compute machine set](/openshift-docs-markdown/machine_management/creating_machinesets/creating-machineset-gcp#machineset-enabling-customer-managed-encryption_creating-machineset-gcp)

## Alternatives to storing administrator-level secrets in the kube-system project {#installing-gcp-manual-modes_installing-gcp-vpc}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

- To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-vpc#manually-create-iam_installing-gcp-vpc).
- To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring a {{ gcp_short }} cluster to use short-term credentials](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-vpc#installing-gcp-with-short-term-creds_installing-gcp-vpc).

### Configuring a {{ gcp_short }} cluster to use short-term credentials {#installing-gcp-with-short-term-creds_installing-gcp-vpc}

To install a cluster that is configured to use {{ gcp_short }} Workload Identity, you must configure the CCO utility and create the required {{ gcp_short }} resources for your cluster.

**Additional resources**

- [Additional {{ gcp_first }} configuration parameters](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

**Additional resources**

- See [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console) for more details about accessing and understanding the OpenShift Container Platform web console.

**Additional resources**

- See [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#_next_steps}

- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- If necessary, you can [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
