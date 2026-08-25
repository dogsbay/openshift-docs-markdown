---
title: Troubleshooting installation issues
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting installation issues {id="installing-troubleshooting"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-troubleshooting" %}

To assist in troubleshooting a failed {{ product_title }} installation, you can gather logs from the bootstrap and control plane machines. You can also get debug information from the installation program.

If you are unable to resolve the issue by using the logs and debug information, see "Determining where installation issues occur" in the _Additional resources_ section.


:::note

If your {{ product_title }} installation fails and the debug output or logs contain network timeouts or other connectivity errors, review the guidelines "Configuring your firewall" in the _Additional resources_ section. By gathering logs from your firewall and load balancer, you can diagnose network-related errors.

:::


## Prerequisites {id="_prerequisites"}

*   You attempted to install an {{ product_title }} cluster and the installation failed.

{% leveloffset +1 %}{% include "./modules/installation-bootstrap-gather.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-gathering-logs-with-ssh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-gathering-logs-without-ssh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-getting-debug-information.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restarting-installation.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_installing-troubleshooting"}

*   [Determining where installation issues occur](/support/troubleshooting/troubleshooting-installations#determining-where-installation-issues-occur_troubleshooting-installations)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Installing an {{ product_title }} cluster](/installing/overview/index#ocp-installation-overview)