{%- set _mod_docs_content_type = "REFERENCE" %}
# externalSecretsConfigSpec {id="eso-external-secrets-spec_{{ context }}"}

The `externalSecretsConfigSpec` field defines the desired behavior of the `externalSecrets` object. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `appConfig` | _object_ | `appConfig` configures the behavior of the `external-secrets` operand. |
| `plugins` | _object_ | `plugins` configures the optional provider plugins. |
| `controllerConfig` | _object_ | `controllerConfig` configures the controller to set up defaults that enable `external-secrets` operand. |