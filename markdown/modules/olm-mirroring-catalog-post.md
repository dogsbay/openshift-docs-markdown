{%- set _mod_docs_content_type = "CONCEPT" %}
# Postinstallation requirements {id="olm-mirror-catalog-post_{{ context }}"}

After mirroring the catalog and completing the cluster installation, you must create `ImageContentSourcePolicy` and `CatalogSource` objects from the manifests directory to enable installation of Operators from the software catalog.