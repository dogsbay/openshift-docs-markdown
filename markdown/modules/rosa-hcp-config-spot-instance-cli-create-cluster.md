{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a new {{ product_title }} cluster using the CLI with Spot instances {id="rosa-hcp-config-spot-instance-cli-create-cluster_{{ context }}"}

After you have set up your AWS resources including the SQS queue, EventBridge rules, and associated policy, you can create a new cluster. The process for simple mode and enhanced mode differ by the omission or inclusion respectively of the `--spot-termination-queue-url` flag. {._abstract}


:::important

Each {{ product_title }} cluster must use a dedicated Spot termination queue. Do not reuse the same SQS queue URL for multiple clusters. Create a separate queue for each cluster using the `rosa create spot-termination-queue` command.

:::


**Procedure**

*   To create a cluster with Spot instances in simple mode, no additional AWS resources are required. Create the cluster without the `--spot-termination-queue-url` flag:
    ```terminal
    $ rosa create cluster --cluster-name=<cluster-name> \
      --mode=auto --hosted-cp [--private] \
      --operator-roles-prefix <operator-role-prefix> \
      --external-id <external-id> \
      --oidc-config-id <id-of-oidc-configuration> \
      --subnet-ids=<public-subnet-id>,<private-subnet-id>
    ```

    :::warning

    In simple mode, Spot instances are not gracefully drained upon interruption. Nodes are terminated abruptly when AWS reclaims capacity. A `MachineHealthCheck` provisions replacement nodes reactively.
    
    :::

*   To create a cluster with Spot instances in enhance mode, create the cluster with a reference to the SQS queue:
    ```terminal
    $ rosa create cluster --cluster-name=<cluster-name> \
      --mode=auto --hosted-cp [--private] \
      --operator-roles-prefix <operator-role-prefix> \
      --external-id <external-id> \
      --oidc-config-id <id-of-oidc-configuration> \
      --subnet-ids=<public-subnet-id>,<private-subnet-id> \
      --spot-termination-queue-url "${QUEUE_URL}"
    ```

    The AWS Node Termination Handler is automatically created in the hosted control plane namespace once the cluster is ready and at least one Spot NodePool exists.