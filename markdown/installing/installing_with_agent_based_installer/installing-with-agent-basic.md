---
title: Installing a cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster {id="installing-with-agent-basic"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-with-agent-basic" %}

You can install a basic {{ product_title }} cluster using the Agent-based Installer.

The following procedures deploy a single-node {{ product_title }} in a disconnected environment. You can use these procedures as a basis and modify according to your requirements.

For procedures that include optional customizations you can make while using the Agent-based Installer, see "Installing a cluster with customizations".

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Port requirements for the rendezvous host](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#agent-install-networking-ports_preparing-to-install-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-download.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-basic-inputs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-boot.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-tui.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-verify.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installing-ocp-agent-gather-log.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Installing a cluster with customizations](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)