{%- set _mod_docs_content_type = "CONCEPT" %}
# Populating the software catalog from mirrored Operator catalogs {id="post-install-mirrored-catalogs_{{ context }}"}

If you mirrored Operator catalogs for use with disconnected clusters, you can populate the software catalog with the Operators from your mirrored catalogs. You can use the generated manifests from the mirroring process to create the required `ImageContentSourcePolicy` and `CatalogSource` objects. {._abstract}

***Prerequisites***

*   You mirrored Operator catalogs for use with disconnected clusters.