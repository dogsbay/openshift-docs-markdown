---
title: Installing a cluster on Azure Stack Hub with customizations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on Azure Stack Hub with customizations {id="installing-azure-stack-hub-default"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-azure-stack-hub-default" %}

You can install a cluster on Microsoft Azure Stack Hub with installer-provisioned infrastructure. You must manually configure the `install-config.yaml` file to specify values that are specific to Azure Stack Hub.


:::note

While you can select `azure` when using the installation program to deploy a cluster using installer-provisioned infrastructure, this option is only supported for the Azure Public Cloud.

:::


{% leveloffset +1 %}{% include "./modules/installation-azure-stack-hub-default-ipi-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-azure-user-infra-uploading-rhcos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing-manual.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for Azure Stack Hub](/installing/installing_azure_stack_hub/installation-config-parameters-ash#installation-config-parameters-ash)

{% leveloffset +2 %}{% include "./modules/installation-azure-stack-hub-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/manually-create-identity-access-management.md" %}{% endleveloffset %}

**Additional resources**

*   [Updating cloud provider resources with manually maintained credentials](/updating/preparing_for_updates/preparing-manual-creds-update#manually-maintained-credentials-upgrade_preparing-manual-creds-update)

{% leveloffset +1 %}{% include "./modules/azure-stack-hub-internal-ca.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

## Additional resources {id="additional-resources_{{ context }}"}

*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Customize your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Remove cloud provider credentials](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)