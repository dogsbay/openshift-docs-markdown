{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up the AWS infrastructure for Spot instances automatically {id="rosa-hcp-config-spot-intance-cli-auto_{{ context }}"}

You can set up the required AWS infrastructure using the automated {{ rosa_cli }} helper. This helper command creates all the required AWS resources in a single step. {._abstract}

These resources include:

*   The SQS queue
*   The `red-hat=true` tag
*   The EventBridge rules
*   The SQS queue resource policy


:::note

This process differs from the manual process when setting up the EventBridge rules: the automated {{ rosa_cli }} helper combines the necessary interruption warning and rebalance recommendation into a single rule using CloudFormation. Setting up the AWS infrastructure manually requires defining two separate rules: one for interruption handling, and one for the rebalance recommendation.

:::


**Procedure**

*   Run the following command to create the necessary AWS resources:
    ```terminal
    $ rosa create spot-termination-queue --name <cluster-name> --nodepool-management-role-arn <arn> --mode auto
    ```

    :::note

    This command produces a queue URL that is neccessary for cluster creation, `rosa create cluster --spot-termination-queue-url`, or updating your cluster, `rosa edit cluster --spot-termination-url`, so that your SQS queue and cluster are associated.
    
    :::