{%- set _mod_docs_content_type = "CONCEPT" %}
# Categories of exposable binding data {id="sbo-categories-of-exposable-binding-data_{{ context }}"}

The {{ servicebinding_title }} enables you to expose the binding data values from the backing service resources and custom resource definitions (CRDs). {._abstract}

This section provides examples to show how you can use the various categories of exposable binding data. You must modify these examples to suit your work environment and requirements.

## Exposing a string from a resource {id="exposing-a-string-from-a-resource_{{ context }}"}
The following example shows how to expose the string from the `metadata.name` field of the `PostgresCluster` custom resource (CR) as a username:

```yaml title="Example"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    service.binding/username: path={.metadata.name}
# ...
```

## Exposing a constant value as the binding item {id="exposing-a-constant-value-as-the-binding-item_{{ context }}"}
The following examples show how to expose a constant value from the `PostgresCluster` custom resource (CR):

```yaml title="Example: Exposing a constant value"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    "service.binding/type": "postgresql" (1)
```
1.  Binding `type` to be exposed with the `postgresql` value.

## Exposing an entire config map or secret that is referenced from a resource {id="exposing-an-entire-config-map-or-secret-that-is-referenced-from-a-resource_{{ context }}"}
The following examples show how to expose an entire secret through annotations:

```yaml title="Example: Exposing an entire secret through annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    service.binding: 'path={.metadata.name}-pguser-{.metadata.name},objectType=Secret'
```

```yaml title="Example: The referenced secret from the backing service resource"
apiVersion: v1
kind: Secret
metadata:
  name: hippo-pguser-hippo
data:
  password: "<password>"
  user: "<username>"
```

## Exposing a specific entry from a config map or secret that is referenced from a resource {id="exposing-a-specific-entry-from-a-config-map-or-secret-that-is-referenced-from-a-resource_{{ context }}"}
The following examples show how to expose a specific entry from a config map through annotations:

```yaml title="Example: Exposing an entry from a config map through annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    service.binding: 'path={.metadata.name}-config,objectType=ConfigMap,sourceKey=user'
```

**Example: The referenced config map from the backing service resource**

The binding data should have a key with name as `db_timeout` and value as `10s`:
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: hippo-config
data:
  db_timeout: "10s"
  user: "hippo"
```

## Exposing a resource definition value {id="exposing-a-resource-definition-value_{{ context }}"}
The following example shows how to expose a resource definition value through annotations:

```yaml title="Example: Exposing a resource definition value through annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    service.binding/username: path={.metadata.name}
    ...
```

## Exposing entries of a collection with the key and value from each entry {id="exposing-entries-of-a-collection-with-the-key-and-value-from-each-entry_{{ context }}"}
The following example shows how to expose the entries of a collection with the key and value from each entry through annotations:

```yaml title="Example: Exposing the entries of a collection through annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    "service.binding/uri": "path={.status.connections},elementType=sliceOfMaps,sourceKey=type,sourceValue=url"
spec:
# ...
status:
  connections:
    - type: primary
      url: primary.example.com
    - type: secondary
      url: secondary.example.com
    - type: '404'
      url: black-hole.example.com
```

The following example shows how the previous entries of a collection in annotations are projected into the bound application.

```text title="Example: Binding data files"
/bindings/<binding-name>/uri_primary => primary.example.com
/bindings/<binding-name>/uri_secondary => secondary.example.com
/bindings/<binding-name>/uri_404 => black-hole.example.com
```

```yaml title="Example: Configuration from a backing service resource"
status:
  connections:
    - type: primary
      url: primary.example.com
    - type: secondary
      url: secondary.example.com
    - type: '404'
      url: black-hole.example.com
```

The previous example helps you to project all those values with keys such as `primary`,
`secondary`, and so on.

## Exposing items of a collection with one key per item {id="exposing-items-of-a-collection-with-one-key-per-item_{{ context }}"}
The following example shows how to expose the items of a collection with one key per item through annotations:

```yaml title="Example: Exposing the items of a collection through annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    "service.binding/tags": "path={.spec.tags},elementType=sliceOfStrings"
spec:
    tags:
      - knowledge
      - is
      - power
```

The following example shows how the previous items of a collection in annotations are projected into the bound application.

```text title="Example: Binding data files"
/bindings/<binding-name>/tags_0 => knowledge
/bindings/<binding-name>/tags_1 => is
/bindings/<binding-name>/tags_2 => power
```

```yaml title="Example: Configuration from a backing service resource"
spec:
  tags:
  - knowledge
  - is
  - power
```

## Exposing values of collection entries with one key per entry value {id="exposing-values-of-collection-entries-with-one-key-per-entry-value_{{ context }}"}
The following example shows how to expose the values of collection entries with one key per entry value through annotations:

```yaml title="Example: Exposing the values of collection entries through annotations"
apiVersion: postgres-operator.crunchydata.com/v1beta1
kind: PostgresCluster
metadata:
  name: hippo
  namespace: my-petclinic
  annotations:
    "service.binding/url": "path={.spec.connections},elementType=sliceOfStrings,sourceValue=url"
spec:
  connections:
    - type: primary
      url: primary.example.com
    - type: secondary
      url: secondary.example.com
    - type: '404'
      url: black-hole.example.com
```

The following example shows how the previous values of a collection in annotations are projected into the bound application.

```text title="Example: Binding data files"
/bindings/<binding-name>/url_0 => primary.example.com
/bindings/<binding-name>/url_1 => secondary.example.com
/bindings/<binding-name>/url_2 => black-hole.example.com
```