{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress certificate expiration {id="ingress-certificates-expiration_{{ context }}"}

Review fixed two-year expiration for Ingress Operator and `service-ca` certificates in {{ product_title }} to plan maintenance before certificates expire. {._abstract}

The expiration terms for the Ingress Operator certificates are as follows:

*   The expiration date for metrics certificates that the `service-ca` controller creates is two years after the date of creation.
*   The expiration date for the Operator signing certificate is two years after the date of creation.
*   The expiration date for default certificates that the Operator generates is two years after the date of creation.

You cannot specify custom expiration terms on certificates that the Ingress Operator or `service-ca` controller creates.