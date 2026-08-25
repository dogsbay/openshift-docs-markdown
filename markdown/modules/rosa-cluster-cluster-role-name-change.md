{%- if context == "rosa-sts-creating-a-cluster-quickly-terraform" %}
{%- set tf_defaults = true -%}
{% endif %}
{%- set _content_type = "PROCEDURE" %}
# Changing your cluster and role prefix name {id="rosa-cluster-cluster-role-name-change_{{ context }}"}
{%- set source_highlighter = "coderay" %}

By default, the Terraform files used in this guide create a cluster that uses the naming convention of `rosa-` followed by six-random letters or numbers. Terraform uses your cluster name to create your account role and Operator role prefixes.

You can customize your cluster and role prefix name by editing your `main.tf` file. If you set a name for the `cluster_name` variable in the `main.tf` file, this value is used instead of a randomly-generated string.

**Procedure**

*   Choose one of the following methods to set the cluster name:
    *   Export the name of your cluster in the command line by running the following command:
        ```terminal
        $ export TF_VAR_cluster_name=<your_cluster_name>
        ```
    *   Set a `cluster_name` value in your `terraform.tfvars` file:
        ```terminal title="terraform.tfvars file excerpt"
        cluster_name = "<your_cluster_name>"
        ```
    *   Enter the cluster name when prompted in the terminal:
        ```terminal
        FORTHCOMING
        ```

{% if context == "rosa-sts-creating-a-cluster-quickly-terraform" %}
{%- set tf_defaults = true -%}
{% endif %}

{% if not tf_defaults %}
You are ready to initiate Terraform.
{% endif %}