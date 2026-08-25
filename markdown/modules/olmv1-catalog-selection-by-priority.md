{%- set _mod_docs_content_type = "REFERENCE" %}
# Catalog selection by priority {id="olmv1-catalog-exclusion-by-priority_{{ context }}"}

When multiple catalogs provide the same package, you can resolve ambiguities by specifying the priority in the custom resource (CR) of each catalog. If unspecified, catalogs have a default priority value of `0`. The priority can be any positive or negative 32-bit integer. {._abstract}


:::note

*   During bundle resolution, catalogs with higher priority values are selected over catalogs with lower priority values.
*   Bundles that are not deprecated are prioritized over bundles that are deprecated.
*   If multiple bundles exist in catalogs with the same priority and the catalog selection is ambiguous, an error is printed.

:::


```yaml title="Example cluster catalog CR with a higher priority"
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: high-priority-catalog
spec:
  priority: 1000
  source:
    type: Image
    image:
      ref: quay.io/example/higher-priority-catalog:latest
```

```yaml title="Example cluster catalog CR with a lower priority"
apiVersion: olm.operatorframework.io/v1
kind: ClusterCatalog
metadata:
  name: lower-priority-catalog
spec:
  priority: 10
  source:
    type: Image
    image:
      ref: quay.io/example/lower-priority-catalog:latest
```