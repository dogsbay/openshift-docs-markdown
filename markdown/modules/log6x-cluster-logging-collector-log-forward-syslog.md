{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding logs using the syslog protocol {id="cluster-logging-collector-log-forward-syslog-6x_{{ context }}"}

You can use the syslog [RFC3164](https://tools.ietf.org/html/rfc3164) or [RFC5424](https://tools.ietf.org/html/rfc5424) protocol to send a copy of your logs to an external log aggregator that is configured to accept the protocol instead of, or in addition to, the default Elasticsearch log store. You are responsible for configuring the external log aggregator, such as a syslog server, to receive the logs from {{ product_title }}.

To configure log forwarding using the syslog protocol, you must create a `ClusterLogForwarder` custom resource (CR) with one or more outputs to the syslog servers, and pipelines that use those outputs. The syslog output can use a UDP, TCP, or TLS connection.

**Prerequisites**

*   You must have a logging server that is configured to receive the logging data using the specified protocol or format.

**Procedure**

1.  Create or edit a YAML file that defines the `ClusterLogForwarder` CR object:
    ```yaml
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: collector
    spec:
      managementState: Managed
      outputs:
      - name: rsyslog-east (1)
        syslog:
          appName: <app_name> (2)
          enrichment: KubernetesMinimal
          facility: <facility_value> (3)
          msgId: <message_ID> (4)
          payloadKey: <record_field> (5)
          procId: <process_ID> (6)
          rfc: <RFC3164_or_RFC5424> (7)
          severity: informational (8)
          tuning:
            deliveryMode: <AtLeastOnce_or_AtMostOnce> (9)
          url: <url> (10)
        tls: (11)
          ca:
            key: ca-bundle.crt
            secretName: syslog-secret
        type: syslog
      pipelines:
      - inputRefs: (12)
        - application
        name: syslog-east (13)
        outputRefs:
        - rsyslog-east
      serviceAccount: (14)
        name: logcollector
    ```
    1.  Specify a name for the output.
    1.  Optional: Specify the value for the `APP-NAME` part of the syslog message header. The value must conform with [The Syslog Protocol](https://datatracker.ietf.org/doc/html/rfc5424). The value can be a combination of static and dynamic values consisting of field paths followed by `||`, and then followed by another field path or a static value. The maximum length of the final values is truncated to 48 characters. You must encase a dynamic value curly brackets and the value must be followed with a static fallback value separated with `||`. Static values can only contain alphanumeric characters along with dashes, underscores, dots and forward slashes. Example value: &lt;value1>-{.&lt;value2>||"none"}.
    1.  Optional: Specify the value for `Facility` part of the syslog-msg header.
    1.  Optional: Specify the value for `MSGID` part of the syslog-msg header. The value can be a combination of static and dynamic values consisting of field paths followed by `||`, and then followed by another field path or a static value. The maximum length of the final values is truncated to 32 characters. You must encase a dynamic value curly brackets and the value must be followed with a static fallback value separated with `||`. Static values can only contain alphanumeric characters along with dashes, underscores, dots and forward slashes. Example value: &lt;value1>-{.&lt;value2>||"none"}.
    1.  Optional: Specify the record field to use as the payload. The `payloadKey` value must be a single field path encased in single curly brackets `{}`. Example: {.&lt;value>}.
    1.  Optional: Specify the value for the `PROCID` part of the syslog message header. The value must conform with [The Syslog Protocol](https://datatracker.ietf.org/doc/html/rfc5424). The value can be a combination of static and dynamic values consisting of field paths followed by `||`, and then followed by another field path or a static value. The maximum length of the final values is truncated to 48 characters. You must encase a dynamic value curly brackets and the value must be followed with a static fallback value separated with `||`. Static values can only contain alphanumeric characters along with dashes, underscores, dots and forward slashes. Example value: &lt;value1>-{.&lt;value2>||"none"}.
    1.  Optional: Set the RFC that the generated messages conform to. The value can be `RFC3164` or `RFC5424`.
    1.  Optional: Set the severity level for the message. For more information, see [The Syslog Protocol](https://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1).
    1.  Optional: Set the delivery mode for log forwarding. The value can be either `AtLeastOnce`, or `AtMostOnce`.
    1.  Specify the absolute URL with a scheme. Valid schemes are: `tcp`, `tls`, and `udp`. For example: `tls://syslog-receiver.example.com:6514`.
    1.  Specify the settings for controlling options of the transport layer security (TLS) client connections.
    1.  Specify which log types to forward by using the pipeline: `application,` `infrastructure`, or `audit`.
    1.  Specify a name for the pipeline.
    1.  The name of your service account.
1.  Create the CR object:
    ```terminal
    $ oc create -f <filename>.yaml
    ```

## Adding log source information to the message output {id="cluster-logging-collector-log-forward-examples-syslog-log-source_{{ context }}"}

You can add `namespace_name`, `pod_name`, and `container_name` elements to the `message` field of the record by adding the `enrichment` field to your `ClusterLogForwarder` custom resource (CR).

```yaml
# ...
  spec:
    outputs:
    - name: syslogout
      syslog:
        enrichment: KubernetesMinimal
        facility: user
        payloadKey: message
        rfc: RFC3164
        severity: debug
      type: syslog
      url: tls://syslog-receiver.example.com:6514
    pipelines:
    - inputRefs:
      - application
      name: test-app
      outputRefs:
      - syslogout
# ...
```


:::note

This configuration is compatible with both RFC3164 and RFC5424.

:::


```text title="Example syslog message output with enrichment: None"
 2025-03-03T11:48:01+00:00  example-worker-x  syslogsyslogserverd846bb9b: {...}
```

```text title="Example syslog message output with enrichment: KubernetesMinimal"
2025-03-03T11:48:01+00:00  example-worker-x  syslogsyslogserverd846bb9b: namespace_name=cakephp-project container_name=mysql pod_name=mysql-1-wr96h,message: {...} 
```