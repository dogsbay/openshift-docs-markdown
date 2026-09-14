{%- set _mod_docs_content_type = "PROCEDURE" %}

# Upgrade a {{ product_title }} cluster from simple mode to enhanced mode (Day 2) using Terraform {id="rosa-hcp-config-spot-instance-terraform-upgrade-simple-to-enhanced_{{ context }}"}

You can upgrade an existing simple-mode cluster to enhanced mode by adding the AWS infrastructure resources and associating the SQS queue URL with the cluster. {._abstract}

**Prerequisites**

1.  You have SQS queue configured.
1.  You have your EventBridge rules configured.
1.  You have the associated resource policy configured.

**Procedure**

1.  Add the `termination_handler_queue_url` attribute to your existing cluster resource:
    ```text
    resource "rhcs_cluster_rosa_hcp" "cluster" {
      name              = var.cluster_name
      cloud_region      = var.aws_region
      aws_account_id    = var.aws_account_id
      operator_role_arn = var.operator_role_arn

      # Add this line to upgrade from simple to enhanced mode
      termination_handler_queue_url = aws_sqs_queue.spot_termination.url
    }
    ```
1.  Apply the configuration:
    ```terminal
    $ terraform plan && terraform apply
    ```

    Terraform performs a patch update on the cluster. Existing Spot machine pools immediately benefit from graceful termination handling.