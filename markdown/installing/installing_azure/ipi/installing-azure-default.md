---
title: "Installing a cluster on {{ azure_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ azure_short }} {id="installing-azure-default"}
{%- set context = "installing-azure-default" %}

You can install an {{ product_title }} cluster on {{ azure_first }} by using the default configuration options. The installation program provisions the required infrastructure. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)