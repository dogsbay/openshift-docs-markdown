{%- set _mod_docs_content_type = "CONCEPT" %}
# Management clusters that need external access {id="hcp-proxy-mgmt-cluster_{{ context }}"}

The HyperShift Operator has a controller that monitors the OpenShift global proxy configuration of the management cluster and sets the proxy environment variables on its own deployment. {._abstract}

Control plane deployments that need external access are configured with the proxy environment variables of the management cluster.