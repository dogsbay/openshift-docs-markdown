{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshooting DNS connectivity issues in a disconnected environment {id="troubleshooting-dns-disconnected-env_{{ context }}"}

If you experience health check probe issues when configuring `nmstate` in a disconnected environment, you can configure the DNS server to resolve the custom domain name instead of the default `root-servers.net` domain. {._abstract}


:::important

Ensure that the DNS server includes a name server (NS) entry for the `root-servers.net` zone. The DNS server does not need to forward a query to an upstream resolver, but the server must return a correct answer for the NS query.

:::