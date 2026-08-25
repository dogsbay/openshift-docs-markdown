{%- set _mod_docs_content_type = "CONCEPT" %}
# Extension configuration {id="olmv1-config-api_{{ context }}"}

Configure the namespace an extension watches by using the `.spec.config` field in the `ClusterExtension` resource. {._abstract}

{%- set FeatureName = "{{ olmv1 }} configuration API" %}
{% include "./snippets/technology-preview.md" %}

Extensions watch all namespaces by default. Some Operators support only namespace-scoped watching based on {{ olmv0 }} install modes. Configure the `.spec.config.inline.watchNamespace` field to install these Operators.

Whether you must configure this field depends on the install modes supported by the bundle.

## Configuration API structure {id="olmv1-config-api-structure_{{ context }}"}

The configuration API uses an opaque structure. The bundle validates the configuration values, not {{ olmv1 }}. Operator authors can define their own configuration requirements.

Currently, the `Inline` configuration type is the only supported type:

```yaml title="Example inline configuration"
apiVersion: olm.operatorframework.io/v1
kind: ClusterExtension
metadata:
  name: <extension_name>
...
spec:
  namespace: <installation_namespace>
  config:
    configType: Inline
    inline:
      watchNamespace: <watch_namespace>
```
where:


`<installation_namespace>`
:   Specifies the namespace where the extension components run.

`config.configType`
:   Specifies the configuration type. Currently, `Inline` is the only supported type.

`<watch_namespace>`
:   Specifies the namespace where the extension watches for custom resources. The watch namespace can match or differ from the installation namespace, depending on the install modes supported by the bundle.