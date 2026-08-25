{%- set _mod_docs_content_type = "REFERENCE" %}
# certManagerConfig {id="eso-cert-manager-config_{{ context }}"}

You can integrate the {{ external_secrets_operator }} with cert-manager to secure internal webhooks. Use these settings to replace the default internal certificate management with cert-manager, specify custom issuers, and define certificate lifecycle and renewal policies. {._abstract}

| Field | Type | Description | Default | Validation |
| --- | --- | --- | --- | --- |
| `mode` | _string_ | `mode` specifies whether to use cert-manager for certificate management instead of the built-in `cert-controller` which can be indicated by setting either `Enabled` or `Disabled`. If set to `Enabled`, uses `cert-manager` for obtaining the certificates for the webhook server and other components. If set to `Disabled`, uses the `cert-controller` for obtaining the certificates for the webhook server. `Disabled` is the default behavior. |  | enum: [Enabled Disabled] |
| `injectAnnotations` | _string_ | `injectAnnotations` adds the `cert-manager.io/inject-ca-from` annotation to the webhooks and custom resource definitions (CRDs) to automatically configure the webhook with the `cert-manager` Operator certificate authority (CA). This requires CA Injector to be enabled in `cert-manager` Operator. Set this field to `true` or `false`. When set, this field cannot be changed. | false | enum: [true false] |
| `issuerRef` | _ObjectReference_ | `issuerRef` contains details of the referenced object used for obtaining certificates. The object must exist in the `external-secrets` namespace unless a cluster-scoped `cert-manager` Operator issuer is used. |  |  |
| `certificateDuration` | [_Duration_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#duration-v1-meta) | `certificateDuration` sets the validity period of the webhook certificate. | 8760h |  |
| `certificateRenewBefore` | [_Duration_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#duration-v1-meta) | `certificateRenewBefore` sets the ahead time to renew the webhook certificate before expiry. | 30m |  |