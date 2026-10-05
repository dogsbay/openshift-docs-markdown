{%- set _mod_docs_content_type = "REFERENCE" %}
# Annotating image objects {id="security-annotating-image-objects_{{ context }}"}

While image stream objects are what a user of {{ product_title }} operates against, image objects are annotated with security metadata. Image objects are cluster-scoped, pointing to a single image that might be referenced by many image streams and tags.