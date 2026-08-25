{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster Samples Operator tracking and error recovery of image stream imports {id="samples-operator-retries_{{ context }}"}

After creation or update of a samples image stream, the Cluster Samples Operator monitors the progress of each image stream tag’s image import. {._abstract}

If an import fails, the Cluster Samples Operator retries the import through the image stream image import API at a rate of about every 15 minutes until either one of the following occurs:

*   The import succeeds.
*   The Cluster Samples Operator configuration is changed such that either the image stream is added to the `skippedImagestreams` list, or the management state is changed to `Removed`.