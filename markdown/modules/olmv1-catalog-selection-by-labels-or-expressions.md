{%- set _mod_docs_content_type = "REFERENCE" %}
# Catalog selection by labels or expressions {id="olmv1-catalog-selection-by-labels-or-exp_{{ context }}"}

You can add metadata to a catalog by using labels in the custom resource (CR) of a cluster catalog. You can then filter catalog selection by specifying the assigned labels or using expressions in the CR of the cluster extension. {._abstract}

The following cluster catalog CR adds the `example.com/support` label with the value of `true` to the `catalog-a` cluster catalog:

```yaml title="Example cluster catalog CR with labels"
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: catalog-a
  labels:
    example.com/support: "true"
spec:
  source:
    type: Image
    image:
      ref: quay.io/example/content-management-a:latest
```

The following cluster extension CR uses the `matchLabels` selector to select catalogs with the `example.com/support` label and the value of `true`:

```yaml title="Example cluster extension CR with matchLabels selector"
apiVersion: olm.operatorframework.io/v1
kind: ClusterExtension
metadata:
  name: <example_extension>
spec:
  namespace: <example_namespace>
  serviceAccount:
    name: <example_extension>-installer
  source:
    sourceType: Catalog
    catalog:
      packageName: <example_extension>-operator
      selector:
        matchLabels:
          example.com/support: "true"
```

You can use the `matchExpressions` field to perform more complex filtering for labels. The following cluster extension CR selects catalogs with the `example.com/support` label and a value of `production` or `supported`:

```yaml title="Example cluster extension CR with matchExpression selector"
apiVersion: olm.operatorframework.io/v1
kind: ClusterExtension
metadata:
  name: <example_extension>
spec:
  namespace: <example_namespace>
  serviceAccount:
    name: <example_extension>-installer
  source:
    sourceType: Catalog
    catalog:
      packageName: <example_extension>-operator
      selector:
        matchExpressions:
          - key: example.com/support
            operator: In
            values:
              - "production"
              - "supported"
```


:::note

If you use both the `matchLabels` and `matchExpressions` fields, the selected catalog must satisfy all specified criteria.

:::