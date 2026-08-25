{%- set _mod_docs_content_type = "REFERENCE" %}
# cert-manager Operator {id="telco-core-cert-manager-operator_{{ context }}"}

The cert-manager Operator for {{ product_title }} manages the lifecycle of TLS certificates for cluster components and workloads. {._abstract}


New in this release
:   *   The cert-manager Operator is a new optional component in this release.

Description
    :   The cert-manager Operator for {{ product_title }} manages the lifecycle of TLS certificates for cluster components and workloads.
    The cert-manager Operator automates certificate issuance, renewal, and rotation, eliminating manual certificate management.
    The reference configuration includes the cert-manager Operator to optionally manage certificates for the API server and ingress controller endpoints.


Limits and requirements

:   *   The reference configuration includes only the ACME DNS01 challenge type for platform certificate issuance.

Engineering considerations

:   *   Use {{ rh_rhacm }} `CertificatePolicy` resources on the hub cluster to monitor certificate expiration and compliance across managed clusters.