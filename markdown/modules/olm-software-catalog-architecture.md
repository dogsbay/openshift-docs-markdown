{%- set _mod_docs_content_type = "CONCEPT" %}

# Software catalog architecture {id="olm-software-catalog-arch_{{ context }}"}

The software catalog UI component is driven by the Marketplace Operator by default on {{ product_title }} in the `openshift-marketplace` namespace. {._abstract}

## OperatorHub custom resource {id="olm-software-catalog-arch-operatorhub-crd_{{ context }}"}

The Marketplace Operator manages an `OperatorHub` custom resource (CR) named `cluster` that manages the default `CatalogSource` objects provided with the software catalog.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
You can modify this resource to enable or disable the default catalogs, which is useful when configuring {{ product_title }} in restricted network environments.

```yaml title="Example OperatorHub custom resource"
apiVersion: config.openshift.io/v1
kind: OperatorHub
metadata:
  name: cluster
spec:
  disableAllDefaultSources: true (1)
  sources: [ (2)
    {
      name: "community-operators",
      disabled: false
    }
  ]
```
1.  `disableAllDefaultSources` is an override that controls availability of all default catalogs that are configured by default during an {{ product_title }} installation.
1.  Disable default catalogs individually by changing the `disabled` parameter value per source.
{% endif %}