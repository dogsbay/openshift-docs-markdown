{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure your cluster to use an image registry {id="configure-cluster-use-registry-con_{{ context }}"}

You can configure {{ product_title }} to use a specific image registry for pulling container images. This includes setting up repository mirroring so that requests to a source registry are redirected to a mirror registry, and updating the global pull secret used to authenticate with registries.