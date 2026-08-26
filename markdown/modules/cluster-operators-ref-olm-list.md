{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster Operators {id="cluster-operators-ref-olm-list_{{ context }}"}

{{ olmv0_first }} functionality in {{ product_title }} is provided by a set of cluster Operators. {._abstract}


`operator-lifecycle-manager`
:   Provides the OLM Operator. Also informs cluster administrators if there are any installed Operators blocking cluster upgrade, based on their `olm.maxOpenShiftVersion` properties. For more information, see "Controlling Operator compatibility with {{ product_title }} versions".

`operator-lifecycle-manager-catalog`
:   Provides the Catalog Operator.

`operator-lifecycle-manager-packageserver`
:   Represents an API extension server responsible for collecting metadata from all catalogs on the cluster and serves the user-facing `PackageManifest` API.