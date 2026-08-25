{%- set _mod_docs_content_type = "REFERENCE" %}
# cert-manager upstream authority plugin reference {id="zero-trust-manager-cert-manager-plugin-ref_{{ context }}"}

This reference describes `spec.upstreamAuthority.certManager` fields on the `SpireServer` custom resource and how {{ zero_trust_full }} uses them to request intermediate certificates from {{ cert_manager_operator }}. Use it when you configure or troubleshoot the {{ cert_manager_operator }} UpstreamAuthority plugin and need field descriptions or defaults. {._abstract}

## SpireServer CR fields {id="cert-manager-plugin-spireserver-cr-reference_{{ context }}"}

Configure {{ cert_manager_operator }} upstream authority under `spec.upstreamAuthority.certManager`. {{ zero_trust_full }} generates the SPIRE Server configuration from these fields.

| Field | Description |
| --- | --- |
| `namespace` | Required. Namespace where SPIRE Server creates `CertificateRequest` resources. |
| `issuerName` | Required. Name of the Issuer or ClusterIssuer. |
| `issuerKind` | Optional. `Issuer` or `ClusterIssuer`. The default is `Issuer`. |
| `issuerGroup` | Optional. API group of the issuer. The default is `cert-manager.io`. |


:::note

On {{ product_title }}, SPIRE Server uses its in-cluster `ServiceAccount`. {{ zero_trust_full }} grants permissions to create, get, list, and delete `CertificateRequest` resources when `spec.upstreamAuthority.certManager` is configured.

:::