{%- set _mod_docs_content_type = "REFERENCE" %}
# Tuning log payloads and delivery {id="logging-delivery-tuning_{{ context }}"}

In {{ logging }} 5.9 and newer versions, the `tuning` spec in the `ClusterLogForwarder` custom resource (CR) provides a means of configuring your deployment to prioritize either throughput or durability of logs.

For example, if you need to reduce the possibility of log loss when the collector restarts, or you require collected log messages to survive a collector restart to support regulatory mandates, you can tune your deployment to prioritize log durability. If you use outputs that have hard limitations on the size of batches they can receive, you may want to tune your deployment to prioritize log throughput.


:::important

To use this feature, your {{ logging }} deployment must be configured to use the Vector collector. The `tuning` spec in the `ClusterLogForwarder` CR is not supported when using the Fluentd collector.

:::


The following example shows the `ClusterLogForwarder` CR options that you can modify to tune log forwarder outputs:

```yaml title="Example ClusterLogForwarder CR tuning options"
apiVersion: logging.openshift.io/v1
kind: ClusterLogForwarder
metadata:
# ...
spec:
  tuning:
    delivery: AtLeastOnce # (1)
    compression: none # (2)
    maxWrite: <integer> # (3)
    minRetryDuration: 1s # (4)
    maxRetryDuration: 1s # (5)
# ...
```
1.  Specify the delivery mode for log forwarding.
    *   `AtLeastOnce` delivery means that if the log forwarder crashes or is restarted, any logs that were read before the crash but not sent to their destination are re-sent. It is possible that some logs are duplicated after a crash.
    *   `AtMostOnce` delivery means that the log forwarder makes no effort to recover logs lost during a crash. This mode gives better throughput, but may result in greater log loss.
1.  Specifying a `compression` configuration causes data to be compressed before it is sent over the network. Note that not all output types support compression, and if the specified compression type is not supported by the output, this results in an error. The possible values for this configuration are `none` for no compression, `gzip`, `snappy`, `zlib`, or `zstd`. `lz4` compression is also available if you are using a Kafka output. See the table "Supported compression types for tuning outputs" for more information.
1.  Specifies a limit for the maximum payload of a single send operation to the output.
1.  Specifies a minimum duration to wait between attempts before retrying delivery after a failure. This value is a string, and can be specified as milliseconds (`ms`), seconds (`s`), or minutes (`m`).
1.  Specifies a maximum duration to wait between attempts before retrying delivery after a failure. This value is a string, and can be specified as milliseconds (`ms`), seconds (`s`), or minutes (`m`).

**Supported compression types for tuning outputs**

| Compression algorithm | Splunk | Amazon Cloudwatch | Elasticsearch 8 | LokiStack | Apache Kafka | HTTP | Syslog | {{ gcp_full }} | Microsoft Azure Monitoring |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `gzip` | X | X | X | X |  | X |  |  |  |
| `snappy` |  | X |  | X | X | X |  |  |  |
| `zlib` |  | X | X |  |  | X |  |  |  |
| `zstd` |  | X |  |  | X | X |  |  |  |
| `lz4` |  |  |  |  | X |  |  |  |  |