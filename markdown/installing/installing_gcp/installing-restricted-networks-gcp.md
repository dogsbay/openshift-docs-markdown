---
title: "Installing a cluster on {{ gcp_short }} in a disconnected environment with user-provisioned infrastructure"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ gcp_short }} in a disconnected environment with user-provisioned infrastructure {id="installing-restricted-networks-gcp"}
{%- set context = "installing-restricted-networks-gcp" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on {{ gcp_first }} that uses infrastructure that you provide and an internal mirror of the installation release content. {._abstract}


:::important

While you can install an {{ product_title }} cluster by using mirrored installation release content, your cluster still requires internet access to use the {{ gcp_short }} APIs.

:::


The steps for performing a user-provided infrastructure install are outlined here. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods.


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of {{ product_title }}. Several Infrastructure Manager templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

:::


## Prerequisites {id="_prerequisites"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [created a registry on your mirror host](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images) and obtained the `imageContentSources` data for your version of {{ product_title }}.

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::

*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to. While you might need to grant access to more sites, you must grant access to `*.googleapis.com` and `accounts.google.com`.
*   If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can [manually create and maintain long-term credentials](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations).

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

## Configuring your {{ gcp_short }} project {id="installation-restricted-networks-gcp-user-infra-config-project"}

Before you can install {{ product_title }}, you must configure a {{ gcp_first }} project to host it.

{% leveloffset +2 %}{% include "./modules/installation-gcp-project.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-api-services.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-limits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-service-account.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-permissions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/minimum-required-permissions-upi-gcp.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-gcp-regions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-install-cli.md" %}{% endleveloffset %}

## Requirements for a cluster with user-provisioned infrastructure {id="installation-requirements-user-infra_{{ context }}" ._additional-resources}

For a cluster that contains user-provisioned infrastructure, you must deploy all
of the required machines.

This section describes the requirements for deploying {{ product_title }} on user-provisioned infrastructure.

{% leveloffset +2 %}{% include "./modules/installation-machine-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-using-gcp-custom-machine-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-disk-partitioning-upi-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-shielded-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-confidential-vms.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optional: Adding the ingress DNS records](/installing/installing_gcp/installing-gcp-user-infra#installation-gcp-user-infra-adding-ingress_installing-gcp-user-infra)

## Exporting common variables {id="installation-restricted-networks-gcp-user-infra-exporting-common-variables" ._additional-resources}

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

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-adding-ingress.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-completing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {id="_next_steps" ._additional-resources}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   [Configure image streams](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected) for the Cluster Samples Operator and the `must-gather` tool.
*   Learn how to [Use Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks).
*   If the mirror registry that you used to install your cluster has a trusted CA, add it to the cluster by [configuring additional trust stores](/openshift_images/image-configuration#images-configuration-cas_image-configuration).
*   If necessary, you can [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
*   If necessary, see [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)