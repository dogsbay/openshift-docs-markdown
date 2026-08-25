{%- set _mod_docs_content_type = "CONCEPT" %}
# Proxy certificate expiration {id="proxy-cert-expiration_{{ context }}"}

The CA administrator configures the expiration term for proxy certificates before they can be used by {{ product_title }} or {{ op_system }}. {._abstract}

The user sets the expiration term of the user-provided trust bundle.

The default expiration term is defined by the CA certificate itsself. The CA administrator must configure the default expiration term for the certificate before the certificate can be used by {{ product_title }} or {{ op_system }}.


:::note

Red Hat does not monitor when CAs expire. Due to the long life of the CAs, this is generally not an issue. However, you might need to periodically update the trust bundle.

:::