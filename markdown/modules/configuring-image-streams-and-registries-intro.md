{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring image streams and image registries {id="configuring-image-streams-and-registries-intro_{{ context }}"}

You can configure image streams, image registries, and pull secrets after installation to control how your cluster accesses, imports, and stores container images. {._abstract}

You can update the global pull secret for your cluster by either replacing the current pull secret or appending a new pull secret. The procedure is required when users use a separate registry to store images than the registry used during installation. For more information, see "Using image pull secrets".

For information about images and configuring image streams or image registries, see the following documentation:

*   Overview of images
*   Image Registry Operator in {{ product_title }}
*   Configuring image registry settings

## Configuring image streams for a disconnected cluster {id="_configuring_image_streams_for_a_disconnected_cluster"}

After installing {{ product_title }} in a disconnected environment, configure the image streams for the Cluster Samples Operator and the `must-gather` image stream.