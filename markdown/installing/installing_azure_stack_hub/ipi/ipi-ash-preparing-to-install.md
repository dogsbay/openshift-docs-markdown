---
title: Preparing to install a cluster on Azure Stack Hub
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install a cluster on Azure Stack Hub {id="ash-preparing-to-install-ipi"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ash-preparing-to-install-ipi" %}

Prepare to install an {{ product_title }} cluster on Azure Stack Hub by verifying connectivity, configuring your account, generating SSH keys, downloading the installation program, installing the CLI, and setting up cloud credentials.

*   Verifying internet connectivity for your cluster.
*   Configuring an Azure Stack Hub account. See "Configuring an Azure Stack Hub account".
*   Generating an SSH key pair. You can use this key pair to authenticate into the {{ product_title }} cluster’s nodes after it is deployed.
*   Downloading the installation program.
*   Installing the {{ oc_first }}.
*   The Cloud Credential Operator (CCO) only supports your cloud provider in manual mode. As a result, you must manually manage cloud credentials by specifying the identity and access management (IAM) secrets for your cloud provider. See "Manually manage cloud credentials".

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {id="additional-resources_{{ context }}"}

*   [Configuring an Azure Stack Hub account](/installing/installing_azure_stack_hub/installing-azure-stack-hub-account#installing-azure-stack-hub-account)
*   [Manually manage cloud credentials](/installing/installing_azure_stack_hub/ipi/installing-azure-stack-hub-default#manually-create-iam_installing-azure-stack-hub-default)