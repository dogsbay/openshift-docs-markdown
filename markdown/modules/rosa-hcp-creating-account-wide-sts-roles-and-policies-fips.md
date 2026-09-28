{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the account-wide STS roles and policies {id="rosa-sts-creating-account-wide-sts-roles-and-policies-fips_{{ context }}"}

Before you create a {{ product_title }} cluster, you must create the required account-wide IAM roles and policies by using the {{ rosa_cli_first }}. {._abstract}


:::note

Specific AWS-managed policies for {{ product_title }} must be attached to each role. Customer-managed policies must not be used with these required account roles. For more information regarding AWS-managed policies for {{ product_title }} clusters, see [AWS managed policies for {{ product_title }}](https://docs.aws.amazon.com/ROSA/latest/userguide/security-iam-awsmanpol-account-policies.html).

:::


**Prerequisites**

*   You have completed the AWS prerequisites for {{ product_title }}.
*   You have available AWS service quotas.
*   You have enabled the {{ product_title }} in the AWS Console.
*   You have installed and configured the latest {{ rosa_cli_first }} on your installation host.
*   You have logged in to your Red&#160;Hat account by using the {{ rosa_cli }}.

**Procedure**

1.  If they do not exist in your AWS account, create the required account-wide STS roles and attach the policies by running the following command:
    ```terminal
    $ export PREFIX=<custom_prefix>; rosa create account-roles --hosted-cp --prefix $PREFIX
    ```

    When using FIPS encryption, you need to set a custom prefix instead of using the default `ManagedOpenShift` prefix.

    :::note

    As an additional safeguard, after role creation, you can manually update the trust policies of the Support and Installer account-wide roles to include an external ID. For more information, see _About external ID_.
    
    :::


**Additional resources**
{._additional-resources}

*   [AWS managed IAM policies for {{ product_title }}](https://docs.aws.amazon.com/ROSA/latest/userguide/security-iam-awsmanpol.html)