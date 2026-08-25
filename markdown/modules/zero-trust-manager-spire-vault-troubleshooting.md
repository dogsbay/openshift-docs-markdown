{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting SPIRE Vault UpstreamAuthority plugin {id="zero-trust-manager-spire-vault-troubleshooting_{{ context }}"}

Resolve the most common SPIRE Vault upstream authority failures on {{ product_title }}. {._abstract}

## Quick reference {id="zero-trust-manager-vault-quick-reference_{{ context }}"}

| Symptom or error | Likely cause | Section |
| --- | --- | --- |
| Connection refused, timeout, or unreachable Vault | Wrong `vaultAddr` or network path from the SPIRE Server pod | [spire-vault-troubleshooting-connection-tls_{{ context }}](#spire-vault-troubleshooting-connection-tls_{{ context }}) |
| `x509: certificate signed by unknown authority` | Missing or invalid `caCertSecretRef` Secret | [spire-vault-troubleshooting-connection-tls_{{ context }}](#spire-vault-troubleshooting-connection-tls_{{ context }}) |
| Vault `403` or Kubernetes auth failure | Vault role, ServiceAccount binding, or signing policy misconfiguration | [spire-vault-troubleshooting-authentication_{{ context }}](#spire-vault-troubleshooting-authentication_{{ context }}) |
| `requested TTL ... exceeds max_lease_ttl` | `caValidity` exceeds the Vault PKI limit | [spire-vault-troubleshooting-ttl_{{ context }}](#spire-vault-troubleshooting-ttl_{{ context }}) |

## Connection and TLS errors {id="spire-vault-troubleshooting-connection-tls_{{ context }}"}

**Connection failures**

*   Verify `spec.upstreamAuthority.vault.vaultAddr` on the `SpireServer` CR.
*   Confirm the SPIRE Server pod can reach Vault from the `zero-trust-workload-identity-manager` namespace.
*   For in-cluster Vault, use the Kubernetes service URL, such as `http://vault.vault.svc:8200`.

**TLS failures**

*   When Vault uses a custom CA, set `caCertSecretRef` to a Secret in the `zero-trust-workload-identity-manager` namespace with a PEM-encoded CA certificate.
*   Confirm the `Secret` name and key match `caCertSecretRef`.
*   Omit `caCertSecretRef` only for a public CA or in-cluster HTTP.
*   Do not use `insecureSkipVerify: true` in production.

## Authentication and signing errors {id="spire-vault-troubleshooting-authentication_{{ context }}"}

SPIRE Server uses Vault Kubernetes authentication with the `spire-server` ServiceAccount.

Check the following:

*   `k8sAuth.k8sAuthRoleName` on the `SpireServer` CR matches the Vault Kubernetes auth role.
*   The Vault role binds to ServiceAccount `spire-server` in namespace `zero-trust-workload-identity-manager`.
*   The role policy grants `update` on `<pki_mount>/root/sign-intermediate`.
*   `pkiMountPoint` matches the PKI secrets engine mount in Vault.
*   `k8sAuth.audience` matches the Vault role when you changed the default from `vault`.

Review SPIRE Server logs:

```terminal
$ oc logs statefulset/spire-server -n zero-trust-workload-identity-manager -c spire-server --tail=100
```

## TTL mismatch errors {id="spire-vault-troubleshooting-ttl_{{ context }}"}

`spec.caValidity` on the `SpireServer` CR must be less than or equal to the Vault PKI `max_lease_ttl`.

*   Reduce `caValidity` on the `SpireServer` CR, or increase the Vault PKI limit with `vault secrets tune -max-lease-ttl=...`.

For Vault Enterprise namespace errors, set `spec.upstreamAuthority.vault.vaultNamespace` to the correct namespace path.