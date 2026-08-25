{%- set _mod_docs_content_type = "CONCEPT" %}
# IAM Policies and {{ aws_short }} authentication {id="iam-policies-and-aws-authentication_{{ context }}"}

You can specify your own IAM roles if required. By default, the installation program creates instance profiles for the bootstrap, control plane, and compute instances with the necessary permissions for the cluster to operate. {._abstract}


:::note

To enable pulling images from the Amazon Elastic Container Registry (ECR) as a postinstallation task in a {{ sno }} cluster, you must add the `AmazonEC2ContainerRegistryReadOnly` policy to the IAM role associated with the cluster’s control plane role.

:::


However, you can create your own IAM roles and specify them as part of the installation process. You might need to specify your own roles to deploy the cluster or to manage the cluster after installation. For example:

*   Your organization’s security policies require that you use a more restrictive set of permissions to install the cluster.
*   After the installation, the cluster is configured with an Operator that requires access to additional services.

If you choose to specify your own IAM roles, you can take the following steps:

*   Begin with the default policies and adapt as required. For more information, see "Default permissions for IAM instance profiles".
*   To create a policy template that is based on the cluster’s activity, see "Using {{ aws_short }} IAM Analyzer to create policy templates".