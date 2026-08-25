---
title: "Installing a cluster on {{ ibm_power_server_title }} into an existing VPC"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ ibm_power_server_title }} into an existing VPC {id="installing-ibm-powervs-vpc"}
{%- set context = "installing-ibm-powervs-vpc" %}

To install a {{ product_title }} cluster on {{ ibm_power_server_name }} into an existing Virtual Private Cloud (VPC), use installer-provisioned infrastructure. The installation program provisions the remaining required infrastructure, which you can then customize. {._abstract}

{% leveloffset +1 %}{% include "./modules/prereqs-ibm-power-vs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring an {{ ibm_cloud_name }} account](/installing/installing_ibm_powervs/installing-ibm-cloud-account-power-vs#installing-ibm-cloud-account-power-vs)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Configuring the Cloud Credential Operator utility](/installing/installing_ibm_powervs/preparing-to-install-on-ibm-power-vs#cco-ccoctl-configuring_preparing-to-install-on-ibm-power-vs)

{% leveloffset +1 %}{% include "./modules/installation-custom-ibm-power-vs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-export-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for {{ ibm_power_server_name }}](/installing/installing_ibm_powervs/installation-config-parameters-ibm-power-vs#installation-config-parameters-ibm-power-vs)

{% leveloffset +2 %}{% include "./modules/installation-minimum-resource-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)

{% leveloffset +2 %}{% include "./modules/installation-ibm-power-vs-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-create-iam-ibm-cloud.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

<a name="additional-resources_installing-ibm-powervs-vpc-console"></a>**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)