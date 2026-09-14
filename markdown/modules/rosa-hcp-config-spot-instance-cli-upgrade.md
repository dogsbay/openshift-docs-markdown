{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrade your {{ product_title }} cluster with Spot instances from simple to enhance mode {id="rosa-hcp-config-spot-instance-cli-upgrade_{{ context }}"}

You can upgrade an existing simple-mode cluster to enhanced mode by adding the AWS resources and associate the SQS queue URL with the cluster. {._abstract}

**Prerequisites**

*   You have SQS queue configured.
*   You have your EventBridge rules configured.
*   You have the associated resource policy configured

**Procedure**

*   Associate the queue URL with your existing cluster:
    ```terminal
    $ rosa edit cluster --cluster=<cluster-name> \
      --spot-termination-queue-url "${QUEUE_URL}"
    ```

    Existing Spot machine pools immediately benefit from graceful termination handling. The AWS Node Termination Handler deployment is created in the control plane namespace and begins polling the queue. No machine pool changes are required.