{%- set _mod_docs_content_type = "CONCEPT" %}
# Supported ACME challenges types {id="cert-manager-acme-challenges-types_{{ context }}"}

To validate domain ownership with ACME issuers, you can use the challenge types supported by the {{ cert_manager_operator }}. {._abstract}

The {{ cert_manager_operator }} supports the following challenge types for ACME issuers:


HTTP-01
:   With the HTTP-01 challenge type, you provide a computed key at an HTTP URL endpoint in your domain. If the ACME CA server can get the key from the URL, it can validate you as the owner of the domain.


:::note

HTTP-01 requires that the Let’s Encrypt servers can access the route of the cluster. If an internal or private cluster is behind a proxy, the HTTP-01 validations for certificate issuance fail.

The HTTP-01 challenge is restricted to port 80.

:::



DNS-01
:   With the DNS-01 challenge type, you provide a computed key at a DNS TXT record. If the ACME CA server can get the key by DNS lookup, it can validate you as the owner of the domain.