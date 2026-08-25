{%- set _mod_docs_content_type = "REFERENCE" %}
# Image stream triggers {id="images-imagestream-trigger_{{ context }}"}

Image stream triggers in {{ product_title }} cause specific actions when image stream tags change. You can configure triggers to automatically start builds or deployments when new images are imported. {._abstract}

For example, importing a new image can cause the value of the tag to change, which causes a trigger to fire when there are deployments, builds, or other resources listening for those.