---
title: Preparing to install a cluster on Azure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install a cluster on Azure {id="installing-azure-preparing-ipi"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-azure-preparing-ipi" %}

Before you install an {{ product_title }} cluster on {{ azure_short }} with installer-provisioned infrastructure, you must configure your account, obtain the installation program and `oc` CLI, and optionally prepare disk encryption sets.

{% leveloffset +1 %}{% include "./modules/prerequisites-installing-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

{% leveloffset +1 %}{% include "./modules/installation-azure-day2-operations-diskencryptionsets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-preparing-diskencryptionsets.md" %}{% endleveloffset %}

**Additional resources**

*   [Install a cluster with customizations on installer-provisioned infrastructure](/installing/installing_azure/ipi/installing-azure-customizations#installing-azure-customizations)
*   [Install a cluster into an existing VNet on installer-provisioned infrastructure](/installing/installing_azure/ipi/installing-azure-vnet#installing-azure-vnet)
*   [Install a private cluster on installer-provisioned infrastructure](/installing/installing_azure/ipi/installing-azure-private#installing-azure-private)
*   [Install a cluster into an government region on installer-provisioned infrastructure](/installing/installing_azure/ipi/installing-azure-government-region#installing-azure-government-region)