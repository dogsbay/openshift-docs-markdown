{%- set _mod_docs_content_type = "CONCEPT" %}

# ClusterExtension API {id="olmv1-clusterextension-api_{{ context }}"}

To manage installed extensions in {{ olmv1 }}, use the `ClusterExtension` API. This consolidated API simplifies extension management by replacing multiple {{ olmv0 }} objects with a single cluster-scoped resource. {._abstract}


:::important

In {{ olmv1 }}, `ClusterExtension` objects are cluster-scoped. This differs from {{ olmv0 }} where Operators can be either namespace-scoped or cluster-scoped. In {{ olmv0 }}, the scope depends on the configuration of related `Subscription` and `OperatorGroup` objects.

For more information about {{ olmv0 }} behavior, see _Multitenancy and Operator colocation_.

:::


```yaml title="Example ClusterExtension object"
apiVersion: olm.operatorframework.io/v1
kind: ClusterExtension
metadata:
  name: <extension_name>
spec:
  namespace: <namespace_name>
  config:
    configType: Inline
    inline:
      watchNamespace: <namespace_name>
  serviceAccount:
    name: <service_account_name>
  source:
    sourceType: Catalog
    catalog:
      packageName: <package_name>
      channels:
        - <channel>
      version: "<version>"
```


`config`
:   If the extension supports watching a specific namespace, use this field to configure extension behavior. For more information, see "Extension configuration".