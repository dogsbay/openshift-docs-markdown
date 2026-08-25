{%- set _mod_docs_content_type = "REFERENCE" %}
# externalSecretsManager {id="eso-external-secrets-manager_{{ context }}"}

The `externalSecretsManager` object defines the configuration and information of deployments managed by the {{ external_secrets_operator_short }}. Set the name to `cluster` as this allows only one instance of `externalSecretsManager` per cluster. You can configure global options by using `externalSecretsManager`. This serves as a centralized configuration for managing multiple controllers of the Operator. The Operator automatically creates the `externalSecretsManager` object during installation. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | _string_ | The `apiVersion` specifies the version of the schema in use, which is `operator.openshift.io/v1alpha1`. |
| `kind` | _string_ | `kind` specifies the type of the object, which is `externalSecretsManager` for this Object. |
| `metadata` | [_ObjectMeta_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#objectmeta-v1-meta) | Refer to Kubernetes API documentation for details about the `metadata` fields. |
| `spec` | _object_ | `spec` contains specifications of the desired behavior. |
| `status` | _object_ | `status` displays the most recently observed state of the controllers in the {{ external_secrets_operator_short }}. |