{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure TLS for ingress {id="configure-tls-for-ingress-con_{{ context }}"}

To secure external traffic to your applications, you can configure routes to serve custom certificates by using edge, passthrough, or re-encrypt TLS termination, and enforce HTTP Strict Transport Security (HSTS). You can also replace the default wildcard ingress certificate with one issued by a trusted public certificate authority (CA).