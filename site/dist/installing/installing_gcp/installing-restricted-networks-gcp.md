---
title: Installing a cluster on {{ gcp_short }} in a disconnected environment with user-provisioned infrastructure
---

# Installing a cluster on {{ gcp_short }} in a disconnected environment with user-provisioned infrastructure {#installing-restricted-networks-gcp}

In OpenShift Container Platform version 4.22, you can install a cluster on {{ gcp_first }} that uses infrastructure that you provide and an internal mirror of the installation release content.

> [!IMPORTANT]
> While you can install an OpenShift Container Platform cluster by using mirrored installation release content, your cluster still requires internet access to use the {{ gcp_short }} APIs.

The steps for performing a user-provided infrastructure install are outlined here. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of OpenShift Container Platform. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
- You [created a registry on your mirror host](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images) and obtained the `imageContentSources` data for your version of OpenShift Container Platform.

  > [!IMPORTANT]
  > Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
- If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to. While you might need to grant access to more sites, you must grant access to `*.googleapis.com` and `accounts.google.com`.
- If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can [manually create and maintain long-term credentials](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations).

## Configuring your {{ gcp_short }} project {#installation-restricted-networks-gcp-user-infra-config-project}

Before you can install OpenShift Container Platform, you must configure a {{ gcp_first }} project to host it.

**Additional resources**

- [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

## Requirements for a cluster with user-provisioned infrastructure {#installation-requirements-user-infra_installing-restricted-networks-gcp}

For a cluster that contains user-provisioned infrastructure, you must deploy all of the required machines.

This section describes the requirements for deploying OpenShift Container Platform on user-provisioned infrastructure.

**Additional resources**

- [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

**Additional resources**

- [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

**Additional resources**

- [Optional: Adding the ingress DNS records](/installing/installing_gcp/installing-gcp-user-infra#installation-gcp-user-infra-adding-ingress_installing-gcp-user-infra)

## Exporting common variables {#installation-restricted-networks-gcp-user-infra-exporting-common-variables}

**Additional resources**

- See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#_next_steps}

- [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- [Configure image streams](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected) for the Cluster Samples Operator and the `must-gather` tool.
- Learn how to [Use Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks).
- If the mirror registry that you used to install your cluster has a trusted CA, add it to the cluster by [configuring additional trust stores](/openshift_images/image-configuration#images-configuration-cas_image-configuration).
- If necessary, you can [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
- If necessary, see [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
