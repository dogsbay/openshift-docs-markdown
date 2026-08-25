---
title: "Installing a cluster on {{ gcp_short }} into an existing VPC"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ gcp_short }} into an existing VPC {id="installing-gcp-vpc"}
{%- set context = "installing-gcp-vpc" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster into an existing Virtual Private Cloud (VPC) on {{ gcp_first }}. The installation program provisions the rest of the required infrastructure, which you can further customize. To customize the installation, you modify parameters in the `install-config.yaml` file before you install the cluster.

## Prerequisites {id="_prerequisites"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [configured a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster.
*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
*   If you manage your {{ gcp_short }} firewall rules, you [configured the required firewall rules](/installing/installing_gcp/installing-gcp-account#installation-gcp-user-managed-firewall-rules_installing-gcp-account).

{% leveloffset +1 %}{% include "./modules/installation-custom-gcp-vpc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ gcp_short }}](/installing/installing_gcp/installation-config-parameters-gcp#installation-config-parameters-gcp)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-gcp-tested-machine-types-arm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-using-gcp-custom-machine-types.md" %}{% endleveloffset %}

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
*   [Enabling customer-managed encryption keys for a compute machine set](/machine_management/creating_machinesets/creating-machineset-gcp#machineset-enabling-customer-managed-encryption_creating-machineset-gcp)

{% leveloffset +2 %}{% include "./modules/nw-gcp-installing-global-access-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

## Alternatives to storing administrator-level secrets in the kube-system project {id="installing-gcp-manual-modes_{{ context }}"}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

*   To manage long-term cloud credentials manually, follow the procedure in [Manually creating long-term credentials](/installing/installing_gcp/installing-gcp-vpc#manually-create-iam_installing-gcp-vpc).
*   To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in [Configuring a {{ gcp_short }} cluster to use short-term credentials](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-with-short-term-creds_installing-gcp-vpc).

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

*   [Additional {{ gcp_first }} configuration parameters](/installing/installing_gcp/installation-config-parameters-gcp#installation-configuration-parameters-additional-gcp_installation-config-parameters-gcp)

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**

*   See [Accessing the web console](/web_console/web-console#web-console) for more details about accessing and understanding the {{ product_title }} web console.

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service

## Next steps {id="_next_steps"}

*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations).
*   If necessary, you can
[Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting).