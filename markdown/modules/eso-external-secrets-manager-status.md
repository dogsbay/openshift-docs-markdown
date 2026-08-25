{%- set _mod_docs_content_type = "REFERENCE" %}
# externalSecretsManagerStatus {id="eso-external-secrets-manager-status_{{ context }}"}

The `externalSecretsManagerStatus` field shows the most recently observed status of the `externalSecretsManager` object. {._abstract}

| Field | Type | Description | Default | Validation |
| --- | --- | --- | --- | --- |
| `controllerStatuses` |  _array_ | `controllerStatuses` holds the observed conditions of the controllers used by the Operator. |  |  |
| `lastTransitionTime` | [_Time_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#time-v1-meta) | `lastTransitionTime` records the most recent time the status of the condition changed. |  | Format: date-time Type: string |