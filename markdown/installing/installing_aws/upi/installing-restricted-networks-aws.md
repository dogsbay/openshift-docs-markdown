---
title: "Installing a cluster on {{ aws_short }} in a disconnected environment with user-provisioned infrastructure"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on {{ aws_short }} in a disconnected environment with user-provisioned infrastructure {id="installing-restricted-networks-aws"}
{%- set context = "installing-restricted-networks-aws" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on {{ aws_first }} using infrastructure that you provide and
an internal mirror of the installation release content. {._abstract}


:::important

While you can install an {{ product_title }} cluster by using mirrored installation release content, your cluster still requires internet access to use the {{ aws_short }} APIs.

:::


One way to create this infrastructure is to use the provided CloudFormation templates. You can modify the templates to customize your
infrastructure or use the information that they contain to create {{ aws_short }} objects according to your company’s policies.


:::important

The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of {{ product_title }}. Several CloudFormation templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

:::


{% leveloffset +1 %}{% include "./modules/installing-aws-upi-restricted-prereqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Configuring an {{ aws_short }} account](/installing/installing_aws/installing-aws-account#installing-aws-account)
*   [Managing access keys for IAM users ({{ aws_short }} documentation)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)
*   [Requirements for a cluster with user-provisioned infrastructure on {{ aws_short }}](/installing/installing_aws/upi/upi-aws-installation-reqs#upi-aws-installation-reqs)
*   [Install the {{ aws_short }} CLI Using the Bundled Installer (Linux, macOS, or UNIX) ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall)
*   [Manually creating long-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-disk-partitioning-upi-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-generate-aws-user-infra-install-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuration and credential file settings ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Manually creating long-term credentials](/installing/installing_aws/ipi/installing-restricted-networks-aws-installer-provisioned#manually-create-iam_installing-restricted-networks-aws-installer-provisioned)

{% leveloffset +1 %}{% include "./modules/installation-extracting-infraid.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-vpc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-vpc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-dns.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Listing public hosted zones({{ aws_short }} documentation)](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ListInfoOnHostedZone.html)

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-security.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-ami-stream-metadata.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-rhcos-ami.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-bootstrap.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ op_system }} AMIs for the {{ aws_short }} infrastructure ({{ aws_short }} documentation)](/installing/installing_aws/upi/installing-aws-user-infra#installation-aws-user-infra-rhcos-ami_installing-aws-user-infra)

{% leveloffset +2 %}{% include "./modules/installation-creating-aws-control-plane.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-control-plane.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-worker.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-worker.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-creating-cloudformation-stack-compute.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-bootstrap.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Monitoring installation progress](/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations)
*   [Gathering bootstrap node diagnostic data](/support/troubleshooting/troubleshooting-installations#gathering-bootstrap-diagnostic-data_troubleshooting-installations)

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/registry-configuring-storage-aws-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-delete-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-create-ingress-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)
*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
*   [Managing {{ aws_short }} resources as a single unit with CloudFormation stacks ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)
*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Customizing your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Configuring image streams](/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Image configuration resources](/openshift_images/image-configuration#images-configuration-cas_image-configuration)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Changing the cloud provider credentials configuration](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)