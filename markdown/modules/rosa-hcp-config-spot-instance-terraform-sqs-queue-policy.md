{%- set _mod_docs_content_type = "PROCEDURE" %}

# Configure the SQS queue resource policy {id="rosa-hcp-config-spot-instance-terraform-sqs-queue-policy_{{ context }}"}

Set up the SQS resource policy to grant access to EventBridge and the cluster’s NodePoolManagement role {._abstract}

**Procedure**

*   Apply a resource policy to the SQS queue:
    ```text
    resource "aws_sqs_queue_policy" "spot_termination" {
      queue_url = aws_sqs_queue.spot_termination.id

      policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
          {
            Sid    = "AllowNodePoolManagementRole"
            Effect = "Allow"
            Principal = {
              AWS = var.nodepool_management_role_arn
            }
            Action = [
              "sqs:DeleteMessage",
              "sqs:ReceiveMessage"
            ]
            Resource = aws_sqs_queue.spot_termination.arn
          },
          {
            Sid    = "AllowEventBridgeToSendMessages"
            Effect = "Allow"
            Principal = {
              Service = "events.amazonaws.com"
            }
            Action   = "sqs:SendMessage"
            Resource = aws_sqs_queue.spot_termination.arn
          }
        ]
      })
    }
    ```

    This policy grants access to two principals:

    EventBridge
    :   sends interruption events to the queue.

    NodePoolManagement role
    :   receives and deletes messages from the queue.

    :::note

    This resource policy provides defense-in-depth alongside the managed IAM policy. The IAM policy restricts access by the tag `red-hat=true`. The resource policy restricts access by principal ARN.
    
    :::