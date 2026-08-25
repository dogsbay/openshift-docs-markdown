{%- set _mod_docs_content_type = "CONCEPT" %}
# Changing the default service account for {{ pipelines_shortname }} {id="op-changing-default-service-account_{{ context }}"}

You can change the default service account for {{ pipelines_shortname }} by editing the `default-service-account` field in the `.spec.pipeline` and `.spec.trigger` specifications. The default service account name is `pipeline`.

```yaml title="Example"
apiVersion: operator.tekton.dev/v1alpha1
kind: TektonConfig
metadata:
  name: config
spec:
  pipeline:
    default-service-account: pipeline
  trigger:
    default-service-account: pipeline
    enable-api-fields: stable
```