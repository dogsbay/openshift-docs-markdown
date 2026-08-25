{%- set _mod_docs_content_type = "CONCEPT" %}
# Postinstallation requirements {id="olm-mirror-catalog-post_{{ context }}"}

After you mirror the catalog, you can continue with the remainder of your cluster installation. After your cluster installation has finished successfully, you must specify the manifests directory from this procedure to create the `ImageContentSourcePolicy` and `CatalogSource` objects. These objects are required to populate and enable installation of Operators from the software catalog.