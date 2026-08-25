{%- set _mod_docs_content_type = "CONCEPT" %}
# Management cluster with a proxy and a hosted cluster with a secondary network and no default pod network {id="hcp-proxy-addl-network_{{ context }}"}

If a management cluster uses a proxy configuration and you are configuring a hosted cluster with a secondary network but are not attaching the default pod network, add the CIDR of the secondary network to the proxy configuration. {._abstract}

Specifically, you need to add the CIDR of the secondary network to the `noProxy` section of the proxy configuration for the management cluster. Otherwise, the Kubernetes API server will route some API requests through the proxy. In the hosted cluster configuration, the CIDR of the secondary network is automatically added to the `noProxy` section.