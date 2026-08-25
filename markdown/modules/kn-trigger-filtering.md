{%- set _mod_docs_content_type = "REFERENCE" %}
# Filtering events with triggers by using the Knative CLI {id="kn-trigger-filtering_{{ context }}"}

In the following trigger example, only events with the attribute `type: dev.knative.samples.helloworld` are sent to the event sink:

```terminal
$ kn trigger create <trigger_name> --broker <broker_name> --filter type=dev.knative.samples.helloworld --sink ksvc:<service_name>
```

You can also filter events by using multiple attributes. The following example shows how to filter events using the type, source, and extension attributes:

```terminal
$ kn trigger create <trigger_name> --broker <broker_name> --sink ksvc:<service_name> \
--filter type=dev.knative.samples.helloworld \
--filter source=dev.knative.samples/helloworldsource \
--filter myextension=my-extension-value
```