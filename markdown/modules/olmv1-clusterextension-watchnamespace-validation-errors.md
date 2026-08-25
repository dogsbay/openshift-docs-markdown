{%- set _mod_docs_content_type = "REFERENCE" %}

# Watch namespace validation errors {id="olmv1-clusterextension-watchnamespace-validation-errors_{{ context }}"}

Validation errors occur when the `watchNamespace` field is omitted or contains an invalid value for the install modes supported by the bundle. {._abstract}

**Common `watchNamespace` field validation errors**

| Error | Cause | Resolution |
| --- | --- | --- |
| Required field missing | The bundle requires the `watchNamespace` field but it is omitted. | Add the `watchNamespace` field with a value that matches the install modes supported by the bundle. |
| `OwnNamespace` validation error | The bundle only supports `OwnNamespace` mode but the `watchNamespace` value does not match the `.spec.namespace` field. | Set the `watchNamespace` field to the same value as the `.spec.namespace` field. |
| `SingleNamespace` validation error | The bundle only supports `SingleNamespace` mode but the `watchNamespace` value matches the `.spec.namespace` field. | Set the `watchNamespace` field to a different namespace than the `.spec.namespace` field. |
| Invalid configuration | The `.spec.config` structure is malformed or has unsupported fields. | Verify the configuration follows the correct API structure with `configType: Inline` and valid `inline` fields. |