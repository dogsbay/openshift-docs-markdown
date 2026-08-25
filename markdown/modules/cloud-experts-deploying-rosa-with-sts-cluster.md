{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a {{ product_title }} STS cluster {id="cloud-experts-deploying-rosa-with-sts-cluster_{{ context }}"}

You are not expected to create the resources listed in the below steps from scratch. The {{ product_title }} CLI creates the required JSON files for you and outputs the commands you need. The {{ product_title }} CLI can also take this a step further and run the commands for you, if desired. {._abstract}

**Procedure**

1.  Steps to deploy a {{ product_title }} with STS cluster
1.  Create the account-wide roles and policies.
1.  Assign the permissions policy to the corresponding account-wide role.
1.  Create the cluster.
1.  Create the Operator roles and policies.
1.  Assign the permission policy to the corresponding Operator role.
1.  Create the OIDC provider.

    The roles and policies can be created automatically by the {{ product_title }} CLI, or they can be manually created by utilizing the `--mode manual` or `--mode auto` flags in the {{ rosa_cli }}.
1.  Scaling the cluster: The `machine-api-operator` uses [AssumeRoleWithWebIdentity](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html) to assume the `machine-api-aws-cloud-credentials` role. This launches the sequence for the cluster Operators to receive the credentials. The `machine-api-operator` role can now make the relevant API calls to add more EC2 instances to the cluster.