{% if context == "rosa-hcp-egress-zero-install" %}
{%- set rosa_egress_lockdown_install = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting environment variables for cluster creation {id="rosa-hcp-set-environment-variables_{{ context }}"}

You can set environment variables to streamline resource creation for your {{ product_title }} cluster. {._abstract}

**Procedure**

1.  Set your environment variable by running the following command:
    ```terminal
    $ export <variable_name>=<variable_value>
    ```
1.  You can confirm that your variable has been set by running the following command:
    ```terminal
    $ echo <variable_name>
    ```
{% if rosa_egress_lockdown_install %}

    **Suggested variables for disconnected {{ product_title }} clusters**

    | Variable name | Variable value | Notes |
    | --- | --- | --- |
    | `AWS_ACCOUNT_ID` | `$(aws sts get-caller-identity --query Account --output text)` | You must be logged in to your AWS account with `rosa login`. |
    | `CLUSTER_NAME` | The name you want for your cluster. | Your cluster name cannot exceed 26 characters. |
    | `OIDC_ID` | The 32-digit ID for your OpenID Connect (OIDC) configuration. | You generate this ID by running `rosa create oidc-config`. |
    | `OPERATOR_ROLES_PREFIX` | The Operator role prefix. | If you want to make your AWS account roles use the same prefix as your Operator roles, you can run `ACCOUNT_ROLES_PREFIX=$OPERATOR_ROLES_PREFIX` after setting your Operator role prefix variable. |
    | `PRIVATE_SUBNET` | The ID of your private subnets. | You must enclose this value in quotation marks (") and separate the subnet IDs with commas. |
    | `REGION` | Your AWS region. | - |
    | `SUBNET_IDS` | The IDs of all your subnets. | You must enclose this value in quotation marks (") and separate the subnet IDs with commas. |

{% endif %}

{% if context == "rosa-hcp-egress-zero-install" %}
{%- set rosa_egress_lockdown_install = "" -%}
{% endif %}