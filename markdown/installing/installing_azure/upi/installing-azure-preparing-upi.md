---
title: Preparing to install a cluster on Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install a cluster on Azure {id="installing-azure-preparing-upi"}
{%- set context = "installing-azure-preparing-upi" %}

To prepare for installation of an {{ product_title }} cluster on {{ azure_short }}, complete the following steps:

*   You have [selected a cluster installation method](/installing/overview/installing-preparing#installing-preparing).
*   You [configured an Azure account](/installing/installing_azure/installing-azure-account#installing-azure-account) to host the cluster and determined the tested and validated region to deploy the cluster to.
*   If you use a firewall, you have [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   For more information about the Telemetry service, see [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring).