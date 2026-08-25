---
title: "Installing a cluster quickly on {{ gcp_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster quickly on {{ gcp_short }} {id="installing-gcp-default"}
{%- set context = "installing-gcp-default" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on {{ gcp_first }} that uses the default configuration options.

## Prerequisites {id="_prerequisites"}

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [configured a {{ gcp_short }} project](/installing/installing_gcp/installing-gcp-account#installing-gcp-account) to host the cluster.
*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
*   If you are installing using a [Private Service Connect (PSC) endpoint](https://cloud.google.com/vpc/docs/private-service-connect), you must configure the endpoint in the same Virtual Private Cloud (VPC) where you install the cluster, specified in the `install-config.yaml` file, as described in [Installing a cluster on {{ gcp_short }} into an existing VPC](/installing/installing_gcp/installing-gcp-vpc#installing-gcp-vpc).

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

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