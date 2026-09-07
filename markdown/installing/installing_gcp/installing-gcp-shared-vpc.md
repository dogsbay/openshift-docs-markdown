---
title: "Installing a cluster on {{ gcp_short }} into a shared VPC"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ gcp_short }} into a shared VPC {id="installing-gcp-shared-vpc"}
{%- set context = "installing-gcp-shared-vpc" -%}
{%- set FeatureName = "Installing a cluster on {{ gcp_short }} into a shared VPC" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster into a shared Virtual Private Cloud (VPC) on {{ gcp_first }}. In this installation method, the cluster is configured to use a VPC from a different {{ gcp_short }} project. A shared VPC enables an organization to connect resources from multiple projects to a common VPC network. You can communicate within the organization securely and efficiently by using internal IP addresses from that network. {._abstract}

The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, change parameters in the `install-config.yaml` file before you install the cluster.

**Additional resources**
{._additional-resources}

*   [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc)

## Prerequisites {id="installation-gcp-shared-vpc-prerequisites_{{ context }}" ._additional-resources}

*   You reviewed details about the {{ product_title }} installation and update processes. For more information, see "Installation and update".
*   You read the documentation on selecting a cluster installation method and preparing it for users. For more information, see "Selecting a cluster installation method and preparing it for users".
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to. For more information, see "Configuring your firewall for {{ product_title }}".
*   You configured a {{ gcp_short }} project to host the cluster. This project, known as the service project, must be attached to the host project. For more information, see "Configuring a {{ gcp_short }} project".
*   You have a {{ gcp_short }} host project that contains a shared VPC network and that has a configured Cloud Router and Cloud NAT gateway, to ensure that internet access from the VPC is available.
*   You have a {{ gcp_short }} service account that has the required {{ gcp_short }} permissions in both the host and service projects. For more information, see "Required {{ gcp_short }} permissions for shared VPC installations".
*   If you want to provide your own private hosted zone, you must have created one in the service project with the DNS pattern `cluster-name.baseDomain.`, for example `testCluster.example.com.`. The private hosted zone must be bound to the VPC in the host project. If you do not provide a private hosted zone, the installation program provisions one automatically.
*   If you manage your {{ gcp_short }} firewall rules, you configured the required firewall rules. For more information, see "Managing your own firewall rules".

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring your firewall for {{ product_title }}](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Configuring a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account)
*   [Attaching service projects](https://cloud.google.com/vpc/docs/provisioning-shared-vpc#create-shared)
*   [Cloud Router overview](https://cloud.google.com/network-connectivity/docs/router/concepts/overview)
*   [Cloud NAT overview](https://cloud.google.com/nat/docs/overview)
*   [Required {{ gcp_short }} permissions for shared VPC installations](/installing/installing_gcp/installing-gcp-account#minimum-required-permissions-ipi-gcp-xpn_installing-gcp-account)
*   [Create a zone with cross-project binding](https://cloud.google.com/dns/docs/zones/cross-project-binding)
*   [Managing your own firewall rules](/installing/installing_gcp/installing-gcp-account#installation-gcp-user-managed-firewall-rules_installing-gcp-account)

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

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

{% leveloffset +2 %}{% include "./modules/installation-gcp-managing-dns-solution.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ gcp_first }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for GCP](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-gcp-manual-modes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-gcp-short-term-creds.md" %}{% endleveloffset %}

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

**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customizing your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)