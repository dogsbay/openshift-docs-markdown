{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="installation-azure-stack-hub-user-infra-prerequisites_{{ context }}"}

Before you install a cluster on Azure Stack Hub by using Azure Resource Manager (ARM) templates, you must complete prerequisites. {._abstract}

The following prerequisites are required:

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You have installed Azure Stack Hub version 2008 or later.
*   You [configured an Azure Stack Hub account](/installing/installing_azure_stack_hub/installing-azure-stack-hub-account#installing-azure-stack-hub-account) to host the cluster.
*   You downloaded the Azure CLI and installed it on your computer. See [Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) in the Azure documentation. The documentation below was tested using version `2.28.0` of the Azure CLI. Azure CLI commands might perform differently based on the version you use.
*   If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::