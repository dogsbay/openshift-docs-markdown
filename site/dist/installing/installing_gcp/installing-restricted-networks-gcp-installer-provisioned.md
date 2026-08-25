---
title: Installing a cluster on {{ gcp_short }} in a disconnected environment
---

# Installing a cluster on {{ gcp_short }} in a disconnected environment {#installing-restricted-networks-gcp-installer-provisioned}

In OpenShift Container Platform 4.22, you can install a cluster on {{ gcp_first }} in a restricted network by creating an internal mirror of the installation release content on an existing Google Virtual Private Cloud (VPC).

> [!IMPORTANT]
> You can install an OpenShift Container Platform cluster by using mirrored installation release content, but your cluster will require internet access to use the {{ gcp_short }} APIs.

## Prerequisites {#prerequisites_installing-restricted-networks-gcp-installer-provisioned}

- You reviewed details about the [OpenShift Container Platform installation and update](/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
- You [configured a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster.
- You [mirrored the images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images) to your registry and obtained the `imageContentSources` data for your version of OpenShift Container Platform.

  > [!IMPORTANT]
  > Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
- You have an existing VPC in {{ gcp_short }}. While installing a cluster in a restricted network that uses installer-provisioned infrastructure, you cannot use the installer-provisioned VPC. You must use a user-provisioned VPC that satisfies one of the following requirements:

  - Contains the mirror registry
  - Has firewall rules or a peering connection to access the mirror registry hosted elsewhere
- If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to. While you might need to grant access to more sites, you must grant access to `*.googleapis.com` and `accounts.google.com`.
- If you are installing using a [Private Service Connect (PSC) endpoint](https://cloud.google.com/vpc/docs/private-service-connect), you must configure the endpoint in the same Virtual Private Cloud (VPC) where you install the cluster, specified in the `install-config.yaml` file, as described in [Installing a cluster on {{ gcp_short }} into an existing VPC](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc).

**Additional resources**

- [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

**Additional resources**

- [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

**Additional resources**

- [Installation configuration parameters for {{ gcp_first }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

**Additional resources**

- [Installation configuration parameters for GCP](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

## Alternatives to storing administrator-level secrets in the kube-system project {#installing-gcp-manual-modes_installing-restricted-networks-gcp-installer-provisioned}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

- To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/installing/installing_gcp/installing-restricted-networks-gcp-installer-provisioned#manually-create-iam_installing-restricted-networks-gcp-installer-provisioned).
- To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-restricted-networks-gcp-installer-provisioned#installing-gcp-with-short-term-creds_installing-restricted-networks-gcp-installer-provisioned).

### Configuring a {{ gcp_short }} cluster to use short-term credentials {#installing-gcp-with-short-term-creds_installing-restricted-networks-gcp-installer-provisioned}

To install a cluster that is configured to use {{ gcp_short }} Workload Identity, you must configure the CCO utility and create the required {{ gcp_short }} resources for your cluster.

**Additional resources**

- [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

**Additional resources**

- See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#next-steps_installing-restricted-networks-gcp-installer-provisioned}

- [Validate an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation).
- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- [Configure image streams](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected) for the Cluster Samples Operator and the `must-gather` tool.
- Learn how to [use Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks).
- If the mirror registry that you used to install your cluster has a trusted CA, add it to the cluster by [configuring additional trust stores](/openshift_images/image-configuration#images-configuration-cas_image-configuration).
- If necessary, you can [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
- If necessary, see [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
