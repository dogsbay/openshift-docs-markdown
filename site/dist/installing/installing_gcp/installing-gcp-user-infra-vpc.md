---
title: Installing a cluster into a shared VPC on {{ gcp_short }} using Infrastructure Manager templates
---

# Installing a cluster into a shared VPC on {{ gcp_short }} using Infrastructure Manager templates {#installing-gcp-user-infra-vpc}

In OpenShift Container Platform version 4.22, you can install a cluster into a shared Virtual Private Cloud (VPC) on {{ gcp_first }} that uses infrastructure that you provide. In this context, a cluster installed into a shared VPC is a cluster that is configured to use a VPC from a project different from where the cluster is being deployed.

A shared VPC enables an organization to connect resources from multiple projects to a common VPC network. You can communicate within the organization securely and efficiently by using internal IPs from that network. For more information about shared VPC, see [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc) in the {{ gcp_short }} documentation.

The steps for performing a user-provided infrastructure installation into a shared VPC are outlined here. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of OpenShift Container Platform. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

## Prerequisites {#_prerequisites}

- You reviewed details about the [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation) processes.
- You read the documentation on [selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing).
- If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
- If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can [manually create and maintain long-term credentials](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations).
- If you want to provide your own private hosted zone, you must have created one in the service project with the DNS pattern `cluster-name.baseDomain.`, for example `testCluster.example.com.`. The private hosted zone must be bound to the VPC in the host project. For more information about cross-project binding, see [Create a zone with cross-project binding](https://cloud.google.com/dns/docs/zones/cross-project-binding) (Google documentation). If you do not provide a private hosted zone, the installation program will provision one automatically.

  > [!NOTE]
  > Be sure to also review this site list if you are configuring a proxy.

## Configuring the {{ gcp_short }} project that hosts your cluster {#installation-gcp-user-infra-config-project-vpc}

Before you can install OpenShift Container Platform, you must configure a {{ gcp_full }} project to host it.

## Requirements for a cluster with user-provisioned infrastructure {#installation-requirements-user-infra_installing-gcp-user-infra-vpc}

For a cluster that contains user-provisioned infrastructure, you must deploy all of the required machines.

This section describes the requirements for deploying OpenShift Container Platform on user-provisioned infrastructure.

**Additional resources**

- [Optimizing storage](/openshift-docs-markdown/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

**Additional resources**

- [Installation configuration parameters for {{ gcp_short }}](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

**Additional resources**

- [Additional {{ gcp_first }} configuration parameters](/openshift-docs-markdown/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

## Exporting common variables {#installation-gcp-user-infra-exporting-common-variables-vpc}

## Adding ingress firewall rules {#installation-gcp-user-infra-vpc-adding-firewall-rules}

The cluster requires several firewall rules. If you do not use a shared VPC, these rules are created by the Ingress Controller via the {{ gcp_short }} cloud provider. When you use a shared VPC, you can either create cluster-wide firewall rules for all services now or create each rule based on events, when the cluster requests access. By creating each rule when the cluster requests access, you know exactly which firewall rules are required. By creating cluster-wide firewall rules, you can apply the same rule set across multiple clusters.

If you choose to create each rule based on events, you must create firewall rules after you provision the cluster and during the life of the cluster when the console notifies you that rules are missing. Events that are similar to the following event are displayed, and you must add the firewall rules that are required:

```terminal
$ oc get events -n openshift-ingress --field-selector="reason=LoadBalancerManualChange"
```

```terminal {title="Example output"}
Firewall change required by security admin: `gcloud compute firewall-rules create k8s-fw-a26e631036a3f46cba28f8df67266d55 --network example-network --description "{\"kubernetes.io/service-name\":\"openshift-ingress/router-default\", \"kubernetes.io/service-ip\":\"35.237.236.234\"}\" --allow tcp:443,tcp:80 --source-ranges 0.0.0.0/0 --target-tags exampl-fqzq7-master,exampl-fqzq7-worker --project example-project`
```

If you encounter issues when creating these rule-based events, you can configure the cluster-wide firewall rules while your cluster is running.

**Additional resources**

- See [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {#_next_steps}

- [Customize your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations).
- If necessary, you can [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
