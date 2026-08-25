{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying Karpenter set up for log forwarding {id="rosa-verify-karpenter-log-forwarding_{{ context }}"}

After you configure the {{ product_title }} clusters to use your selected log forwarder, such as `S3` or `CloudWatch`, verify that Karpenter logs are arriving at your specified destination. Confirming that Karpenter log data is present ensures that your node provisioning and scaling decisions are captured, which supports troubleshooting and capacity planning for your cluster. {._abstract}

**Procedure**

1.  Verify that you have control plane log forwarders configured for your cluster by running the following command:
    ```terminal
    $ rosa list log-forwarder -c <cluster_name|cluster_id>
    ```
1.  Confirm that the expected forwarder has the configuration correctly set to forward logs for Karpenter by running the following command:
    ```terminal
    $ rosa describe log-forwarder -c <cluster_name|cluster_id> <log_fwd_id>
    ```
1.  Go to your specified logging destination, and confirm that the output includes the data from your application. The output should resemble the following sample: 
    ```json
    {"application": "karpenter", "message": "Node provisioning triggered"}
    {"application": "karpenter-operator", "message": "Reconciliation loop successful"}
    ```