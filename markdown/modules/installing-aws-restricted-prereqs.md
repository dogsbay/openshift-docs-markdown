{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="prerequisites_installing-restricted-networks-aws-installer-provisioned"}

Before you install a cluster on Amazon Web Services (AWS) in a restricted network by using installer-provisioned infrastructure, you must meet several prerequisites. {._abstract}

The following prerequisites must be met:

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [mirrored the images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installation-about-mirror-registry_installing-mirroring-installation-images) to your registry and obtained the `imageContentSources` data for your version of {{ product_title }}.

    :::important

    Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
    
    :::

*   You have an existing VPC in AWS. When installing to a restricted network using installer-provisioned infrastructure, you cannot use the installer-provisioned VPC. You must use a user-provisioned VPC that satisfies one of the following requirements:
    *   Contains the mirror registry
    *   Has firewall rules or a peering connection to access the mirror registry hosted elsewhere
*   You [configured an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account) to host the cluster.

    :::important

    If you have an AWS profile stored on your computer, it must not use a temporary session token that you generated while using a multi-factor authentication device. The cluster continues to use your current AWS credentials to create AWS resources for the entire life of the cluster, so you must use key-based, long-term credentials. To generate appropriate keys, see [Managing Access Keys for IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) in the AWS documentation. You can supply the keys when you run the installation program.
    
    :::

*   You downloaded the AWS CLI and installed it on your computer. See [Install the AWS CLI Using the Bundled Installer (Linux, macOS, or UNIX)](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html) in the AWS documentation.
*   If you use a firewall and plan to use the Telemetry service, you [configured the firewall to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.

    :::note

    If you are configuring a proxy, be sure to also review this site list.
    
    :::