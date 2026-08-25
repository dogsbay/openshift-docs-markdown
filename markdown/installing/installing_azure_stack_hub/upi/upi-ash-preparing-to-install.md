---
title: Preparing to install a cluster on Azure Stack Hub
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install a cluster on Azure Stack Hub {id="upi-ash-preparing-to-install"}
{%- set context = "upi-ash-preparing-to-install" %}

Prepare to install an {{ product_title }} cluster on Azure Stack Hub by verifying connectivity, configuring your account, generating SSH keys, downloading the installation program, and installing the CLI. {._abstract}

*   Verifying internet connectivity for your cluster.
*   Configuring an Azure Stack Hub account. See the "Configuring an Azure Stack Hub account".
*   Generating an SSH key pair. You can use this key pair to authenticate into the {{ product_title }} cluster’s nodes after it is deployed.
*   Downloading the installation program.
*   Installing the {{ oc_first }}.

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring an Azure Stack Hub account](/installing/installing_azure_stack_hub/installing-azure-stack-hub-account#installing-azure-stack-hub-account)