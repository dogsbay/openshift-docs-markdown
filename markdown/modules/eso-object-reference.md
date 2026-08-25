{%- set _mod_docs_content_type = "REFERENCE" %}
# objectReference {id="eso-object-reference_{{ context }}"}

The `ObjectReference` object acts as a pointer to a specific Kubernetes resource. It uniquely identifies the target by requiring its name, and optionally, helps scope the reference to a specific resource type and API group. {._abstract}

| Field | Type | Description | Default | Validation |
| --- | --- | --- | --- | --- |
| `name` | _string_ | `name` specifies the name of the resource being referred to. |  | The maximum length is 253 characters.<br>The minimum length is 1 character.<br>Required |
| `kind` | _string_ | `kind` specifies the kind of the resource being referred to. |  | The maximum length is 253 characters.<br>The minimum length is 1 character.<br>Optional |
| `group` | _string_ | `group` specifies the group of the resource being referred to. |  | The maximum length is 253 characters.<br>The minimum length is 1 character.<br>Optional |