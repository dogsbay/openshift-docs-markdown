{%- set _mod_docs_content_type = "CONCEPT" %}
# Managing certificates for the platform {id="security-platform-certificates_{{ context }}"}

{{ product_title }} has multiple components within its framework that use REST-based HTTPS communication leveraging encryption via TLS certificates. You can configure these certificates during installation.
 
There are some primary components that generate this traffic: {._abstract}

*   masters (API server and controllers)
*   etcd
*   nodes
*   registry
*   router

## Configuring custom certificates {id="security-platform-config-custom-certs_{{ context }}"}

You can configure custom serving certificates for the public hostnames of the API server and web console during initial installation or when redeploying certificates. You can also use a custom CA.