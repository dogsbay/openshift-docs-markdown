{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuration change triggers {id="builds-configuration-change-triggers_{{ context }}"}

A configuration change trigger allows a build to be automatically invoked as soon as a new `BuildConfig` is created.

The following is an example trigger definition YAML within the `BuildConfig`:

```yaml
  type: "ConfigChange"
```


:::note

Configuration change triggers currently only work when creating a new `BuildConfig`. In a future release, configuration change triggers will also be able to launch a build whenever a `BuildConfig` is updated.

:::