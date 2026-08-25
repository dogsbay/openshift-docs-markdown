---
title: "Installing a cluster on {{ ibm_power_server_title }} with customizations"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ ibm_power_server_title }} with customizations {id="installing-ibm-power-vs-customizations"}
{%- set context = "installing-ibm-power-vs-customizations" %}

To install a customized {{ product_title }} cluster on {{ ibm_power_server_name }}, use installer-provisioned infrastructure and adjust the `install-config.yaml` parameters before you run the installation program.

{% leveloffset +1 %}{% include "./modules/prereqs-ibm-power-vs.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring an {{ ibm_cloud_name }} account](/installing/installing_ibm_powervs/installing-ibm-cloud-account-power-vs#installing-ibm-cloud-account-power-vs)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Configuring the Cloud Credential Operator utility](/installing/installing_ibm_powervs/preparing-to-install-on-ibm-power-vs#cco-ccoctl-configuring_preparing-to-install-on-ibm-power-vs)

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-ibm-cloud-export-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ ibm_power_server_name }}](/installing/installing_ibm_powervs/installation-config-parameters-ibm-power-vs#installation-config-parameters-ibm-power-vs)

{% leveloffset +2 %}{% include "./modules/installation-ibm-power-vs-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-create-iam-ibm-cloud.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

<a name="additional-resources_installing-ibm-power-vs-customizations-console"></a>**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)