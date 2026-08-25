{%- set _mod_docs_content_type = "PROCEDURE" %}
# Associate your AWS account with your Red&#160;Hat organization {id="rosa-sts-associating-your-aws-account_{{ context }}"}

{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}
{% if context == "rosa-hcp-sts-creating-a-cluster-quickly" %}
{%- set rosa_hcp = true -%}
{% endif %}
{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set rosa_standalone = true -%}
{% endif %}

Before using {{ cluster_manager_first }} on the {{ hybrid_console_url }} to create
{%- if openshift_rosa %}
{{ rosa_classic_short }} 
{%- endif %}
{%- if openshift_rosa_hcp %}
{{ rosa_short }} 
{%- endif %}
clusters that use the AWS Security Token Service (STS), create an {{ cluster_manager }} IAM role and link it to your Red&#160;Hat organization. Then, create a user IAM role and link it to your Red&#160;Hat user account in the same Red&#160;Hat organization. {._abstract}

{% if quick_install %}

**Prerequisites**

{% if rosa_hcp %}
*   You have completed the AWS prerequisites for {{ rosa_short }}.
{% endif %}
{% if not rosa_hcp %}
* You have completed the AWS prerequisites for {{ product_title }} with STS.
{%- endif %}
* You have available AWS service quotas.
* You have enabled the {{ product_title }} service in the AWS Console.
* You have installed and configured the latest {{ rosa_cli }} (`rosa`) on your installation host.


:::note

To successfully install
{%- if rosa_hcp %}
{{ rosa_short }}
{%- endif %}
{%- if not rosa_hcp %}
ROSA
{%- endif %}
clusters, use the latest version of the ROSA CLI.

:::

*   You have logged in to your Red&#160;Hat account by using the ROSA CLI.
*   You have organization administrator privileges in your Red&#160;Hat organization.
{% endif %}

**Procedure**

1.  Create an {{ cluster_manager }} role and link it to your Red&#160;Hat organization:

    :::note

    To enable automatic deployment of the cluster-specific Operator roles and the OpenID Connect (OIDC) provider using the {{ cluster_manager }} {{ hybrid_console_second }}, you must apply the administrative privileges to the role by choosing the _Admin OCM role_ command in the **Accounts and roles** step of creating a
{%- if rosa_hcp %}
    {{ rosa_short }}
{%- endif %}
{%- if not rosa_hcp %}
    ROSA
{%- endif %}
    cluster. For more information about the basic and administrative privileges for the {{ cluster_manager }} role, see _Understanding AWS account association_.
    
    :::


    :::note

    If you choose the _Basic OCM role_ command in the **Accounts and roles** step of creating a
{%- if rosa_hcp %}
    {{ rosa_short }}
{%- endif %}
{%- if not rosa_hcp %}
    ROSA
{%- endif %}
    cluster in the {{ cluster_manager }} {{ hybrid_console_second }}, you must deploy a
{%- if rosa_hcp %}
    {{ rosa_short }}
{%- endif %}
{%- if not rosa_hcp %}
    ROSA
{%- endif %}
    cluster using manual mode. You will be prompted to configure the cluster-specific Operator roles and the OpenID Connect (OIDC) provider in a later step.
    
    :::

    ```terminal
    $ rosa create ocm-role
    ```

    Select the default values at the prompts to quickly create and link the role.
1.  Create a user role and link it to your Red&#160;Hat user account:
    ```terminal
    $ rosa create user-role
    ```

    Select the default values at the prompts to quickly create and link the role.

    :::note

    The Red&#160;Hat user account must exist in the Red&#160;Hat organization that is linked to your {{ cluster_manager }} role.
    
    :::


**Verification**

*   Verify that the OCM role and user role were created:
    ```terminal
    $ rosa list ocm-role
    $ rosa list user-role
    ```

**Additional resources**
{._additional-resources}

*   [AWS prerequisites for ROSA with STS](https://docs.openshift.com/rosa/rosa_install_access_delete_clusters/rosa-sts-aws-prereqs.html)
*   [Understanding ROSA](https://docs.openshift.com/rosa/rosa_architecture/rosa-understanding.html)
*   [IAM roles in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)

{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}
{% if context == "rosa-hcp-sts-creating-a-cluster-quickly" %}
{%- set rosa_hcp = true -%}
{% endif %}
{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set rosa_standalone = true -%}
{% endif %}