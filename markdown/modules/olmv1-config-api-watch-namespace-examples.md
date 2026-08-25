{%- set _mod_docs_content_type = "REFERENCE" %}
# Watch namespace configuration examples {id="olmv1-config-api-watch-namespace-examples_{{ context }}"}

To configure the `watchNamespace` field correctly for your bundle’s install mode, see the following examples. These show valid configurations for Operators that support the `AllNamespaces`, `OwnNamespace`, and `SingleNamespace` install modes. {._abstract}

```yaml title="Example AllNamespaces install mode"
apiVersion: olm.operatorframework.io/v1
kind: ClusterExtension
metadata:
  name: example-extension
spec:
  namespace: openshift-operators
  serviceAccount:
    name: example-sa
  source:
    sourceType: Catalog
    catalog:
      packageName: example-operator
```

*   The `config` field is omitted. The extension watches all namespaces by default.

```yaml title="Example OwnNamespace install mode"
apiVersion: olm.operatorframework.io/v1
kind: ClusterExtension
metadata:
  name: example-extension
spec:
  namespace: example-operators
  config:
    configType: Inline
    inline:
      watchNamespace: example-operators
  serviceAccount:
    name: example-sa
  source:
    sourceType: Catalog
    catalog:
      packageName: example-operator
```

*   You must set the `watchNamespace` field to use the `OwnNamespace` install mode.
*   The `watchNamespace` value must match the `spec.namespace` field value.

```yaml title="Example SingleNamespace install mode"
apiVersion: olm.operatorframework.io/v1
kind: ClusterExtension
metadata:
  name: example-extension
spec:
  namespace: example-operators
  config:
    configType: Inline
    inline:
      watchNamespace: production
  serviceAccount:
    name: example-sa
  source:
    sourceType: Catalog
    catalog:
      packageName: example-operator
```

*   You must set the `watchNamespace` field to use the `SingleNamespace` install mode.
*   The `watchNamespace` value must differ from the `spec.namespace` field value.
*   In this example, the extension runs in the `example-operators` namespace but watches resources in the `production` namespace.