{%- set _mod_docs_content_type = "CONCEPT" %}
# Allow containers to consume API objects {id="allow-containers-to-consume-api-objects-con_{{ context }}"}

The Downward API lets a container read information about itself and about the pod it runs in, such as labels, annotations, resource limits, and the pod name, without calling the {{ product_title }} API. You expose that information to the container as environment variables or as files in a volume.