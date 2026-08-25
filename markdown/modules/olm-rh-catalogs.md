{%- set tag = "v{{ product_version }}" -%}
{% if openshift_origin %}
{%- set global_ns = "olm" -%}
{% endif %}
{% if not openshift_origin %}
{%- set global_ns = "openshift-marketplace" -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# About Red&#160;Hat-provided Operator catalogs {id="olm-rh-catalogs_{{ context }}"}

The Red&#160;Hat-provided catalog sources are installed by default in the `{{ global_ns }}` namespace, which makes the catalogs available cluster-wide in all namespaces. {._abstract}

The following Operator catalogs are distributed by Red&#160;Hat:

| Catalog | Index image | Description |
| --- | --- | --- |
| `redhat-operators` | `registry.redhat.io/redhat/redhat-operator-index:{{ tag }}` | Red&#160;Hat products packaged and shipped by Red&#160;Hat. Supported by Red&#160;Hat. |
| `certified-operators` | `registry.redhat.io/redhat/certified-operator-index:{{ tag }}` | Products from leading independent software vendors (ISVs). Red&#160;Hat partners with ISVs to package and ship. Supported by the ISV. |
| `community-operators` | `registry.redhat.io/redhat/community-operator-index:{{ tag }}` | Software maintained by relevant representatives in the community Operators GitHub repository. No official support. |

During a cluster upgrade, the index image tag for the default Red&#160;Hat-provided catalog sources are updated automatically by the Cluster Version Operator (CVO) so that Operator Lifecycle Manager (OLM) pulls the updated version of the catalog. For example, during an upgrade from {{ product_title }} 4.8 to 4.9, the `spec.image` field in the `CatalogSource` object for the `redhat-operators` catalog is updated from:

```text
registry.redhat.io/redhat/redhat-operator-index:v4.8
```

to:

```text
registry.redhat.io/redhat/redhat-operator-index:v4.9
```

{%- set tag = false -%}