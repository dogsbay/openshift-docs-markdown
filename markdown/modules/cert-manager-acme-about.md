{%- set _mod_docs_content_type = "CONCEPT" %}
# About ACME issuers {id="cert-manager-acme-about_{{ context }}"}

The ACME issuer type for the {{ cert_manager_operator }} represents an Automated Certificate Management Environment (ACME) certificate authority (CA) server. ACME CA servers rely on a _challenge_ to verify that a client owns the domain names that the certificate is being requested for. If the challenge is successful, the {{ cert_manager_operator }} can issue the certificate. If the challenge fails, the {{ cert_manager_operator }} does not issue the certificate. {._abstract}


:::note

Private DNS zones are not supported with _Let’s Encrypt_ and internet ACME servers.

:::