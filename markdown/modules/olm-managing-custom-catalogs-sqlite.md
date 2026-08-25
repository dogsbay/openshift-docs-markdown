{%- set _mod_docs_content_type = "CONCEPT" %}
# SQLite-based catalogs {id="olm-managing-custom-catalogs-sqlite_{{ context }}"}

SQLite-based Operator catalogs in {{ product_title }} use index images that you create, update, and prune with the `opm` CLI. {._abstract}

{%- set FeatureName = "The SQLite database format for Operator catalogs" %}
{% include "./snippets/deprecated-feature.md" %}
{%- set FeatureName = "" -%}