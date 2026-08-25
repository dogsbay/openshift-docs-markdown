{%- if context == "rosa-sts-creating-a-cluster-quickly-terraform" %}
{%- set tf_defaults = true -%}
{% endif %}
{%- set _content_type = "PROCEDURE" %}
# Enabling autoscaling {id="rosa-cluster-enable-autoscaling-terraform_{{ context }}"}
{%- set source_highlighter = "coderay" %}

By default, the Terraform files used in this guide create a cluster with autoscaling disabled. You can enable autoscaling by editing your `main.tf` and `terraform.tfvars` files.

Enabling autoscaling requires you to set a maximum and minimum replicas range using the 'max_replicas' and 'min_replicas' variables.


:::important

If autoscaling is enabled, you cannot configure the worker node replicas.

:::


**Procedure**

1.  Edit your `main.tf` file so that `autoscaling_enabled`, `min_replicas`, and `max_replicas` point to your `terraform.tfvars` file.
    ```terminal title="Excerpt of a main.tf file with autoscaling enabled"
    autoscaling_enabled  = var.autoscaling_enabled
    replicas             = local.worker_node_replicas
    min_replicas         = var.min_replicas
    max_replicas         = var.max_replicas
    ```
1.  Enable autoscaling and set a maximum and minimum replicas range in your `terraform.tfvars` file. 


    Maximum and minimum replicas must be in multiples of 3 for multiple availability zone clusters.
    ```terminal title="Excerpt of a terraform.tfvars file with autoscaling enabled"
    autoscaling_enabled = "true"
    worker_node_replicas = null
    min_replicas = "<minimum_replicas>"
    max_replicas = "<maximum_replicas>"
    ```
    ```terminal title="Example input"
    autoscaling_enabled = "true"
    worker_node_replicas = null
    min_replicas = "6"
    max_replicas = "15"
    ```

{% if not tf_defaults %}
You are ready to initiate Terraform.
{% endif %}

{% if context == "rosa-sts-creating-a-cluster-quickly-terraform" %}
{%- set tf_defaults = false -%}
{% endif %}