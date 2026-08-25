{%- set _mod_docs_content_type = "PROCEDURE" %}
# Redeploying Fluentd pods {id="redeploying-fluentd-pods_{{ context }}"}

When you create a `ClusterLogForwarder` custom resource (CR), if the {{ clo }} does not redeploy the Fluentd pods automatically, you can delete the Fluentd pods to force them to redeploy.

**Prerequisites**

*   You have created a `ClusterLogForwarder` custom resource (CR) object.

**Procedure**

*   Delete the Fluentd pods to force them to redeploy by running the following command:
    ```terminal
    $ oc delete pod --selector logging-infra=collector
    ```