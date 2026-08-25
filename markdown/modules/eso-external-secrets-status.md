{%- set _mod_docs_content_type = "REFERENCE" %}
# externalSecretsConfigStatus {id="eso-external-secrets-status_{{ context }}"}

The `externalSecretsConfigStatus` field shows the most recently observed status of the `externalSecretsConfig` Object. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `conditions` | [_Condition_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#condition-v1-meta) _array_ | `conditions` contains information about the current state of deployment. |
| `externalSecretsImage` | _string_ | `externalSecretsImage` specifies the image name and tag used for deploy `external-secrets` operand. |
| `bitwardenSDKServerImage` | _string_ | `bitwardenSDKServerImage` specifies the name of the image and tag used for deploying the `bitwarden-sdk-server`. |