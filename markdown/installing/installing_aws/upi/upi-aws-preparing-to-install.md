---
title: Preparing to install a cluster on AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install a cluster on AWS {id="upi-aws-preparing-to-install"}
{%- set context = "upi-aws-preparing-to-install" %}

To install an {{ product_title }} cluster on {{ aws_first }}, you must complete several tasks in order to prepare your environment. {._abstract}

You prepare to install an {{ product_title }} cluster on AWS by completing the following steps:

*   Verifying internet connectivity for your cluster.
*   Configuring an {{ aws_short }} account. For more information, see "Configuring an {{ aws_short }} account".
*   Downloading the installation program.

    :::note

    If you are installing in a disconnected environment, you extract the installation program from the mirrored content. For more information, see "Mirroring images for a disconnected installation".
    
    :::

*   Installing the {{ oc_first }}.

    :::note

    If you are installing in a disconnected environment, install `oc` to the mirror host.
    
    :::

*   Generating an SSH key pair. You can use this key pair to authenticate into the {{ product_title }} cluster’s nodes after it is deployed.
*   Preparing the user-provisioned infrastructure. For more information, see "Installation requirements for user-provisioned infrastructure on AWS".
*   If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, manually creating long-term credentials for {{ aws_short }} or configuring an {{ aws_short }} cluster to use short-term credentials with ({{ aws_short }} STS).
For more information, see "Manually creating long-term credentials" and "Configuring an {{ aws_short }} cluster to use short-term credentials".

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-linux.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-windows.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-installing-cli-macos.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account)
*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Installation requirements for user-provisioned infrastructure on AWS](/installing/installing_aws/upi/upi-aws-installation-reqs#upi-aws-installation-reqs)
*   [Manually creating long-term credentials for AWS](/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)
*   [Configuring an {{ aws_short }} cluster to use short-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-with-short-term-creds_installing-aws-customizations)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)