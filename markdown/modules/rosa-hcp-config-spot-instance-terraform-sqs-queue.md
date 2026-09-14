{%- set _mod_docs_content_type = "PROCEDURE" %}

# Create the SQS queue {id="rosa-hcp-config-spot-instance-terraform-sqs-queue_{{ context }}"}

Set up the SQS queue for graceful interruption events. {._abstract}

**Procedure**

*   Add the following resource to your Terraform configuration:
    ```text
    resource "aws_sqs_queue" "spot_termination" {
      name = "rosa-<cluster-name>-spot"

      tags = {
        "red-hat" = "true"
      }
    }
    ```

    :::important

    The `red-hat=true` tag is required. The `ROSANodePoolManagementPolicy` uses an IAM condition, `aws:ResourceTag/red-hat: "true"`, to scope SQS permissions. Omitting this tag causes the AWS Node Termination Handler to fail when polling the queue.
    
    :::