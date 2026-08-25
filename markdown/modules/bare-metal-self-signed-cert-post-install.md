{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring a local or self-signed Baseboard Management Controller CA certificate {id="bare-metal-self-signed-cert-post-install_{{ context }}"}

You can configure a local or self-signed Baseboard Management Controller (BMC) CA certificate on a cluster that already has a CA certificate, or add one to a cluster that was installed without a CA certificate. Providing a local or self-signed CA certificate gives you more control over secure communication with bare metal BMC’s.