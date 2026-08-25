{%- set _mod_docs_content_type = "REFERENCE" %}
# secretReference {id="eso-secret-reference_{{ context }}"}

The `secretReference` field refers to a secret with the given name in the same namespace where it used. {._abstract}

| Field | Type | Description | Default | Validation |
| --- | --- | --- | --- | --- |
| `name` | _string_ | `name` specifies the name of the secret resource being referred to. |  | The maximum length is 253. The minimum length is 1. |