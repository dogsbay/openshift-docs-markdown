{%- set _mod_docs_content_type = "REFERENCE" %}
# componentName {id="eso-comoponent-name_{{ context }}"}

The `componentName` field represents the different external-secrets components that can have network policies applied. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `ExternalSecretsCoreController` | _object_ | `ExternalSecretsCoreController` represents the `external-secret` component. |
| `BitwardenSDKServer` | _object_ | `BitwardenSDKServer` represents the `bitwarden-sdk-server` component. |
| `Webhook` | _object_ | `Webhook` represents the `external-secrets` webhook component. |
| `CertController` | _object_ | `CertController` represents the `cert-controller` component. |