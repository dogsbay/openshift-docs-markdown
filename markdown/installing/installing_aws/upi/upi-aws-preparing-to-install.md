---
title: Preparing to install a cluster on AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Preparing to install a cluster on AWS {id="upi-aws-preparing-to-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "upi-aws-preparing-to-install" %}

You prepare to install an {{ product_title }} cluster on AWS by completing the following steps:

*   Verifying internet connectivity for your cluster.
*   [Configuring an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account).
*   Downloading the installation program.

    :::note

    If you are installing in a disconnected environment, you extract the installation program from the mirrored content. For more information, see [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images).
    
    :::

*   Installing the {{ oc_first }}.

    :::note

    If you are installing in a disconnected environment, install `oc` to the mirror host.
    
    :::

*   Generating an SSH key pair. You can use this key pair to authenticate into the {{ product_title }} cluster’s nodes after it is deployed.
*   [Preparing the user-provisioned infrastructure.](/installing/installing_aws/upi/upi-aws-installation-reqs#upi-aws-installation-reqs)
*   If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, [manually creating long-term credentials for AWS](/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations) or [configuring an AWS cluster to use short-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-with-short-term-creds_installing-aws-customizations) with Amazon Web Services Security Token Service (AWS STS).

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   See [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring) for more information about the Telemetry service.