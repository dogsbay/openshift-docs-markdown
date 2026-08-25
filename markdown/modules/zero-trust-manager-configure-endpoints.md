{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding bundle endpoint profiles {id="zero-trust-manager-configure-endpoints_{{ context }}"}

The bundle endpoint profile determines how your cluster exposes its trust bundle to other SPIRE deployments and how it authenticates remote clusters accessing the bundle. Choose the profile that best matches your security requirements and infrastructure. {._abstract}

The {{ zero_trust_full }} supports two authentication profiles for federation:


https_spiffe
:   Uses SPIFFE-based TLS authentication. The SPIRE server presents its own SVID (SPIFFE Verifiable Identity Document) to authenticate itself to remote SPIRE servers. This profile provides strong cryptographic identity verification and is ideal for federation between SPIRE deployments.


https_web
:   Uses standard Web PKI (X.509 certificates from public or private certificate Authorities). This profile supports both automatic certificate management via ACME (Let’s Encrypt) and manual certificate management using tools like cert-manager.

The following table summarizes the key differences between the two profiles:

| Criteria | https_spiffe | https_web |
| --- | --- | --- |
| Authentication method | SPIFFE SVID (TLS) | X.509 certificate from CA |
| Certificate management | Automatic (SPIRE-managed) | ACME (automatic) or manual |
| Trust model | SPIFFE trust domain | Web PKI / CA trust |
| Best for | Internal SPIRE-to-SPIRE federation | External federation, public endpoints |
| Security level | Very high (cryptographic identity) | High (CA-based trust) |
| Setup complexity | Medium (requires SPIFFE IDs) | Low (ACME) to Medium (manual certs) |


:::important

After enablement, federation cannot be disabled. The bundle endpoint profile is immutable once configured. Changing the profile or disabling federation requires reinstallation of the system. However, peer configurations (`federatesWith`) remain dynamic and can be added or removed at any time. Plan your profile selection carefully based on your long-term federation requirements.

:::