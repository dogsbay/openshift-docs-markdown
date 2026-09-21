{%- set _mod_docs_content_type = "CONCEPT" %}
# Reclaim registry storage {id="reclaim-registry-storage-con_{{ context }}"}

The storage used by the integrated container image registry grows over time as builds and deployments accumulate images that nothing references. You can reclaim that storage by pruning stale images, and by hard pruning the registry to remove the underlying blobs that pruning leaves behind.