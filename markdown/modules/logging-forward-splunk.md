{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding logs to Splunk {id="logging-forward-splunk_{{ context }}"}

You can forward logs to the [Splunk HTTP Event Collector (HEC)](https://docs.splunk.com/Documentation/Splunk/9.0.0/Data/UsetheHTTPEventCollector) in addition to, or instead of, the internal default {{ product_title }} log store.


:::note

Using this feature with Fluentd is not supported.

:::


**Prerequisites**

*   {{ clo }} 5.6 or later
*   A `ClusterLogging` instance with `vector` specified as the collector
*   Base64 encoded Splunk HEC token

**Procedure**

1.  Create a secret using your Base64 encoded Splunk HEC token.
    ```terminal
    $ oc -n openshift-logging create secret generic vector-splunk-secret --from-literal hecToken=<HEC_Token>
    ```
1.  Create or edit the `ClusterLogForwarder` Custom Resource (CR) using the template below:
    ```yaml
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: <log_forwarder_name> (1)
      namespace: <log_forwarder_namespace> (2)
    spec:
      serviceAccountName: <service_account_name> (3)
      outputs:
        - name: splunk-receiver (4)
          secret:
            name: vector-splunk-secret (5)
          type: splunk (6)
          url: <http://your.splunk.hec.url:8088> (7)
      pipelines: (8)
        - inputRefs:
            - application
            - infrastructure
          name: (9)
          outputRefs:
            - splunk-receiver (10)
    ```
    1.  In legacy implementations, the CR name must be `instance`. In multi log forwarder implementations, you can use any name.
    1.  In legacy implementations, the CR namespace must be `openshift-logging`. In multi log forwarder implementations, you can use any namespace.
    1.  The name of your service account. The service account is only required in multi log forwarder implementations if the log forwarder is not deployed in the `openshift-logging` namespace.
    1.  Specify a name for the output.
    1.  Specify the name of the secret that contains your HEC token.
    1.  Specify the output type as `splunk`.
    1.  Specify the URL (including port) of your Splunk HEC.
    1.  Specify which log types to forward by using the pipeline: `application`, `infrastructure`, or `audit`.
    1.  Optional: Specify a name for the pipeline.
    1.  Specify the name of the output to use when forwarding logs with this pipeline.