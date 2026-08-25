{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if context == "olm-packaging-format" %}
# Dependencies {id="olm-dependencies_{{ context }}"}

{% endif %}
{% if context != "olm-packaging-format" %}
# Operator dependencies {id="_operator_dependencies"}

{% endif %}

Operator dependencies define relationships between Operators that Operator Lifecycle Manager (OLM) must resolve during installation on {{ product_title }}. You can list these dependencies in the optional `dependencies.yaml` file in a bundle’s `metadata/` folder. {._abstract}

The dependency list contains a `type` field for each item to specify what kind of dependency this is. The following types of Operator dependencies are supported:


`olm.package`
:   This type indicates a dependency for a specific Operator version. The dependency information must include the package name and the version of the package in semver format. For example, you can specify an exact version such as `0.5.2` or a range of versions such as `>0.5.1`.


`olm.gvk`
:   With this type, the author can specify a dependency with group/version/kind (GVK) information, similar to existing CRD and API-based usage in a CSV. This is a path to enable Operator authors to consolidate all dependencies, API or explicit versions, to be in the same place.


`olm.constraint`
:   This type declares generic constraints on arbitrary Operator properties.

In the following example, dependencies are specified for a Prometheus Operator and etcd CRDs:

```yaml title="Example dependencies.yaml file"
dependencies:
  - type: olm.package
    value:
      packageName: prometheus
      version: ">0.27.0"
  - type: olm.gvk
    value:
      group: etcd.database.coreos.com
      kind: EtcdCluster
      version: v1beta2
```