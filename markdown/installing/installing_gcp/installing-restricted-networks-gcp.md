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

*   You reviewed details about the {{ product_title }} installation and update processes. For more information, see "Installation and update".
*   You read the documentation on selecting a cluster installation method and preparing it for users. For more information, see "Selecting a cluster installation method and preparing it for users".
*   You created a registry on your mirror host and obtained the `imageContentSources` data for your version of {{ product_title }}. For more information, see "Mirroring images for a disconnected installation".

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::

*   If you use a firewall, you configured it to allow the sites that your cluster requires access to. While you might need to grant access to more sites, you must grant access to `*.googleapis.com` and `accounts.google.com`. For more information, see "Configuring your firewall for {{ product_title }}".
*   If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can manually create and maintain long-term credentials. For more information, see "Manually creating long-term credentials".

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Configuring your firewall for {{ product_title }}](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Manually creating long-term credentials](/installing/installing_gcp/installing-gcp-customizations#manually-create-iam_installing-gcp-customizations)

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-user-infra-config-project.md" %}{% endleveloffset %}

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

{% leveloffset +1 %}{% include "./modules/installation-requirements-user-infra.md" %}{% endleveloffset %}

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

*   [Adding the ingress DNS records](/installing/installing_gcp/installing-restricted-networks-gcp#installation-gcp-user-infra-adding-ingress_installing-restricted-networks-gcp)

{% leveloffset +1 %}{% include "./modules/installation-extracting-infraid.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-exporting-common-variables.md" %}{% endleveloffset %}

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

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customizing your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Configuring image streams for the Cluster Samples Operator and the must-gather tool](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Configuring additional trust stores](/openshift_images/image-configuration#images-configuration-cas_image-configuration)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)