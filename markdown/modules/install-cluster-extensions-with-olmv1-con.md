{%- set _mod_docs_content_type = "CONCEPT" %}
# Install cluster extensions with {{ olmv1 }} {id="install-cluster-extensions-with-olmv1-con_{{ context }}"}

Operators are a type of cluster extension. In this release, Operators are the only type of cluster extension supported by {{ olmv1 }}. {._abstract}

You use catalogs to access the versions, patches, and over-the-air updates for extensions and Operators. You use custom resources (CRs) to manage extensions declaratively from the CLI.