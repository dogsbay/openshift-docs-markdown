{%- set _mod_docs_content_type = "REFERENCE" %}
# Compute nodes that need to access the API server {id="hcp-proxy-api_{{ context }}"}

For communication with the control plane, {{ hcp }} uses a local proxy in every compute node that listens on IP address 172.20.0.1 and forwards traffic to the API server. If an external proxy is required to access the API server, that local proxy needs to use the external proxy to send traffic out. {._abstract}

When a proxy is not needed, {{ hcp }} uses `haproxy` for the local proxy, which only forwards packets via TCP. When a proxy is needed, {{ hcp }} uses a custom proxy, `control-plane-operator-kubernetes-default-proxy`, to send traffic through the external proxy.


:::note

This use case is relevant to self-managed {{ hcp }}, not to {{ product_rosa }}.

:::