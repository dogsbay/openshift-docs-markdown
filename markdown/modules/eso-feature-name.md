{%- set _mod_docs_content_type = "REFERENCE" %}
# featureName {id="eso-feature-name_{{ context }}"}

The `featureName` field identifies an optional feature that can be configured on the `ExternalSecretsManager` and applied by the `external-secrets-operator`. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `UnsafeAllowGenericTargets` | _object_ | `UnsafeAllowGenericTargets` configures the `external-secrets` core controller to run with the `--unsafe-allow-generic-targets` startup flag, which allows `ExternalSecret` resources to sync data into Kubernetes resources other than `Secrets`. |