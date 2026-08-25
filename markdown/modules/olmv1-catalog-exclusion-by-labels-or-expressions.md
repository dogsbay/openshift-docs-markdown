{%- set _mod_docs_content_type = "REFERENCE" %}
# Catalog exclusion by labels or expressions {id="olmv1-catalog-exclusion-by-labels-or-expressions_{{ context }}"}

You can exclude catalogs by using match expressions on metadata with the `NotIn` or `DoesNotExist` operators. {._abstract}

The following custom resources (CRs) add an `example.com/testing` label to the `unwanted-catalog-1` and `unwanted-catalog-2` cluster catalogs:

```yaml title="Example cluster catalog CR"
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: unwanted-catalog-1
  labels:
    example.com/testing: "true"
spec:
  source:
    type: Image
    image:
      ref: quay.io/example/content-management-a:latest
```

```yaml title="Example cluster catalog CR"
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: unwanted-catalog-2
  labels:
    example.com/testing: "true"
spec:
  source:
    type: Image
    image:
      ref: quay.io/example/content-management-b:latest
```

The following cluster extension CR excludes selection from the `unwanted-catalog-1` catalog:

```yaml title="Example cluster extension CR that excludes a specific catalog"
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
          - key: olm.operatorframework.io/metadata.name
            operator: NotIn
            values:
              - unwanted-catalog-1
```

The following cluster extension CR selects from catalogs that do not have the `example.com/testing` label. As a result, both `unwanted-catalog-1` and `unwanted-catalog-2` are excluded from catalog selection.

```yaml title="Example cluster extension CR that excludes catalogs with a specific label"
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
          - key: example.com/testing
            operator: DoesNotExist
```