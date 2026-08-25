{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if context == "rosa-classic-creating-a-cluster-quickly-terraform" %}
{%- set tf_defaults = true -%}
{% endif %}
{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_rosa_hcp = true -%}
{% endif %}

# Deleting your {{ product_title }} cluster with Terraform {id="sd-terraform-cluster-destroy_{{ context }}"}

Use the `terraform destroy` command to remove all resources you create with the `terraform apply` command. {._abstract}


:::note

Keep your Terraform .tf files unchanged before destroying your resources. These variables are matched to resources to delete.

:::


**Procedure**

1.  In the directory where you ran the `terraform apply` command to create your cluster, run the following command to delete the cluster:
    ```terminal
    $ terraform destroy
    ```

    The Terraform interface prompts you for two variables. These should match the answers you provided when creating a cluster:
    ```terminal
    var.create_vpc
      If you would like to create a new VPC, set this value to 'true.' If you do not want to create a new VPC, set this value to 'false.'

      Enter a value: 

    var.private_cluster
      If you want to create a private cluster, set this value to 'true.' If you want a publicly available cluster, set this value to 'false.'

      Enter a value: 
    ```
1.  Enter `yes` to start the role and cluster deletion:
{%- if tf_rosa_hcp %}
    ```terminal title="Example output"
    Plan: 0 to add, 0 to change, 63 to destroy.

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value: yes
    ```
{%- endif %}
{%- if tf_rosa_classic %}
    ```terminal title="Example output"
    Plan: 0 to add, 0 to change, 74 to destroy.

    Do you really want to destroy all resources?
      Terraform will destroy all your managed infrastructure, as shown above.
      There is no undo. Only 'yes' will be accepted to confirm.

      Enter a value: yes
    ```
{%- endif %}

**Verification**

1.  Verify that your cluster was destroyed by running the following command:
    ```terminal
    $ rosa list clusters
    ```
    ```terminal title="Example output showing no cluster"
    I: No clusters available
    ```
1.  Verify that the account roles were destroyed by running the following command:
    ```terminal
    $ rosa list account-roles
    ```
    ```terminal title="Example output showing no Terraform-created account roles"
    I: Fetching account roles
    I: No account roles available
    ```
1.  Verify that the Operator roles were destroyed by running the following command:
    ```terminal
    $ rosa list operator-roles
    ```
    ```terminal title="Example output showing no Terraform-created Operator roles"
    I: Fetching operator roles
    I: No operator roles available
    ```

{% if context == "rosa-classic-creating-a-cluster-quickly-terraform" %}
{%- set tf_defaults = true -%}
{% endif %}
{% if context == "rosa-hcp-creating-a-cluster-quickly-terraform" %}
{%- set tf_rosa_hcp = true -%}
{% endif %}