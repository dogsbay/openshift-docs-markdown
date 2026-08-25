{%- set _mod_docs_content_type = "REFERENCE" %}
# Infrastructure prerequisites {id="aws-zones-prerequisites_{{ context }}"}

Before you install an {{ product_title }} cluster on Amazon Web Services (AWS) {{ zone_type }}, you must meet several prerequisites. {._abstract}

The following prerequisites must be met:

*   You reviewed details about [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You are familiar with [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [configured an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account) to host the cluster.

    :::warning

    If you have an AWS profile stored on your computer, it must not use a temporary session token that you generated while using a multifactor authentication device. The cluster continues to use your current AWS credentials to create AWS resources for the entire life of the cluster, so you must use key-based, long-term credentials. To generate appropriate keys, see [Managing Access Keys for IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) in the AWS documentation. You can supply the keys when you run the installation program.
    
    :::

*   You downloaded the AWS CLI and installed it on your computer. See [Install the AWS CLI Using the Bundled Installer (Linux, macOS, or UNIX)](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html) in the AWS documentation.
*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster must access.
*   You noted the region and supported [AWS Local Zones locations](https://aws.amazon.com/about-aws/global-infrastructure/localzones/locations) to create the network resources in.
*   You read the [AWS Local Zones features](https://aws.amazon.com/about-aws/global-infrastructure/localzones/features/) in the AWS documentation.
*   You added permissions for creating network resources that support AWS Local Zones to the Identity and Access Management (IAM) user or role. The following example enables a zone group that can give a user or role access for creating network resources that support AWS {{ zone_type }}.
    ```yaml title="Example of an additional IAM policy with the ec2:ModifyAvailabilityZoneGroup permission attached to an IAM user or role."
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Action": [
            "ec2:ModifyAvailabilityZoneGroup"
          ],
          "Effect": "Allow",
          "Resource": "*"
        }
      ]
    }
    ```