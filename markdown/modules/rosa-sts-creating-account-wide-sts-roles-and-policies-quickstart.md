{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the account-wide STS roles and policies {id="rosa-sts-creating-account-wide-sts-roles-and-policies_{{ context }}"}

Before using the {{ hybrid_console }} to create {{ product_title }} clusters that use the AWS Security Token Service (STS), create the required account-wide STS roles and policies, including the Operator policies. {._abstract}

**Procedure**

1.  If they do not exist in your AWS account, create the required account-wide AWS IAM STS roles and policies:
    ```terminal
    $ rosa create account-roles
    ```

    Select the default values at the prompts to quickly create the roles and policies.

**Verification**

*   Verify that the account roles were created:
    ```terminal
    $ rosa list account-roles
    ```

**Additional resources**
{._additional-resources}

*   [About IAM resources for ROSA clusters that use STS](https://docs.openshift.com/rosa/rosa_architecture/rosa-sts-about-iam-resources.html)
*   [AWS prerequisites for ROSA with STS](https://docs.openshift.com/rosa/rosa_install_access_delete_clusters/rosa-sts-aws-prereqs.html)
*   [IAM policies and permissions in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)