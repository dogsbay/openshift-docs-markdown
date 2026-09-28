{%- set _mod_docs_content_type = "CONCEPT" %}
# Restrict the API server to private for {{ azure_short }} {id="restrict-the-api-server-to-private-for-azure-con_{{ context }}"}

You can make the API server private on {{ azure_short }} by deleting the public load balancer frontend IP and its rules, and by setting the ingress scope to internal. All API access then stays on the private network.