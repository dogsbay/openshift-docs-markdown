{%- set _mod_docs_content_type = "PROCEDURE" %}

# Forwarding logs to a Kafka broker {id="cluster-logging-collector-log-forward-kafka_{{ context }}"}

You can forward logs to an external Kafka broker in addition to, or instead of, the default log store.

To configure log forwarding to an external Kafka instance, you must create a `ClusterLogForwarder` custom resource (CR) with an output to that instance, and a pipeline that uses the output. You can include a specific Kafka topic in the output or use the default. The Kafka output can use a TCP (insecure) or TLS (secure TCP) connection.

**Procedure**

1.  Create or edit a YAML file that defines the `ClusterLogForwarder` CR object:
    ```yaml
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: <log_forwarder_name> (1)
      namespace: <log_forwarder_namespace> (2)
    spec:
      serviceAccountName: <service_account_name> (3)
      outputs:
       - name: app-logs (4)
         type: kafka (5)
         url: tls://kafka.example.devlab.com:9093/app-topic (6)
         secret:
           name: kafka-secret (7)
       - name: infra-logs
         type: kafka
         url: tcp://kafka.devlab2.example.com:9093/infra-topic (8)
       - name: audit-logs
         type: kafka
         url: tls://kafka.qelab.example.com:9093/audit-topic
         secret:
            name: kafka-secret-qe
      pipelines:
       - name: app-topic (9)
         inputRefs: (10)
         - application
         outputRefs: (11)
         - app-logs
         labels:
           logType: "application" (12)
       - name: infra-topic (13)
         inputRefs:
         - infrastructure
         outputRefs:
         - infra-logs
         labels:
           logType: "infra"
       - name: audit-topic
         inputRefs:
         - audit
         outputRefs:
         - audit-logs
         labels:
           logType: "audit"
    ```
    1.  In legacy implementations, the CR name must be `instance`. In multi log forwarder implementations, you can use any name.
    1.  In legacy implementations, the CR namespace must be `openshift-logging`. In multi log forwarder implementations, you can use any namespace.
    1.  The name of your service account. The service account is only required in multi log forwarder implementations if the log forwarder is not deployed in the `openshift-logging` namespace.
    1.  Specify a name for the output.
    1.  Specify the `kafka` type.
    1.  Specify the URL and port of the Kafka broker as a valid absolute URL, optionally with a specific topic. You can use the `tcp` (insecure) or `tls` (secure TCP) protocol. If the cluster-wide proxy using the CIDR annotation is enabled, the output must be a server name or FQDN, not an IP address.
    1.  If you are using a `tls` prefix, you must specify the name of the secret required by the endpoint for TLS communication. The secret must contain a `ca-bundle.crt` key that points to the certificate it represents. In legacy implementations, the secret must exist in the `openshift-logging` project.
    1.  Optional: To send an insecure output, use a `tcp` prefix in front of the URL. Also omit the `secret` key and its `name` from this output.
    1.  Optional: Specify a name for the pipeline.
    1.  Specify which log types to forward by using the pipeline: `application,` `infrastructure`, or `audit`.
    1.  Specify the name of the output to use when forwarding logs with this pipeline.
    1.  Optional: String. One or more labels to add to the logs.
    1.  Optional: Configure multiple outputs to forward logs to other external log aggregators of any supported type:
        *   A name to describe the pipeline.
        *   The `inputRefs` is the log type to forward by using the pipeline: `application,` `infrastructure`, or `audit`.
        *   The `outputRefs` is the name of the output to use.
        *   Optional: String. One or more labels to add to the logs.
1.  Optional: To forward a single output to multiple Kafka brokers, specify an array of Kafka brokers as shown in the following example:
    ```yaml
    # ...
    spec:
      outputs:
      - name: app-logs
        type: kafka
        secret:
          name: kafka-secret-dev
        kafka:  (1)
          brokers: (2)
            - tls://kafka-broker1.example.com:9093/
            - tls://kafka-broker2.example.com:9093/
          topic: app-topic (3)
    # ...
    ```
    1.  Specify a `kafka` key that has a `brokers` and `topic` key.
    1.  Use the `brokers` key to specify an array of one or more brokers.
    1.  Use the `topic` key to specify the target topic that receives the logs.
1.  Apply the `ClusterLogForwarder` CR by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```