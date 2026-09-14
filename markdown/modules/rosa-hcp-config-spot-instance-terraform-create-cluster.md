{%- set _mod_docs_content_type = "PROCEDURE" %}

# Create a new {{ product_title }} cluster with Spot instances (Day 0) using Terraform {id="rosa-hcp-config-spot-instance-terraform-create-cluser_{{ context }}"}

After you create or update your Terrform variables file, you can add the cluster resource to your main file and initiate Terraform. The process for simple mode and enhanced mode differ by the omission or inclusion respectively of the `termination_handler_queue_url` attribute. The machine pool configuration is identical for both simple and enhanced modes. {._abstract}


:::important

Each cluster must use a dedicated Spot termination queue. Do not reuse the same SQS queue URL for multiple clusters. Create a separate queue for each cluster.

:::


**Procedure**

1.  Add the cluster resouce to your `main.tf` file:
    ```text
    resource "rhcs_cluster_rosa_hcp" "cluster" {
      name                          = var.cluster_name
      cloud_region                  = var.aws_region
      aws_account_id                = var.aws_account_id
      operator_role_arn             = var.operator_role_arn
      termination_handler_queue_url = aws_sqs_queue.spot_termination.url # Enhanced mode only
    }
    ```
1.  Add a Spot machine pool resource to your `main.tf` file:
    ```text
    resource "rhcs_hcp_machine_pool" "spot_pool" {
      cluster = rhcs_cluster_rosa_hcp.cluster.id
      name    = "spot-pool"

      aws_node_pool = {
        instance_type      = "m5.xlarge"
        use_spot_instances = true
        max_spot_price     = 2.0
      }

      subnet_id   = var.private_subnet_id
      replicas    = 2
      auto_repair = true
      # ...
    }
    ```
1.  Apply the configuration:
    ```termina
    $ terraform init && terraform plan && terraform apply
    ```

    The AWS Node Termination Handler is automatically created in the hosted control plane namespace once the cluster is ready and at least one Spot NodePool exists.