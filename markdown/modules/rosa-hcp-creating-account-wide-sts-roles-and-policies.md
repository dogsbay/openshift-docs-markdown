{% if context == "rosa-hcp-egress-zero-install" %}
{%- set egress_lockdown = true -%}
{% endif %}
{% if context == "rosa-hcp-creating-cluster-with-fips-encryption" %}
{%- set fips = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the account-wide STS roles and policies {id="rosa-sts-creating-account-wide-sts-roles-and-policies_{{ context }}"}

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
    {%- if not fips %}
    ```terminal
    $ rosa create account-roles --hosted-cp
    ```
{% endif %}
{% if fips %}
    ```terminal
    $ export PREFIX=<custom_prefix>; rosa create account-roles --hosted-cp --prefix $PREFIX
    ```

    When using FIPS encryption, you need to set a custom prefix instead of using the default `ManagedOpenShift` prefix.
{% endif %}

{% if egress_lockdown %}
1.  Verify that your worker role has the correct AWS policy by running the following command:
    ```terminal
    $ aws iam attach-role-policy \
    --role-name ManagedOpenShift-HCP-ROSA-Worker-Role \
    --policy-arn "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
    ```
    `--role-name ManagedOpenShift-HCP-ROSA-Worker-Role`::This role needs to include the prefix that was created in the previous step.
{% endif %}

{% if not fips %}
1.  Optional: Set your prefix as an environmental variable by running the following command:
    ```terminal
    $ export ACCOUNT_ROLES_PREFIX=<account_role_prefix>
    ```
    *   View the value of the variable by running the following command:
        ```terminal
        $ echo $ACCOUNT_ROLES_PREFIX
        ```

        For example:
        ```terminal
        ManagedOpenShift
        ```
{% endif %}


:::note

As an additional safeguard, after role creation, you can manually update the trust policies of the Support and Installer account-wide roles to include an external ID. For more information, see _About external ID_.

:::


**Additional resources**
{._additional-resources}

*   [AWS managed IAM policies for {{ product_title }}](https://docs.aws.amazon.com/ROSA/latest/userguide/security-iam-awsmanpol.html)

{% if context == "rosa-hcp-creating-cluster-with-fips-encryption" %}
{%- set fips = false -%}
{% endif %}
{% if context == "rosa-hcp-egress-zero-install" %}
{%- set egress_lockdown = false -%}
{% endif %}