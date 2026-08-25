---
title: Installing a cluster on user-provisioned infrastructure in {{ gcp_short }} by using Infrastructure Manager templates
---

# Installing a cluster on user-provisioned infrastructure in {{ gcp_short }} by using Infrastructure Manager templates {#installing-gcp-user-infra}

In OpenShift Container Platform version 4.22, you can install a cluster on {{ gcp_first }} that uses infrastructure that you provide.

The steps for performing a user-provided infrastructure install are outlined here. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of OpenShift Container Platform. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing).
- If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
- If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can [manually create and maintain long-term credentials](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations).

  > [!NOTE]
  > Be sure to also review this site list if you are configuring a proxy.

## Configuring your {{ gcp_short }} project {#installation-gcp-user-infra-config-project}

Before you can install OpenShift Container Platform, you must configure a {{ gcp_first }} project to host it.

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

## Requirements for a cluster with user-provisioned infrastructure {#installation-requirements-user-infra_installing-gcp-user-infra}

For a cluster that contains user-provisioned infrastructure, you must deploy all of the required machines.

This section describes the requirements for deploying OpenShift Container Platform on user-provisioned infrastructure.

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Installation configuration parameters for {{ gcp_short }}](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

**Additional resources**

- [Additional {{ gcp_first }} configuration parameters](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

**Additional resources**

- [Optional: Adding the ingress DNS records](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-user-infra#installation-gcp-user-infra-adding-ingress_installing-gcp-user-infra)

## Exporting common variables {#installation-gcp-user-infra-exporting-common-variables}

**Additional resources**

- See [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#_next_steps}

- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- If necessary, you can [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Configuring Global Access for an Ingress Controller on {{ gcp_short }}](/openshift-docs-markdown/networking/networking_operators/ingress-operator#nw-ingress-controller-configuration-gcp-global-access_configuring-ingress)
