{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="installation-azure-stack-hub-default-ipi-prerequisites_{{ context }}"}

Before you install a cluster on Azure Stack Hub with customizations, you must complete prerequisites. {._abstract}

The following prerequisites are required:

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You have installed Azure Stack Hub version 2008 or later.
*   You [configured an Azure Stack Hub account](/installing/installing_azure_stack_hub/installing-azure-stack-hub-account#installing-azure-stack-hub-account) to host the cluster.
*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.
*   You verified that you have approximately 16 GB of local disk space. Installing the cluster requires that you download the {{ op_system }} virtual hard drive (VHD) cluster image and upload it to your Azure Stack Hub environment so that it is accessible during deployment. Decompressing the VHD files requires this amount of local disk space.