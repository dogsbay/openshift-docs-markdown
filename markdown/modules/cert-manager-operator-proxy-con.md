{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring the egress proxy for the {{ cert_manager_operator }} {id="cert-manager-operator-proxy-con_{{ context }}"}

If a cluster-wide egress proxy is configured in {{ product_title }}, Operator Lifecycle Manager (OLM) automatically configures Operators that it manages with the cluster-wide proxy. OLM automatically updates all of the Operator’s deployments with the `HTTP_PROXY`, `HTTPS_PROXY`, `NO_PROXY` environment variables. {._abstract}

You can inject any CA certificates that are required for proxying HTTPS connections into the {{ cert_manager_operator }}.