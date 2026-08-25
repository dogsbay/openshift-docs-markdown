{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring log forwarder output rate limits {id="logging-set-output-rate-limit_{{ context }}"}

You can limit the rate of outbound logs to a specified output by configuring the `ClusterLogForwarder` custom resource (CR).

**Prerequisites**

*   You have installed the {{ clo }}.
*   You have administrator permissions.

**Procedure**

1.  Add a `maxRecordsPerSecond` limit value to the `ClusterLogForwarder` CR for a specified output.

    The following example shows how to configure a per collector output rate limit for a Kafka broker output named `kafka-example`:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
    # ...
    spec:
    # ...
      outputs:
        - name: kafka-example (1)
          type: kafka (2)
          limit:
            maxRecordsPerSecond: 1000000 (3)
    # ...
    ```
    1.  The output name.
    1.  The type of output.
    1.  The log output rate limit. This value sets the maximum [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/) of logs that can be sent to the Kafka broker per second. This value is not set by default. The default behavior is best effort, and records are dropped if the log forwarder cannot keep up. If this value is `0`, no logs are forwarded.
1.  Apply the `ClusterLogForwarder` CR:
    ```terminal title="Example command"
    $ oc apply -f <filename>.yaml
    ```