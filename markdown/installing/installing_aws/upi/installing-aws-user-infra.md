---
title: Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates {id="installing-aws-user-infra"}
{%- set context = "installing-aws-user-infra" -%}
{%- set platform = "AWS" %}

To deploy {{ product_title }} version {{ product_version }} on Amazon Web Services (AWS) with your own infrastructure, use the `CloudFormation` templates or create resources according to your company’s policies. {._abstract}

One way to create this infrastructure is to use the `CloudFormation` templates. You can change the templates to customize your infrastructure or use the information that they contain to create AWS objects according to your company’s policies.


:::important

The steps for performing a user-provisioned infrastructure installation are an example only. Installing a cluster with your own infrastructure requires knowledge of the cloud provider and the installation process of {{ product_title }}. Several `CloudFormation` templates are available to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

:::


## Prerequisites {id="_prerequisites"}

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You configured an AWS account to host the cluster.

    :::important

    If you have an AWS profile stored on your computer, it must not use a temporary session token that you generated while using a multifactor authentication device. The cluster continues to use your current AWS credentials to create AWS resources for the entire life of the cluster, so you must use key-based, long-term credentials. To generate appropriate keys, see Managing Access Keys for IAM Users in the AWS documentation. You can supply the keys when you run the installation program.
    
    :::

*   You prepared the user-provisioned infrastructure.
*   You downloaded the AWS CLI and installed it on your computer.
*   If you use a firewall, you configured it to allow the sites that your cluster requires access to.

    :::note

    Be sure to also review this site list if you are configuring a proxy.
    
    :::

*   If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can manually create and keep long-term credentials.

**Additional resources**
{._additional-resources}

*   [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Configuring an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account)
*   [Preparing user-provisioned infrastructure](/installing/installing_aws/upi/upi-aws-installation-reqs#upi-aws-installation-reqs)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
*   [Manually creating long-term credentials](/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)
*   [Managing access keys for IAM Users (AWS documentation)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)
*   [Install the AWS CLI using the bundled installer (AWS documentation)](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html)

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-disk-partitioning-upi-templates.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-generate-aws-user-infra-install-config.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuration and credential file settings (AWS documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-extracting-infraid.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-vpc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-vpc.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-dns.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)
*   [AWS Route 53 console](https://console.aws.amazon.com/route53/)
*   [Listing public hosted zones ({{ aws_short }} documentation)](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ListInfoOnHostedZone.html)

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-security.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-security.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

{% leveloffset +1 %}{% include "./modules/installation-aws-ami-stream-metadata.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-rhcos-ami.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-regions-with-no-ami.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-aws-upload-custom-rhcos-ami.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-bootstrap.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)
*   [{{ op_system }} Amazon Machine Images (AMIs) for the AWS infrastructure](/installing/installing_aws/upi/installing-aws-user-infra#installation-aws-user-infra-rhcos-ami_installing-aws-user-infra)

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-control-plane.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-control-plane.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

{% leveloffset +1 %}{% include "./modules/installation-creating-aws-worker.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-cloudformation-worker.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

{% leveloffset +2 %}{% include "./modules/installation-aws-creating-cloudformation-stack-compute.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-bootstrap.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Monitoring installation progress](/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations)
*   [Gathering bootstrap node diagnostic data](/support/troubleshooting/troubleshooting-installations#gathering-bootstrap-diagnostic-data_troubleshooting-installations)
*   [AWS EC2 console](https://console.aws.amazon.com/ec2)

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-operators-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-registry-storage-config.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/registry-configuring-storage-aws-user-infra.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the registry for AWS user-provisioned infrastructure](/registry/configuring_registry_storage/configuring-registry-storage-aws-user-infrastructure#configuring-registry-storage-aws-user-infrastructure)

{% leveloffset +3 %}{% include "./modules/installation-registry-storage-non-production.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-delete-bootstrap.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-create-ingress-dns-records.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-aws-user-infra-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-in-by-using-the-web-console.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Accessing the web console](/web_console/web-console#web-console)

## Additional resources {id="installing-aws-user-infra-additional-resources" ._additional-resources}

*   [Working with stacks ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)
*   [Validating an installation](/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
*   [Customizing your cluster](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Removing cloud provider credentials](/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)

{%- set platform = "" -%}