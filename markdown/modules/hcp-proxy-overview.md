{%- set _mod_docs_content_type = "CONCEPT" %}
# Proxy support for {{ hcp }} {id="hcp-proxy-overview_{{ context }}"}

To ensure that control-plane workloads, compute nodes, management clusters, and hosted clusters have the access they need for optimal performance, you can configure proxy support. {._abstract}

In standalone {{ product_title }}, the primary purposes of proxy support are ensuring that workloads in the cluster are configured to use the HTTP or HTTPS proxy to access external services, honoring the `NO_PROXY` setting if one is configured, and accepting any trust bundle that is configured for the proxy.

In {{ hcp }}, proxy support includes use cases beyond those in standalone {{ product_title }}.