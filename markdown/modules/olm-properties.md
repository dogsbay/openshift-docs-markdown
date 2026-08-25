{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if context == "olm-packaging-format" %}
# Properties {id="olm-properties_{{ context }}"}

{% endif %}
{% if context != "olm-packaging-format" %}
# Operator properties {id="_operator_properties"}

{% endif %}

OLM uses the `olm.package` and `olm.gvk` properties of every Operator in a catalog to identify the Operator and resolve its dependencies. {._abstract}


`olm.package`
:   Includes the name of the package and the version of the Operator


`olm.gvk`
:   A single property for each provided API from the cluster service version (CSV)

Additional properties can also be directly declared by an Operator author by including a `properties.yaml` file in the `metadata/` directory of the Operator bundle.

```yaml title="Example arbitrary property"
properties:
- type: olm.kubeversion
  value:
    version: "1.16.0"
```

## Arbitrary properties {id="olm-arbitrary-properties_{{ context }}"}

Operator authors can declare arbitrary properties in a `properties.yaml` file in the `metadata/` directory of the Operator bundle. These properties are translated into a map data structure that is used as an input to the Operator Lifecycle Manager (OLM) resolver at runtime.

These properties are opaque to the resolver as it does not understand the properties, but it can evaluate the generic constraints against those properties to determine if the constraints can be satisfied given the properties list.

```yaml title="Example arbitrary properties"
properties:
  - property:
      type: color
      value: red
  - property:
      type: shape
      value: square
  - property:
      type: olm.gvk
      value:
        group: olm.coreos.io
        version: v1alpha1
        kind: myresource
```

This structure can be used to construct a Common Expression Language (CEL) expression for generic constraints.