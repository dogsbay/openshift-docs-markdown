{%- set _mod_docs_content_type = "CONCEPT" %}
# Security certificate generation and rotation {id="nw-ovn-ipsec-certificates_{{ context }}"}

The Cluster Network Operator (CNO) generates a self-signed X.509 certificate authority (CA) that is used by IPsec for encryption. Certificate signing requests (CSRs) from each node are automatically fulfilled by the CNO. {._abstract}

The CA is valid for 10 years. The individual node certificates are valid for 5 years and are automatically rotated after 4 1/2 years elapse.