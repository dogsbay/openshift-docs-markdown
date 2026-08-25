{% if context == "prepare-pxe-assets-agent" %}
{%- set pxe_boot = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" -%}

{% if not pxe_boot %}
# Prerequisites for installing a cluster with the Agent-based Installer {id="prerequisites_{{ context }}"}

Before beginning your cluster installation, you must complete prerequisite tasks that prepare your environment. {._abstract}

*   You reviewed details about the {{ product_title }} installation and update processes. For more information, see "Installation and update".
*   You read "Selecting a cluster installation method and preparing it for users".
*   If you use a firewall or proxy, you configured it to allow the sites that your cluster requires access to. For more information, see "Configuring your firewall".
*   You configured your firewall to allow TCP traffic on port `8090` from all hosts to the rendezvous host so that hosts can reach the Assisted Service API during discovery and bootstrap. For more information, see "Port requirements for the rendezvous host".

{% endif %}

{% if pxe_boot %}
# Prerequisites for preparing PXE assets {id="prerequisites_{{ context }}"}

Before beginning to prepare PXE assets, you must complete prerequisite tasks. {._abstract}

*   You reviewed details about the {{ product_title }} installation and update processes. For more information, see "Installation and update".
{% endif %}

{% if context == "prepare-pxe-assets-agent" %}
{%- set pxe_boot = false -%}
{% endif %}