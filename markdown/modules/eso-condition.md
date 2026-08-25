{%- set _mod_docs_content_type = "REFERENCE" %}
# condition {id="eso-condition_{{ context }}"}

The `condition` object reports the current health and operational state of the {{ external_secrets_operator }} deployment. It provides a standardized status check by detailing the specific type of condition, its current status, and a message to verify deployment success or troubleshooting errors. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `type` | _string_ | `type` contains the condition of the deployment. |
| `status` | [_ConditionStatus_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#conditionstatus-v1-meta) | `status` contains the status of the condition of the deployment |
| `message` | _string_ | `message` provides details on the state of the deployment |