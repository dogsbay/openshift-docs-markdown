{%- set _mod_docs_content_type = "REFERENCE" %}
# Image stream change triggers {id="images-using-imagestream-change-triggers_{{ context }}"}

To automate your application lifecycle and ensure they use the latest code, configure image stream triggers in {{ product_title }}. Image stream triggers allow your builds and deployments to be automatically invoked when a new version of an upstream image is available. {._abstract}

For example, builds and deployments can be automatically started when an image stream tag is modified. This is achieved by monitoring that particular image stream tag and notifying the build or deployment when a change is detected.