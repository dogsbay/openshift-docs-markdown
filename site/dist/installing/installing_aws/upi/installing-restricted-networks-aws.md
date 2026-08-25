---
title: Installing a cluster on {{ aws_short }} in a disconnected environment with user-provisioned infrastructure
---

# Installing a cluster on {{ aws_short }} in a disconnected environment with user-provisioned infrastructure {#installing-restricted-networks-aws}

In OpenShift Container Platform version 4.22, you can install a cluster on {{ aws_first }} using infrastructure that you provide and an internal mirror of the installation release content.

> [!IMPORTANT]
> While you can install an OpenShift Container Platform cluster by using mirrored installation release content, your cluster still requires internet access to use the {{ aws_short }} APIs.

One way to create this infrastructure is to use the provided CloudFormation templates. You can modify the templates to customize your infrastructure or use the information that they contain to create {{ aws_short }} objects according to your company’s policies.

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are provided as an example only. Installing a cluster with infrastructure you provide requires knowledge of the cloud provider and the installation process of OpenShift Container Platform. Several CloudFormation templates are provided to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

**Additional resources**

- [Installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Mirroring images for a disconnected installation](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
- [Configuring an {{ aws_short }} account](/openshift-docs-markdown/installing/installing_aws/installing-aws-account#installing-aws-account)
- [Managing access keys for IAM users ({{ aws_short }} documentation)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)
- [Requirements for a cluster with user-provisioned infrastructure on {{ aws_short }}](/openshift-docs-markdown/installing/installing_aws/upi/upi-aws-installation-reqs#upi-aws-installation-reqs)
- [Install the {{ aws_short }} CLI Using the Bundled Installer (Linux, macOS, or UNIX) ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall)
- [Manually creating long-term credentials](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)

**Additional resources**

- [Configuration and credential file settings ({{ aws_short }} documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

**Additional resources**

- [Manually creating long-term credentials](/openshift-docs-markdown/installing/installing_aws/ipi/installing-restricted-networks-aws-installer-provisioned#manually-create-iam_installing-restricted-networks-aws-installer-provisioned)

**Additional resources**

- [Listing public hosted zones({{ aws_short }} documentation)](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ListInfoOnHostedZone.html)

**Additional resources**

- [{{ op_system }} AMIs for the {{ aws_short }} infrastructure ({{ aws_short }} documentation)](/openshift-docs-markdown/installing/installing_aws/upi/installing-aws-user-infra#installation-aws-user-infra-rhcos-ami_installing-aws-user-infra)

**Additional resources**

- [Monitoring installation progress](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations)
- [Gathering bootstrap node diagnostic data](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#gathering-bootstrap-diagnostic-data_troubleshooting-installations)

**Additional resources**

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)
- [About remote health monitoring](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)
- [Managing {{ aws_short }} resources as a single unit with CloudFormation stacks ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)
- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Customizing your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Configuring image streams](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#post-install-must-gather-disconnected)
- [Using Operator Lifecycle Manager in disconnected environments](/openshift-docs-markdown/disconnected/using-olm#olm-restricted-networks)
- [Image configuration resources](/openshift-docs-markdown/openshift_images/image-configuration#images-configuration-cas_image-configuration)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Changing the cloud provider credentials configuration](/openshift-docs-markdown/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)
