{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multi-line exception detection {id="logging-multiline-except_{{ context }}"}

Enables multi-line error detection of container logs.


:::warning

Enabling this feature could have performance implications and may require additional computing resources or alternate logging solutions.

:::


Log parsers often incorrectly identify separate lines of the same exception as separate exceptions. This leads to extra log entries and an incomplete or inaccurate view of the traced information.

```text title="Example java exception"
java.lang.NullPointerException: Cannot invoke "String.toString()" because "<param1>" is null
    at testjava.Main.handle(Main.java:47)
    at testjava.Main.printMe(Main.java:19)
    at testjava.Main.main(Main.java:10)
```

*   To enable logging to detect multi-line exceptions and reassemble them into a single log entry, ensure that the `ClusterLogForwarder` Custom Resource (CR) contains a `detectMultilineErrors` field, with a value of `true`.

```yaml title="Example ClusterLogForwarder CR"
apiVersion: logging.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: instance
  namespace: openshift-logging
spec:
  pipelines:
    - name: my-app-logs
      inputRefs:
        - application
      outputRefs:
        - default
      detectMultilineErrors: true
```

## Details {id="_details"}
When log messages appear as a consecutive sequence forming an exception stack trace, they are combined into a single, unified log record. The first log message’s content is replaced with the concatenated content of all the message fields in the sequence.

**Supported languages per collector**

| Language | Fluentd | Vector |
| --- | --- | --- |
| Java | ✓ | ✓ |
| JS | ✓ | ✓ |
| Ruby | ✓ | ✓ |
| Python | ✓ | ✓ |
| Golang | ✓ | ✓ |
| PHP | ✓ | ✓ |
| Dart | ✓ | ✓ |

## Troubleshooting {id="_troubleshooting"}
When enabled, the collector configuration will include a new section with type: `detect_exceptions`

```text title="Example vector configuration section"
[transforms.detect_exceptions_app-logs]
 type = "detect_exceptions"
 inputs = ["application"]
 languages = ["All"]
 group_by = ["kubernetes.namespace_name","kubernetes.pod_name","kubernetes.container_name"]
 expire_after_ms = 2000
 multiline_flush_interval_ms = 1000
```

```text title="Example fluentd config section"
<label @MULTILINE_APP_LOGS>
  <match kubernetes.**>
    @type detect_exceptions
    remove_tag_prefix 'kubernetes'
    message message
    force_line_breaks true
    multiline_flush_interval .2
  </match>
</label>

```