---
title: Installing a cluster on vSphere using the Agent-based Installer
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on vSphere using the Agent-based Installer {id="installing-vsphere-agent-based-installer"}
{%- set context = "installing-vsphere-agent-based-installer" %}

The Agent-based installation method provides the flexibility to boot your on-premise servers in any way that you choose. It combines the ease of use of the Assisted Installation service with the ability to run offline, including in air-gapped environments. {._abstract}

Agent-based installation is a subcommand of the {{ product_title }} installer. It generates a bootable ISO image containing all of the information required to deploy an {{ product_title }} cluster with an available release image.


:::important

Your vSphere account must include privileges for reading and creating the resources required to install an {{ product_title }} cluster.

:::


## Additional resources {id="_additional_resources" ._additional-resources}

*   [Preparing to install with the Agent-based Installer](/installing/installing_with_agent_based_installer/preparing-to-install-with-agent-based-installer#preparing-to-install-with-agent-based-installer)
*   [vCenter requirements](/installing/installing_vsphere/upi/upi-vsphere-installation-reqs#installation-vsphere-installer-infra-requirements_upi-vsphere-installation-reqs)