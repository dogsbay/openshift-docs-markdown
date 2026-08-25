{%- set _mod_docs_content_type = "PROCEDURE" %}
# AWS Load Balancer Operator logs {id="nw-aws-load-balancer-operator-logs_{{ context }}"}

To troubleshoot the AWS Load Balancer Operator, view the logs using the `oc logs` command. By viewing the logs, you can diagnose issues and monitor the activity of the Operator. {._abstract}

**Procedure**

*   View the logs of the AWS Load Balancer Operator by running the following command:
    ```terminal
    $ oc logs -n aws-load-balancer-operator deployment/aws-load-balancer-operator-controller-manager -c manager
    ```