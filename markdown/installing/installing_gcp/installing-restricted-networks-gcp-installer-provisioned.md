---
title: "Installing a cluster on {{ gcp_short }} in a disconnected environment"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ gcp_short }} in a disconnected environment {id="installing-restricted-networks-gcp-installer-provisioned"}
{%- set context = "installing-restricted-networks-gcp-installer-provisioned" %}

In {{ product_title }} {{ product_version }}, you can install a cluster on {{ gcp_first }} in a restricted network by creating an internal mirror of the installation release content on an existing Google Virtual Private Cloud (VPC). {._abstract}


:::important

You can install an {{ product_title }} cluster by using mirrored installation release content, but your cluster will require internet access to use the {{ gcp_short }} APIs.

:::


## Prerequisites {id="prerequisites_installing-restricted-networks-gcp-installer-provisioned"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [configured a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster.
*   You [mirrored the images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images) to your registry and obtained the `imageContentSources` data for your version of {{ product_title }}.

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::

*   You have an existing VPC in {{ gcp_short }}. While installing a cluster in a restricted network that uses installer-provisioned infrastructure, you cannot use the installer-provisioned VPC. You must use a user-provisioned VPC that satisfies one of the following requirements:
    *   Contains the mirror registry
    *   Has firewall rules or a peering connection to access the mirror registry hosted elsewhere
*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to. While you might need to grant access to more sites, you must grant access to `*.googleapis.com` and `accounts.google.com`.
*   If you are installing using a [Private Service Connect (PSC) endpoint](https://cloud.google.com/vpc/docs/private-service-connect), you must configure the endpoint in the same Virtual Private Cloud (VPC) where you install the cluster, specified in the `install-config.yaml` file, as described in [Installing a cluster on {{ gcp_short }} into an existing VPC](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc).

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types-arm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-using-gcp-custom-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-shielded-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-confidential-vms.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-managing-dns-solution.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ gcp_first }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for GCP](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/nw-gcp-installing-global-access-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

## Alternatives to storing administrator-level secrets in the kube-system project {id="installing-gcp-manual-modes_{{ context }}" ._additional-resources}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

*   To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/installing/installing_gcp/installing-restricted-networks-gcp-installer-provisioned#manually-create-iam_installing-restricted-networks-gcp-installer-provisioned).
*   To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-restricted-networks-gcp-installer-provisioned#installing-gcp-with-short-term-creds_installing-restricted-networks-gcp-installer-provisioned).

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

### Configuring a {{ gcp_short }} cluster to use short-term credentials {id="installing-gcp-with-short-term-creds_{{ context }}"}

To install a cluster that is configured to use {{ gcp_short }} Workload Identity, you must configure the CCO utility and create the required {{ gcp_short }} resources for your cluster.

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/restricting-sa-impersonation-compute-sa-gcp.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-provisioning-dns-records.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {id="next-steps_installing-restricted-networks-gcp-installer-provisioned" ._additional-resources}

*   [Validate an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation).
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   [Configure image streams](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected) for the Cluster Samples Operator and the `must-gather` tool.
*   Learn how to [use Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks).
*   If the mirror registry that you used to install your cluster has a trusted CA, add it to the cluster by [configuring additional trust stores](/openshift_images/image-configuration#images-configuration-cas_image-configuration).
*   If necessary, you can [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).
*   If necessary, see [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)