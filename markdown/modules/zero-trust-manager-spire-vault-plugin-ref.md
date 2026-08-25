{%- set _mod_docs_content_type = "REFERENCE" %}
# SPIRE Vault UpstreamAuthority plugin reference {id="zero-trust-manager-spire-vault-plugin-ref_{{ context }}"}

Reference for `spec.upstreamAuthority.vault` on the `SpireServer` CR and the Vault signing policy SPIRE Server requires. {._abstract}

## SpireServer CR fields {id="spire-vault-spireserver-cr-reference_{{ context }}"}

Configure Vault upstream authority under `spec.upstreamAuthority.vault`. {{ zero_trust_full }} generates SPIRE Server configuration from these fields.

| Field | Description |
| --- | --- |
| `vaultAddr` | Required. Vault server URL. Use HTTPS for external endpoints; HTTP is permitted for in-cluster services. |
| `pkiMountPoint` | PKI secrets engine mount path. Default: `pki`. |
| `caCertSecretRef` | Optional Secret reference in the `zero-trust-workload-identity-manager` namespace. Use when Vault TLS is signed by a custom CA. {{ zero_trust_full }} mounts the key at `/run/spire/upstream-ca/ca.crt`. |
| `insecureSkipVerify` | Optional. Accepts any Vault server certificate when `true`. Default: `false`. Do not enable `insecureSkipVerify` in production. This setting disables TLS certificate verification and exposes the connection to man-in-the-middle attacks. Troubleshooting only. |
| `vaultNamespace` | Optional. Vault Enterprise namespace. |
| `k8sAuth.k8sAuthMountPoint` | Vault Kubernetes auth mount path. Default: `kubernetes`. |
| `k8sAuth.k8sAuthRoleName` | Required. Vault role bound to the `spire-server` ServiceAccount. |
| `k8sAuth.audience` | Token audience for the projected ServiceAccount token. Default: `vault`. Must match the `bound_audiences` configured on the Vault role. |


:::note

On {{ product_title }}, the `SpireServer` CR supports Vault Kubernetes authentication only. {{ zero_trust_full }} mounts a projected `ServiceAccount` token at `/var/run/secrets/tokens/vault`.

Ensure that `spec.caValidity` does not exceed the Vault PKI `max_lease_ttl`.

:::


## Required Vault policy {id="spire-vault-policy-reference_{{ context }}"}

The Vault Kubernetes auth role must include a policy with `update` on the intermediate signing path:

```text
path "pki/root/sign-intermediate" {
  capabilities = ["update"]
}
```

Replace `pki` with your PKI mount point when different.