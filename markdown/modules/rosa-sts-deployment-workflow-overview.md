{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of the {{ product_title }} with STS deployment workflow {id="rosa-sts-overview-of-the-deployment-workflow_{{ context }}"}

The AWS Security Token Service (STS) is a global web service that provides short-term credentials for IAM or federated users. You can use AWS STS with {{ product_title }} to allocate temporary, limited-privilege credentials for component-specific IAM roles. The service enables cluster components to make AWS API calls using secure cloud resource management practices. {._abstract}

You can follow the workflow stages to set up and access a {{ product_title }} cluster that uses STS.

1.  **Complete the AWS prerequisites for {{ product_title }} with STS**. To deploy a {{ product_title }} cluster with STS, your AWS account must meet the prerequisite requirements.
1.  **Review the required AWS service quotas**. To prepare for your cluster deployment, review the AWS service quotas that are required to run a {{ product_title }} cluster.
1.  **Set up the environment and install {{ product_title }} using STS**. Before you create a {{ product_title }} with STS cluster, you must enable {{ product_title }} in your AWS account, install and configure the required CLI tools, and verify the configuration of the CLI tools. You must also verify that the AWS Elastic Load Balancing (ELB) service role exists and that the required AWS resource quotas are available.
1.  **Create a {{ product_title }} cluster with STS quickly or create a cluster using customizations**. Use the {{ rosa_cli }} (`rosa`) or {{ cluster_manager_first }} to create a cluster with STS. You can create a cluster quickly by using the default options, or you can apply customizations to suit the needs of your organization.
1.  **Access your cluster**. You can configure an identity provider and grant cluster administrator privileges to the identity provider users as required. You can also access a newly-deployed cluster quickly by configuring a `cluster-admin` user.
1.  **Revoke access to a {{ product_title }} cluster for a user**. You can revoke access to a {{ product_title }} with STS cluster from a user by using the {{ rosa_cli }} or the web console.
1.  **Delete a {{ product_title }} cluster**. You can delete a {{ product_title }} with STS cluster by using the {{ rosa_cli }} (`rosa`). After deleting a cluster, you can delete the STS resources by using the AWS Identity and Access Management (IAM) Console.