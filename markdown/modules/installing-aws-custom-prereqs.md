{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="installing-aws-default-prereqs_{{ context }}"}

Before you install a cluster on Amazon Web Services (AWS) by using installer-provisioned infrastructure with customizations, you must meet several prerequisites. {._abstract}

The following prerequisites must be met:

*   You reviewed details about the [{{ product_title }} installation and update](/architecture/architecture-installation#architecture-installation) processes.
*   You read the documentation on [selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing).
*   You [configured an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account) to host the cluster.

    :::important

    If you have an {{ aws_short }} profile stored on your computer, it must not use a temporary session token that you generated while using a multi-factor authentication device. The cluster continues to use your current {{ aws_short }} credentials to create {{ aws_short }} resources for the entire life of the cluster, so you must use long-term credentials. To generate appropriate keys, see [Managing Access Keys for IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) in the {{ aws_short }} documentation. You can supply the keys when you run the installation program.
    
    :::

*   If you use a firewall, you [configured it to allow the sites](/installing/install_config/configuring-firewall#configuring-firewall-module_configuring-firewall) that your cluster requires access to.