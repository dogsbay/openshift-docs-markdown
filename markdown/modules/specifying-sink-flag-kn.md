{%- set _mod_docs_content_type = "REFERENCE" %}
# Knative CLI sink flag {id="specifying-sink-flag-kn_{{ context }}"}

When you create an event source by using the Knative (`kn`) CLI, you can specify a sink where events are sent to from that resource by using the `--sink` flag. The sink can be any addressable or callable resource that can receive incoming events from other resources.

The following example creates a sink binding that uses a service, `http://event-display.svc.cluster.local`, as the sink:

```terminal title="Example command using the sink flag"
$ kn source binding create bind-heartbeat \
  --namespace sinkbinding-example \
  --subject "Job:batch/v1:app=heartbeat-cron" \
  --sink http://event-display.svc.cluster.local \ (1)
  --ce-override "sink=bound"
```
1.  `svc` in `http://event-display.svc.cluster.local` determines that the sink is a Knative service. Other default sink prefixes include `channel`, and `broker`.