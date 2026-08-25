{%- set _mod_docs_content_type = "REFERENCE" %}
# externalSecretsConfigList {id="eso-external-secrets-list_{{ context }}"}

The `externalSecretsConfigList` object fetches the list of `externalSecretsConfig` objects. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | _string_ | The `apiVersion` specifies the version of the schema in use, which is `operator.openshift.io/v1alpha1` |
| `kind` | _string_ | `kind` specifies the type of the object, which is `externalSecretsList` for this API. |
| `metadata` | [_ListMeta_](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#listmeta-v1-meta) | Refer to Kubernetes API documentation for details about the `metadata` fields. |
| `items` | _array_ | `Items` contains a list of `externalSecrets` objects. |