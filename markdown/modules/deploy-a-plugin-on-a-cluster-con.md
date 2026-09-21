{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploy a plugin on a cluster {id="deploy-a-plugin-on-a-cluster-con_{{ context }}"}

To make a dynamic plugin available to console users in production, you build the plugin into a container image and deploy it to an {{ product_title }} cluster. The deployment serves the plugin over HTTP, and you can proxy requests from the plugin to other services in the cluster.