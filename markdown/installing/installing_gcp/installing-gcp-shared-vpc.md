---
title: "Installing a cluster on {{ gcp_short }} into a shared VPC"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ gcp_short }} into a shared VPC {id="installing-gcp-shared-vpc"}
{%- set context = "installing-gcp-shared-vpc" -%}
{%- set FeatureName = "Installing a cluster on {{ gcp_short }} into a shared VPC" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster into a shared Virtual Private Cloud (VPC) on {{ gcp_first }}. In this installation method, the cluster is configured to use a VPC from a different {{ gcp_short }} project. A shared VPC enables an organization to connect resources from multiple projects to a common VPC network. You can communicate within the organization securely and efficiently by using internal IP addresses from that network. For more information about shared VPC, see [Shared VPC overview in the {{ gcp_short }} documentation](https://cloud.google.com/vpc/docs/shared-vpc).

The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, change parameters in the `install-config.yaml` file before you install the cluster.

## Prerequisites {id="installation-gcp-shared-vpc-prerequisites_{{ context }}"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
*   You [configured a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster. This project, known as the service project, must be attached to the host project. For more information, see [Attaching service projects in the {{ gcp_short }} documentation](https://cloud.google.com/vpc/docs/provisioning-shared-vpc#create-shared).
*   You have a {{ gcp_short }} host project that contains a shared VPC network and that has a configured Cloud Router and Cloud NAT gateway, to ensure that internet access from the VPC is available. For more information, see [Cloud Router overview](https://cloud.google.com/network-connectivity/docs/router/concepts/overview) and  [Cloud NAT overview](https://cloud.google.com/nat/docs/overview) (Google documentation).
*   You have a {{ gcp_short }} service account that has the [required {{ gcp_short }} permissions](/installing/installing_gcp/installing-gcp-account#minimum-required-permissions-ipi-gcp-xpn_installing-gcp-account) in both the host and service projects.
*   If you want to provide your own private hosted zone, you must have created one in the service project with the DNS pattern `cluster-name.baseDomain.`, for example `testCluster.example.com.`. The private hosted zone must be bound to the VPC in the host project. For more information about cross-project binding, see [Create a zone with cross-project binding](https://cloud.google.com/dns/docs/zones/cross-project-binding) (Google documentation). If you do not provide a private hosted zone, the installation program will provision one automatically.
*   If you manage your {{ gcp_short }} firewall rules, you [configured the required firewall rules](/installing/installing_gcp/installing-gcp-account#installation-gcp-user-managed-firewall-rules_installing-gcp-account).

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-shielded-vms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-enabling-confidential-vms.md" %}{% endleveloffset %}

**Additional resources**

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-managing-dns-solution.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ gcp_first }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-gcp-config-yaml-simple.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for GCP](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

## Alternatives to storing administrator-level secrets in the kube-system project {id="installing-gcp-manual-modes_{{ context }}"}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

*   To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/installing/installing_gcp/installing-gcp-shared-vpc#manually-create-iam_installing-gcp-shared-vpc).
*   To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-gcp-shared-vpc#installing-gcp-with-short-term-creds_installing-gcp-shared-vpc).

{% leveloffset +2 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

### Configuring a {{ gcp_short }} cluster to use short-term credentials {id="installing-gcp-with-short-term-creds_{{ context }}"}

To install a cluster that is configured to use {{ gcp_short }} Workload Identity, you must configure the Cloud Credential Operator (CCO) utility and create the required {{ gcp_short }} resources for your cluster.


:::important

When installing a cluster on a shared Virtual Private Cloud (VPC) by using short-lived credentials, you must grant the `compute.subnetworks.use` permission in the host project to Day 2 Operator service accounts. 

After using the `ccoctl` utility to generate the {{ gcp_short }} credentials, manually grant this permission to the {{ cluster_capi_operator }} and Machine API Operator service accounts.

:::


{% leveloffset +3 %}{% include "./modules/cco-ccoctl-configuring.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-creating-at-once.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/restricting-sa-impersonation-compute-sa-gcp.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/cco-ccoctl-install-creating-manifests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-gcp-provisioning-dns-records.md" %}{% endleveloffset %}

**Additional resources**

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**

*   See [Accessing the web console](/web_console/web-console#web-console) for more details about accessing and understanding the {{ product_title }} web console.

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {id="installation-gcp-shared-vpc-next-steps_{{ context }}"}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   If necessary, you can
[Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).