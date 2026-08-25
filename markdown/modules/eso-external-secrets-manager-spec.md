{%- set _mod_docs_content_type = "REFERENCE" %}
# externalSecretsManagerSpec {id="eso-external-secrets-manager-spec_{{ context }}"}

The `externalSecretsManagerSpec` field defines the desired behavior of the `externalSecretsManager` object. {._abstract}

| Field | type | Description | Default | Validation |
| --- | --- | --- | --- | --- |
| `globalConfig` | _object_ | `globalConfig` configures the behavior of deployments that {{ external_secrets_operator_short }} manages. |  | Optional |