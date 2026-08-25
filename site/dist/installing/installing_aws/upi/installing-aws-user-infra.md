---
title: Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates
---

# Installing a cluster on user-provisioned infrastructure in AWS by using CloudFormation templates {#installing-aws-user-infra}

To deploy OpenShift Container Platform version 4.22 on Amazon Web Services (AWS) with your own infrastructure, use the `CloudFormation` templates or create resources according to your company’s policies.

One way to create this infrastructure is to use the `CloudFormation` templates. You can change the templates to customize your infrastructure or use the information that they contain to create AWS objects according to your company’s policies.

> [!IMPORTANT]
> The steps for performing a user-provisioned infrastructure installation are an example only. Installing a cluster with your own infrastructure requires knowledge of the cloud provider and the installation process of OpenShift Container Platform. Several `CloudFormation` templates are available to assist in completing these steps or to help model your own. You are also free to create the required resources through other methods; the templates are just an example.

## Prerequisites {#_prerequisites}

- You reviewed details about the OpenShift Container Platform installation and update processes.
- You read the documentation on selecting a cluster installation method and preparing it for users.
- You configured an AWS account to host the cluster.

  > [!IMPORTANT]
  > If you have an AWS profile stored on your computer, it must not use a temporary session token that you generated while using a multifactor authentication device. The cluster continues to use your current AWS credentials to create AWS resources for the entire life of the cluster, so you must use key-based, long-term credentials. To generate appropriate keys, see Managing Access Keys for IAM Users in the AWS documentation. You can supply the keys when you run the installation program.
- You prepared the user-provisioned infrastructure.
- You downloaded the AWS CLI and installed it on your computer.
- If you use a firewall, you configured it to allow the sites that your cluster requires access to.

  > [!NOTE]
  > Be sure to also review this site list if you are configuring a proxy.
- If the cloud identity and access management (IAM) APIs are not accessible in your environment, or if you do not want to store an administrator-level credential secret in the `kube-system` namespace, you can manually create and keep long-term credentials.

**Additional resources**

- [OpenShift Container Platform installation and update](/openshift-docs-markdown/architecture/architecture-installation#architecture-installation)
- [Selecting a cluster installation method and preparing it for users](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing)
- [Configuring an AWS account](/openshift-docs-markdown/installing/installing_aws/installing-aws-account#installing-aws-account)
- [Preparing user-provisioned infrastructure](/openshift-docs-markdown/installing/installing_aws/upi/upi-aws-installation-reqs#upi-aws-installation-reqs)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall)
- [Manually creating long-term credentials](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-customizations#manually-create-iam_installing-aws-customizations)
- [Managing access keys for IAM Users (AWS documentation)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)
- [Install the AWS CLI using the bundled installer (AWS documentation)](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html)

**Additional resources**

- [Configuration and credential file settings (AWS documentation)](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

**Additional resources**

- [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

**Additional resources**

- [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)
- [AWS Route 53 console](https://console.aws.amazon.com/route53/)
- [Listing public hosted zones ({{ aws_short }} documentation)](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ListInfoOnHostedZone.html)

**Additional resources**

- [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

**Additional resources**

- [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)
- [{{ op_system }} Amazon Machine Images (AMIs) for the AWS infrastructure](/openshift-docs-markdown/installing/installing_aws/upi/installing-aws-user-infra#installation-aws-user-infra-rhcos-ami_installing-aws-user-infra)

**Additional resources**

- [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

**Additional resources**

- [AWS `CloudFormation` console](https://console.aws.amazon.com/cloudformation/)

**Additional resources**

- [Monitoring installation progress](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#monitoring-installation-progress_troubleshooting-installations)
- [Gathering bootstrap node diagnostic data](/openshift-docs-markdown/support/troubleshooting/troubleshooting-installations#gathering-bootstrap-diagnostic-data_troubleshooting-installations)
- [AWS EC2 console](https://console.aws.amazon.com/ec2)

**Additional resources**

- [Configuring the registry for AWS user-provisioned infrastructure](/openshift-docs-markdown/registry/configuring_registry_storage/configuring-registry-storage-aws-user-infrastructure#configuring-registry-storage-aws-user-infrastructure)

**Additional resources**

- [Accessing the web console](/openshift-docs-markdown/web_console/web-console#web-console)

## Additional resources {#installing-aws-user-infra-additional-resources}

- [Working with stacks ({{ aws_short }} documentation)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)
- [Validating an installation](/openshift-docs-markdown/installing/validation_and_troubleshooting/validating-an-installation#validating-an-installation)
- [Customizing your cluster](/openshift-docs-markdown/post_installation_configuration/cluster-tasks#available_cluster_customizations)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
- [Removing cloud provider credentials](/openshift-docs-markdown/post_installation_configuration/changing-cloud-credentials-configuration#manually-removing-cloud-creds_changing-cloud-credentials-configuration)
