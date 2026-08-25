{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connecting a trigger to a sink {id="connect-trigger-sink"}
{%- set context = "connect-trigger-sink" %}

You can connect a trigger to a sink, so that events from a broker are filtered before they are sent to the sink. A sink that is connected to a trigger is configured as a `subscriber` in the `Trigger` object’s resource spec.

```yaml title="Example of a Trigger object connected to an Apache Kafka sink"
apiVersion: eventing.knative.dev/v1
kind: Trigger
metadata:
  name: <trigger_name> (1)
spec:
...
  subscriber:
    ref:
      apiVersion: eventing.knative.dev/v1alpha1
      kind: KafkaSink
      name: <kafka_sink_name> (2)
```
1.  The name of the trigger being connected to the sink.
1.  The name of a `KafkaSink` object.