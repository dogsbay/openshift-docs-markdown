{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding JSON logs to the Elasticsearch log store {id="cluster-logging-forwarding-json-logs-to-the-default-elasticsearch_{{ context }}"}

For an Elasticsearch log store, if your JSON log entries _follow different schemas_, configure the `ClusterLogForwarder` custom resource (CR) to group each JSON schema into a single output definition. This way, Elasticsearch uses a separate index for each schema.


:::important

Because forwarding different schemas to the same index can cause type conflicts and cardinality problems, you must perform this configuration before you forward data to the Elasticsearch store.

To avoid performance issues associated with having too many indices, consider keeping the number of possible schemas low by standardizing to common schemas.

:::


**Procedure**

1.  Add the following snippet to your `ClusterLogForwarder` CR YAML file.
    ```yaml
    outputDefaults:
     elasticsearch:
        structuredTypeKey: <log record field>
        structuredTypeName: <name>
    pipelines:
    - inputRefs:
      - application
      outputRefs: default
      parse: json
    ```
1.  Use `structuredTypeKey` field to specify one of the log record fields.
1.  Use `structuredTypeName` field to specify a name.

    :::important

    To parse JSON logs, you must set both the `structuredTypeKey` and `structuredTypeName` fields.
    
    :::

1.  For `inputRefs`, specify which log types to forward by using that pipeline, such as `application,` `infrastructure`, or `audit`.
1.  Add the `parse: json` element to pipelines.
1.  Create the CR object:
    ```terminal
    $ oc create -f <filename>.yaml
    ```

    The Red Hat OpenShift Logging Operator redeploys the collector pods. However, if they do not redeploy, delete the collector pods to force them to redeploy.
    ```terminal
    $ oc delete pod --selector logging-infra=collector
    ```