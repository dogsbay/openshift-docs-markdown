{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing {{ sno }} with the Agent-based Installer {id="install-sno-installing-sno-with-agent-based-installer_{{ context }}"}

You can use the Agent-based Installer to deploy {{ sno }} on bare-metal servers running ARM (`aarch64`) architecture. The Agent-based Installer generates a self-contained bootable ISO image by using the {{ product_title }} installer for offline and automated deployments. {._abstract}

The following procedure describes how to create the required configuration files, generate the agent ISO image, and boot the target ARM server to install {{ sno }}.