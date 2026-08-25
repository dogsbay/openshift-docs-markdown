# Parsing JSON logs {id="cluster-logging-json-log-forwarding_{{ context }}"}

You can use a `ClusterLogForwarder` object to parse JSON logs into a structured object and forward them to a supported output.

To illustrate how this works, suppose that you have the following structured JSON log entry:

```yaml title="Example structured JSON log entry"
{"level":"info","name":"fred","home":"bedrock"}
```

To enable parsing JSON log, you add `parse: json` to a pipeline in the `ClusterLogForwarder` CR, as shown in the following example:

```yaml title="Example snippet showing parse: json"
pipelines:
- inputRefs: [ application ]
  outputRefs: myFluentd
  parse: json
```

When you enable parsing JSON logs by using `parse: json`, the CR copies the JSON-structured log entry in a `structured` field, as shown in the following example:

```yaml title="Example structured output containing the structured JSON log entry"
{"structured": { "level": "info", "name": "fred", "home": "bedrock" },
 "more fields..."}
```


:::important

If the log entry does not contain valid structured JSON, the `structured` field is absent.

:::