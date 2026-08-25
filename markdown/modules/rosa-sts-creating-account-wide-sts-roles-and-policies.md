{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the account-wide STS roles and policies {id="rosa-sts-creating-account-wide-sts-roles-and-policies_{{ context }}"}

{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

Before using the {{ hybrid_console }} to create {{ product_title }} clusters that use the AWS Security Token Service (STS), create the required account-wide STS roles and policies, including the Operator policies. {._abstract}

{% if quick_install %}

**Prerequisites**

*   You have completed the AWS prerequisites for {{ product_title }} with STS.
*   You have available AWS service quotas.
*   You have enabled the {{ product_title }} service in the AWS Console.
*   You have installed and configured the latest {{ rosa_cli }} on your installation host. Run `rosa version` to see your currently installed version of the {{ rosa_cli }}. If a newer version is available, the CLI provides a link to download this upgrade.
*   You have logged in to your Red&#160;Hat account by using the {{ rosa_cli }}.
{% endif %}

**Procedure**

{% if quick_install %}
1.  Check your AWS account for existing roles and policies:
    ```terminal
    $ rosa list account-roles
    ```
{% endif %}
1.  If they do not exist in your AWS account, create the required account-wide AWS IAM STS roles and policies:
    {%- if openshift_rosa %}
    ```terminal
    $ rosa create account-roles
    ```
{% endif %}
{% if openshift_rosa_hcp %}
    ```terminal
    $ rosa create account-roles --hosted-cp
    ```
{%- endif %}

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