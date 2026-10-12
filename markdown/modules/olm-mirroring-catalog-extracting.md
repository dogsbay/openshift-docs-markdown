{%- set _mod_docs_content_type = "CONCEPT" %}
# Extracting and mirroring catalog contents {id="olm-mirror-catalog-extracting_{{ context }}"}

The `oc adm catalog mirror` command extracts the contents of an index image to generate mirroring manifests, then automatically mirrors all image content and the index image itself to your mirror registry. {._abstract}

Alternatively, if your mirror registry is on a completely disconnected, or _airgapped_, host, you can first mirror the content to removable media, move the media to the disconnected environment, then mirror the content from the media to the registry.