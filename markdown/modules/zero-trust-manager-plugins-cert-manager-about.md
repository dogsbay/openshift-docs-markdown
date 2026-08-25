{%- set _mod_docs_content_type = "CONCEPT" %}
# About the cert-manager upstream authority plugin {id="zero-trust-manager-plugins-cert-manager-about_{{ context }}"}

The {{ cert_manager_operator }} upstream authority plugin connects SPIRE Server to {{ cert_manager_operator }} for automated intermediate certificate provisioning. {._abstract}

When you configure this plugin, SPIRE Server creates a `CertificateRequest` resource in the cluster. The configured Issuer or ClusterIssuer signs the request and the certificate. The SPIRE Server then uses the signed intermediate certificate to issue workload identities.

## How the cert-manager plugin works {id="cert-manager-plugin-workflow_{{ context }}"}

1.  SPIRE Server generates a certificate signing request for an intermediate signing certificate.
1.  The plugin creates a `CertificateRequest` in the configured namespace.
1.  The `CertificateRequest` references the configured Issuer or ClusterIssuer.
1.  {{ cert_manager_operator }} signs the request.
1.  SPIRE Server retrieves the signed certificate and CA bundle from the `CertificateRequest`.

## Requirements {id="cert-manager-plugin-requirements_{{ context }}"}


{{ cert_manager_operator }}
:   {{ cert_manager_operator }} must be installed and running in the cluster.

Issuer
:   You must configure an `Issuer` or `ClusterIssuer` that can sign intermediate CA certificates.

Permissions
:   On {{ product_title }}, {{ zero_trust_full }} grants the SPIRE Server `ServiceAccount` permission to manage `CertificateRequest` resources when `spec.upstreamAuthority.certManager` is configured. Prepare the Issuer and namespace before you configure the `SpireServer` CR.

Supported issuers
:   The `Issuer` must support signing certificate requests for intermediate CAs.