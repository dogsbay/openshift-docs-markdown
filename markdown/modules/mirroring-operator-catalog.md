{%- set _mod_docs_content_type = "CONCEPT" %}
# Mirroring an Operator catalog {id="olm-mirror-catalog_{{ context }}"}

For instructions about mirroring Operator catalogs for use with disconnected clusters, see "Mirroring Operator catalogs for use with disconnected clusters". {._abstract}


:::important

As of {{ product_title }} 4.11, the default Red&#160;Hat-provided Operator catalog releases in the file-based catalog format. The default Red&#160;Hat-provided Operator catalogs for {{ product_title }} 4.6 through 4.10 released in the deprecated SQLite database format.

The `opm` subcommands, flags, and functionality related to the SQLite database format are also deprecated and will be removed in a future release. The features are still supported and must be used for catalogs that use the deprecated SQLite database format.

Many of the `opm` subcommands and flags for working with the SQLite database format, such as `opm index prune`, do not work with the file-based catalog format. For more information about working with file-based catalogs, see "Operator Framework packaging format", "Managing custom catalogs", and "Mirroring images for a disconnected installation by using the oc-mirror plugin v2".

:::