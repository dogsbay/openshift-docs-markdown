{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding how to consume container resources using the Downward API {id="nodes-containers-downward-api-container-resources-api_{{ context }}"}

When creating pods, you can use the Downward API to inject information about
computing resource requests and limits so that image and application authors can
correctly create an image for specific environments. {._abstract}

You can do this using environment variable or a volume plugin.