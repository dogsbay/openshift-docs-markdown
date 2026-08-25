{%- set _mod_docs_content_type = "REFERENCE" %}
# webhookConfig {id="eso-web-hook-config_{{ context }}"}

The `webhookConfig` field configures the specifics of the `external-secrets` application webhook. {._abstract}

| Field | Type | Description | Default | Validation |
| --- | --- | --- | --- | --- |
| `certificateCheckInterval` | [_Duration_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#duration-v1-meta) | `certificateCheckInterval` configures the polling interval to check certificate validity. | 5m | Optional |