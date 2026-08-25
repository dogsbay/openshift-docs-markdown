{%- set _mod_docs_content_type = "CONCEPT" %}
# About the oc-mirror plugin for creating a mirror registry {id="microshift-using-oc-mirror_{{ context }}"}

You can use the oc-mirror {{ oc_first }} plugin with {{ microshift_short }} to filter and delete images from Operator catalogs. You can then mirror the filtered catalog contents to a mirror registry or use the container images in disconnected or offline deployments. {._abstract}

The procedure to mirror content from Red Hat-hosted registries connected to the internet to a disconnected image registry is the same, independent of the registry you select. After you mirror the contents of your catalog, configure each node to retrieve this content from your mirror registry.