{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding logs using the Fluentd forward protocol {id="cluster-logging-collector-log-forward-fluentd_{{ context }}"}

You can use the Fluentd **forward** protocol to send a copy of your logs to an external log aggregator that is configured to accept the protocol instead of, or in addition to, the default Elasticsearch log store. You are responsible for configuring the external log aggregator to receive the logs from {{ product_title }}.

To configure log forwarding using the **forward** protocol, you must create a `ClusterLogForwarder` custom resource (CR) with one or more outputs to the Fluentd servers, and pipelines that use those outputs. The Fluentd output can use a TCP (insecure) or TLS (secure TCP) connection.

**Prerequisites**

*   You must have a logging server that is configured to receive the logging data using the specified protocol or format.

**Procedure**

1.  Create or edit a YAML file that defines the `ClusterLogForwarder` CR object:
    ```yaml
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: instance (1)
      namespace: openshift-logging (2)
    spec:
      outputs:
       - name: fluentd-server-secure (3)
         type: fluentdForward (4)
         url: 'tls://fluentdserver.security.example.com:24224' (5)
         secret: (6)
            name: fluentd-secret
       - name: fluentd-server-insecure
         type: fluentdForward
         url: 'tcp://fluentdserver.home.example.com:24224'
      pipelines:
       - name: forward-to-fluentd-secure (7)
         inputRefs:  (8)
         - application
         - audit
         outputRefs:
         - fluentd-server-secure (9)
         - default (10)
         labels:
           clusterId: "C1234" (11)
       - name: forward-to-fluentd-insecure (12)
         inputRefs:
         - infrastructure
         outputRefs:
         - fluentd-server-insecure
         labels:
           clusterId: "C1234"
    ```
    1.  The name of the `ClusterLogForwarder` CR must be `instance`.
    1.  The namespace for the `ClusterLogForwarder` CR must be `openshift-logging`.
    1.  Specify a name for the output.
    1.  Specify the `fluentdForward` type.
    1.  Specify the URL and port of the external Fluentd instance as a valid absolute URL. You can use the `tcp` (insecure) or `tls` (secure TCP) protocol. If the cluster-wide proxy using the CIDR annotation is enabled, the output must be a server name or FQDN, not an IP address.
    1.  If you are using a `tls` prefix, you must specify the name of the secret required by the endpoint for TLS communication. The secret must exist in the `openshift-logging` project and must contain a `ca-bundle.crt` key that points to the certificate it represents.
    1.  Optional: Specify a name for the pipeline.
    1.  Specify which log types to forward by using the pipeline: `application,` `infrastructure`, or `audit`.
    1.  Specify the name of the output to use when forwarding logs with this pipeline.
    1.  Optional: Specify the `default` output to forward logs to the internal Elasticsearch instance.
    1.  Optional: String. One or more labels to add to the logs.
    1.  Optional: Configure multiple outputs to forward logs to other external log aggregators of any supported type:
        *   A name to describe the pipeline.
        *   The `inputRefs` is the log type to forward by using the pipeline: `application,` `infrastructure`, or `audit`.
        *   The `outputRefs` is the name of the output to use.
        *   Optional: String. One or more labels to add to the logs.
1.  Create the CR object:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```

## Enabling nanosecond precision for Logstash to ingest data from fluentd {id="cluster-logging-collector-log-forward-nano-precision"}
For Logstash to ingest log data from fluentd, you must enable nanosecond precision in the Logstash configuration file.

**Procedure**

*   In the Logstash configuration file,  set `nanosecond_precision` to `true`.

```terminal title="Example Logstash configuration file"
input { tcp { codec => fluent { nanosecond_precision => true } port => 24114 } }
filter { }
output { stdout { codec => rubydebug } }
```