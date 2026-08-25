{%- set _mod_docs_content_type = "REFERENCE" %}
# Image registry {id="images-image-registry-about_{{ context }}"}

An image registry is a content server that stores and serves container images in {{ product_title }}. You can use registries to access container images from external sources or the integrated registry in {{ product_title }}. {._abstract}

Registries contain a collection of one or more image repositories, which contain one or more tagged images. Red&#160;Hat provides a registry at registry.redhat.io for subscribers. {{ product_title }} can also supply its own {{ product_registry }} for managing custom container images.