---
title: "Installing a cluster on user-provisioned infrastructure in {{ gcp_short }} by using Infrastructure Manager templates"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on user-provisioned infrastructure in {{ gcp_short }} by using Infrastructure Manager templates {id="installing-gcp-user-infra"}
{%- set context = "installing-gcp-user-infra" -%}
{%- set platform = "{{ gcp_short }}" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on {{ gcp_first }} that uses infrastructure that you provide.

The steps for performing a user-provided infrastructure install are outlined here. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of {{ product_title }}. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

:::


## Prerequisites {id="_prerequisites"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
*   If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can [manually create and maintain long-term credentials](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations).

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::


{% leveloffset +1 %}{% include "./modules/csr-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

## Configuring your {{ gcp_short }} project {id="installation-gcp-user-infra-config-project"}

Before you can install {{ product_title }}, you must configure a {{ gcp_first }} project to host it.

{% leveloffset +2 %}{% include "./modules/installation-gcp-project.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-api-services.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-service-account.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/minimum-required-permissions-upi-gcp.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-gcp-regions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-install-cli.md" %}{% endleveloffset %}

## Requirements for a cluster with user-provisioned infrastructure {id="installation-requirements-user-infra_{{ context }}"}

For a cluster that contains user-provisioned infrastructure, you must deploy all
of the required machines.

This section describes the requirements for deploying {{ product_title }} on user-provisioned infrastructure.

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types-arm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-using-gcp-custom-machine-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-disk-partitioning-upi-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-shielded-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-confidential-vms.md" %}{% endleveloffset %}

**Additional resources**

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

**Additional resources**

*   [Optional: Adding the ingress DNS records](/installing/installing_gcp/installing-gcp-user-infra#installation-gcp-user-infra-adding-ingress_installing-gcp-user-infra)

## Exporting common variables {id="installation-gcp-user-infra-exporting-common-variables"}

{% leveloffset +2 %}{% include "./modules/installation-extracting-infraid.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-exporting-common-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-gcp-vpc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-infrastructure-manager-vpc.md" %}{% endleveloffset %}

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

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-completing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {id="_next_steps"}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   If necessary, you can [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Configuring Global Access for an Ingress Controller on {{ gcp_short }}](/networking/networking_operators/ingress-operator#nw-ingress-controller-configuration-gcp-global-access_configuring-ingress)