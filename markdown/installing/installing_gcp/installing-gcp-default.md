---
title: "Installing a cluster quickly on {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster quickly on {{ gcp_short }} {id="installing-gcp-default"}
{%- set context = "installing-gcp-default" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on {{ gcp_first }} that uses the default configuration options. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You reviewed details about the {{ product_title }} installation and update processes. For more information, see "Installation and update".
*   You read the documentation on selecting a cluster installation method and preparing it for users. For more information, see "Selecting a cluster installation method and preparing it for users".
*   You configured a {{ gcp_short }} project to host the cluster. For more information, see "Configuring a {{ gcp_short }} project".
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to. For more information, see "Configuring your firewall for {{ product_title }}".
*   If you are installing by using a Private Service Connect (PSC) endpoint, you must configure the endpoint in the same VPC where you install the cluster, as specified in the `install-config.yaml` file. For more information, see "Installing a cluster on {{ gcp_short }} into an existing VPC".

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account)
*   [Configuring your firewall for {{ product_title }}](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Private Service Connect](https://cloud.google.com/vpc/docs/private-service-connect)
*   [Installing a cluster on {{ gcp_short }} into an existing VPC](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc)

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Customizing your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)