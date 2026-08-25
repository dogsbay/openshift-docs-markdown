{%- set _mod_docs_content_type = "REFERENCE" %}
# Container source reference {id="serverless-containersource-reference_{{ context }}"}

You can use a container as an event source, by creating a `ContainerSource` object. You can configure multiple parameters when creating a `ContainerSource` object.

`ContainerSource` objects support the following fields:

| Field | Description | Required or optional |
| --- | --- | --- |
| `apiVersion` | Specifies the API version, for example `sources.knative.dev/v1`. | Required |
| `kind` | Identifies this resource object as a `ContainerSource` object. | Required |
| `metadata` | Specifies metadata that uniquely identifies the `ContainerSource` object. For example, a `name`. | Required |
| `spec` | Specifies the configuration information for this `ContainerSource` object. | Required |
| `spec.sink` | A reference to an object that resolves to a URI to use as the sink. | Required |
| `spec.template` | A `template` spec for the `ContainerSource` object. | Required |
| `spec.ceOverrides` | Defines overrides to control the output format and modifications to the event sent to the sink. | Optional |

```yaml title="Template parameter example"
apiVersion: sources.knative.dev/v1
kind: ContainerSource
metadata:
  name: test-heartbeats
spec:
  template:
    spec:
      containers:
        - image: quay.io/openshift-knative/heartbeats:latest
          name: heartbeats
          args:
            - --period=1
          env:
            - name: POD_NAME
              value: "mypod"
            - name: POD_NAMESPACE
              value: "event-test"
  ...
```

## CloudEvent overrides {id="serverless-containersource-reference-cloudevent-overrides_{{ context }}"}

A `ceOverrides` definition provides overrides that control the CloudEvent’s output format and modifications sent to the sink. You can configure multiple fields for the `ceOverrides` definition.

A `ceOverrides` definition supports the following fields:

| Field | Description | Required or optional |
| --- | --- | --- |
| `extensions` | Specifies which attributes are added or overridden on the outbound event. Each `extensions` key-value pair is set independently on the event as an attribute extension. | Optional |


:::note

Only valid `CloudEvent` attribute names are allowed as extensions. You cannot set the spec defined attributes from the extensions override configuration. For example, you can not modify the `type` attribute.

:::


```yaml title="CloudEvent Overrides example"
apiVersion: sources.knative.dev/v1
kind: ContainerSource
metadata:
  name: test-heartbeats
spec:
  ...
  ceOverrides:
    extensions:
      extra: this is an extra attribute
      additional: 42
```

This sets the `K_CE_OVERRIDES` environment variable on the `subject`:

```terminal title="Example output"
{ "extensions": { "extra": "this is an extra attribute", "additional": "42" } }
```