{%- set _mod_docs_content_type = "REFERENCE" %}
# Troubleshooting the {{ cert_manager_operator }} upstream authority plugin {id="zero-trust-manager-cert-troubleshooting_{{ context }}"}

Resolve the most common {{ cert_manager_operator }} upstream authority failures on {{ product_title }}. {._abstract}

## Quick reference {id="zero-trust-manager-cert-quick-reference_{{ context }}"}

| Symptom or error | Likely cause | Section |
| --- | --- | --- |
| `certificaterequests... is forbidden` | Missing permissions or wrong `namespace` | [#!cert-manager-plugin-permission-issuer_{{ context }}](#cert-manager-plugin-permission-issuer_{{ context }}) |
| `issuer ... not found` | Wrong `issuerName`, `issuerKind`, or issuer namespace | [#!cert-manager-plugin-permission-issuer_{{ context }}](#cert-manager-plugin-permission-issuer_{{ context }}) |
| Issuer not `READY` | Issuer misconfiguration | [#!cert-manager-plugin-permission-issuer_{{ context }}](#cert-manager-plugin-permission-issuer_{{ context }}) |
| `CertificateRequest` not approved or denied | Approval policy or approver configuration | [#!cert-manager-plugin-certificaterequest_{{ context }}](#cert-manager-plugin-certificaterequest_{{ context }}) |
| UpstreamAuthority fails to load in SPIRE Server logs | Invalid or incomplete `spec.upstreamAuthority.certManager` | [#!cert-manager-plugin-certificaterequest_{{ context }}](#cert-manager-plugin-certificaterequest_{{ context }}) |

## Permission and issuer errors {id="cert-manager-plugin-permission-issuer_{{ context }}"}

**Permission errors**

*   Confirm `spec.upstreamAuthority.certManager.namespace` matches the namespace where SPIRE Server creates `CertificateRequest` resources.
*   After you configure `spec.upstreamAuthority.certManager`, verify that {{ zero_trust_full }} updated the SPIRE Server role-based access control (RBAC) and the SPIRE Server pod restarted.

**Issuer errors**

*   Verify `issuerName` and `issuerKind` on the `SpireServer` CR match an existing Issuer or ClusterIssuer.
*   For a namespace-scoped `Issuer`, the Issuer must exist in the namespace referenced by `CertificateRequest` resources or in the namespace where the issuer is defined, depending on your issuer configuration.
*   Check that the Issuer reports `READY=True`:
    ```terminal
    $ oc get issuer,clusterissuer -A
    $ oc describe issuer spire-ca -n cert-manager
    ```

## SPIRE Server errors {id="cert-manager-plugin-certificaterequest_{{ context }}"}

**SPIRE Server errors**

*   Confirm that `namespace`, `issuerName`, and `issuerKind` are set under `spec.upstreamAuthority.certManager`.
*   Review SPIRE Server logs by running the following command:

```terminal
$ oc logs statefulset/spire-server -n zero-trust-workload-identity-manager -c spire-server --tail=100
```