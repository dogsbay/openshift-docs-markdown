---
title: Installing the Network Observability CLI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the Network Observability CLI {id="netobserv-cli-install"}
{%- set context = "netobserv-cli-install" %}

The Network Observability CLI (oc netobserv) is a standalone {{ oc_first }} plugin used to debug and troubleshoot cluster network traffic. It operates independently of the Network Observability Operator to gather immediate network performance diagnostics. {._abstract}

{% leveloffset +1 %}{% include "./modules/network-observability-netobserv-cli-about.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/network-observability-netobserv-cli-install.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing and using CLI plugins](/cli_reference/openshift_cli/extending-cli-plugins#cli-installing-plugins_cli-extend-plugins)
*   [Installing the {{ cli_manager }}](/cli_reference/cli_manager/cli-manager-install#installing-cli-manager)