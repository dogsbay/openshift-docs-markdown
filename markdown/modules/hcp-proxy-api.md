{%- set _mod_docs_content_type = "REFERENCE" %}
# Compute nodes that need to access the API server {id="hcp-proxy-api_{{ context }}"}

For control plane communications, {{ hcp }} uses a local proxy on each compute node that listens on 172.20.0.1 and forwards traffic to the API server. If accessing the API server requires an external proxy, the local proxy forwards traffic through it. {._abstract}

When a proxy is not needed, {{ hcp }} uses `haproxy` for the local proxy, which only forwards packets via TCP. When a proxy is needed, {{ hcp }} uses a custom proxy, `control-plane-operator-kubernetes-default-proxy`, to send traffic through the external proxy.


:::note

This use case is relevant to self-managed {{ hcp }}, not to {{ product_rosa }}.

:::