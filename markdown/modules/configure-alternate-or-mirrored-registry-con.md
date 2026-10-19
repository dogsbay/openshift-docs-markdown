{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure an alternate or mirrored registry {id="configure-alternate-or-mirrored-registry-con_{{ context }}"}

You can configure {{ product_title }} to pull images from an alternate or mirrored registry instead of the default registry.  {._abstract}

This is useful in restricted network environments where the cluster cannot reach the internet, or when you want to reduce external network traffic by serving images from a local mirror.

You can configure the Cluster Samples Operator to use an alternate registry for sample content, or set up a local mirror registry to serve the images required for installation and cluster operation.