{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a cluster quickly using the CLI {id="rosa-sts-creating-a-cluster-quickly-cli_{{ context }}"}

{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

When using the {{ rosa_cli_first }}, to create a cluster that uses the AWS Security Token Service (STS), you can select the default options to create the cluster quickly. {._abstract}

{% if not quickstart %}

**Prerequisites**

*   You have completed the AWS prerequisites for ROSA with STS.
*   You have available AWS service quotas.
*   You have enabled the ROSA service in the AWS Console.
*   You have installed and configured the latest {{ rosa_cli }} on your installation host. Run `rosa version` to see your currently installed version of the {{ rosa_cli }}. If a newer version is available, the CLI provides a link to download this upgrade.
*   You have logged in to your Red&#160;Hat account by using the ROSA CLI.
*   You have verified that the AWS Elastic Load Balancing (ELB) service role exists in your AWS account.
{% endif %}

**Procedure**

1.  Create the required account-wide roles and policies, including the Operator policies:
    ```terminal
    $ rosa create account-roles --mode auto
    ```

    :::note

    When using `auto` mode, you can optionally specify the `-y` argument to bypass the interactive prompts and automatically confirm operations.
    
    :::

1.  Create a cluster with STS using the defaults. When you use the defaults, the latest stable OpenShift version is installed:
    ```terminal
    $ rosa create cluster --cluster-name <cluster_name> \
    --sts --mode auto
    ```

    *   Replace `<cluster_name>` with the name of your cluster.
    *   When you specify `--mode auto`, the `rosa create cluster` command creates the cluster-specific Operator IAM roles and the OIDC provider automatically. The Operators use the OIDC provider to authenticate.

{% include "./snippets/rosa-long-cluster-name.md" %}
1.  Check the status of your cluster:
    ```terminal
    $ rosa describe cluster --cluster <cluster_name|cluster_id>
    ```

    The following `State` field changes are listed in the output as the cluster installation progresses:
    *   `waiting (Waiting for OIDC configuration)`
    *   `pending (Preparing account)`
    *   `installing (DNS setup in progress)`
    *   `installing`
    *   `ready`

        :::note

        If the installation fails or the `State` field does not change to `ready` after about 40 minutes, check the installation troubleshooting documentation for details. For more information, see _Troubleshooting installations_. For steps to contact Red&#160;Hat Support for assistance, see _Getting support for Red&#160;Hat OpenShift Service on AWS_.
        
        :::

1.  Track the progress of the cluster creation by watching the OpenShift installer logs:
    ```terminal
    $ rosa logs install --cluster <cluster_name|cluster_id> --watch
    ```

    Specify the `--watch` flag to watch for new log messages as the installation progresses. This argument is optional.

{% if context == "rosa-sts-creating-a-cluster-quickly" %}
{%- set quick_install = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}