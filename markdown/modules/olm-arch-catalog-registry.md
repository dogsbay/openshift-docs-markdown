{%- set _mod_docs_content_type = "CONCEPT" %}
# Catalog Registry {id="olm-arch-catalog-registry_{{ context }}"}

The Catalog Registry stores cluster service versions (CSVs), custom resource definitions (CRDs), and metadata about packages and channels for Operator installation in {{ product_title }}. Package manifests link package identities to CSVs so the Catalog Operator can step through channel upgrade paths. {._abstract}

A _package manifest_ is an entry in the Catalog Registry that associates a package identity with sets of CSVs. Within a package, channels point to a particular CSV. Because CSVs explicitly reference the CSV that they replace, a package manifest provides the Catalog Operator with all of the information that is required to update a CSV to the latest version in a channel, stepping through each intermediate version.