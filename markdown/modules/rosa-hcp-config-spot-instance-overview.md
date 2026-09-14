{%- set _mod_docs_content_type = "CONCEPT" %}

# Overview of Spot instances on {{ product_title }} {id="rosa-hcp-config-spot-instance-overview_{{ context }}"}

AWS Spot instances allow you to use spare EC2 capacity at significantly reduced costs compared to on-demand instances. {{ product_title }} supports Spot instances for worker node machine pools, enabling cost optimization for fault-tolerant and stateless workloads. {._abstract}

{{ product_title }} provides two operational modes for Spot instance termination handling:

| Mode | Description | AWS infrastructure required | Graceful drain |
| --- | --- | --- | --- |
| Simple  | Spot instances work with no additional AWS setup. When AWS reclaims a Spot instance, the node is terminated abruptly. A `MachineHealthCheck` detects the missing node and provisions a replacement.  | None  | No |
| Enhanced  | Requires a customer-configured SQS queue and EventBridge rules. The AWS Node Termination Handler receives an approximately 2m warning before interruption and gracefully drains pods, respecting `PodDisruptionBudgets`.  | SQS queue, EventBridge rules, SQS resource policy  | Yes |

Enhanced Spot termination handling requires three AWS components:

*   A Simple Queue Service (SQS) queue to receive interruption events.
*   EventBridge rules to route EC2 Spot events to the queue.
*   An SQS queue resource policy that grants access to EventBridge and the cluster’s NodePoolManagement role.


:::note

Use enhanced mode for any workload that benefits from graceful shutdown before Spot interruptions.

:::