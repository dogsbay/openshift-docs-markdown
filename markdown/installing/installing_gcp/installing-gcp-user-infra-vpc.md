---
title: "Installing a cluster into a shared VPC on {{ gcp_short }} using Infrastructure Manager templates"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster into a shared VPC on {{ gcp_short }} using Infrastructure Manager templates {id="installing-gcp-user-infra-vpc"}
{%- set context = "installing-gcp-user-infra-vpc" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster into a shared Virtual Private Cloud (VPC) on {{ gcp_first }} that uses infrastructure that you provide. In this context, a cluster installed into a shared VPC is a cluster that is configured to use a VPC from a project different from where the cluster is being deployed. {._abstract}

A shared VPC enables an organization to connect resources from multiple projects to a common VPC network. You can communicate within the organization securely and efficiently by using internal IPs from that network. For more information about shared VPC, see [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc) in the {{ gcp_short }} documentation.

The steps for performing a user-provided infrastructure installation into a shared VPC are outlined here. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of {{ product_title }}. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

:::


## Prerequisites {id="_prerequisites"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
*   If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can [manually create and maintain long-term credentials](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations).
*   If you want to provide your own private hosted zone, you must have created one in the service project with the DNS pattern `cluster-name.baseDomain.`, for example `testCluster.example.com.`. The private hosted zone must be bound to the VPC in the host project. For more information about cross-project binding, see [Create a zone with cross-project binding](https://cloud.google.com/dns/docs/zones/cross-project-binding) (Google documentation). If you do not provide a private hosted zone, the installation program will provision one automatically.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::


{% leveloffset +1 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

## Configuring the {{ gcp_short }} project that hosts your cluster {id="installation-gcp-user-infra-config-project-vpc"}

Before you can install {{ product_title }}, you must configure a {{ gcp_full }} project to host it.

{% leveloffset +2 %}{% include "./modules/installation-gcp-project.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-api-services.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-service-account.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-gcp-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-regions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-install-cli.md" %}{% endleveloffset %}

## Requirements for a cluster with user-provisioned infrastructure {id="installation-requirements-user-infra_{{ context }}"}

For a cluster that contains user-provisioned infrastructure, you must deploy all
of the required machines.

This section describes the requirements for deploying {{ product_title }} on user-provisioned infrastructure.

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-using-gcp-custom-machine-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-config-host-project-vpc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-shielded-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-confidential-vms.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-user-infra-shared-vpc-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

## Exporting common variables {id="installation-gcp-user-infra-exporting-common-variables-vpc" ._additional-resources}

{% leveloffset +2 %}{% include "./modules/installation-extracting-infraid.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-exporting-common-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-network-user-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-lb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-ext-lb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-int-lb.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-private-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-private-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-firewall-rules-vpc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-firewall-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-iam-shared-vpc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-rhcos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-control-plane.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-control-plane.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-worker.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-worker.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-wait-for-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-adding-ingress.md" %}{% endleveloffset %}

## Adding ingress firewall rules {id="installation-gcp-user-infra-vpc-adding-firewall-rules"}
The cluster requires several firewall rules. If you do not use a shared VPC, these rules are created by the Ingress Controller via the {{ gcp_short }} cloud provider. When you use a shared VPC, you can either create cluster-wide firewall rules for all services now or create each rule based on events, when the cluster requests access. By creating each rule when the cluster requests access, you know exactly which firewall rules are required. By creating cluster-wide firewall rules, you can apply the same rule set across multiple clusters.

If you choose to create each rule based on events, you must create firewall rules after you provision the cluster and during the life of the cluster when the console notifies you that rules are missing. Events that are similar to the following event are displayed, and you must add the firewall rules that are required:

```terminal
$ oc get events -n openshift-ingress --field-selector="reason=LoadBalancerManualChange"
```

```terminal title="Example output"
Firewall change required by security admin: `gcloud compute firewall-rules create k8s-fw-a26e631036a3f46cba28f8df67266d55 --network example-network --description "{\"kubernetes.io/service-name\":\"openshift-ingress/router-default\", \"kubernetes.io/service-ip\":\"35.237.236.234\"}\" --allow tcp:443,tcp:80 --source-ranges 0.0.0.0/0 --target-tags exampl-fqzq7-master,exampl-fqzq7-worker --project example-project`
```

If you encounter issues when creating these rule-based events, you can configure the cluster-wide firewall rules while your cluster is running.

{% leveloffset +2 %}{% include "./modules/installation-creating-gcp-shared-vpc-cluster-wide-firewall-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-completing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {id="_next_steps" ._additional-resources}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   If necessary, you can
[Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).