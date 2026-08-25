{%- set _mod_docs_content_type = "REFERENCE" %}
# controllerStatus {id="eso-controller-status_{{ context }}"}

The `controllerStatus` field tracks the health and synchronization state of the individual controllers managed by the Operator. It identifies each controller by name, details its current operational conditions, and verifies that the controller is processing the latest configuration version. {._abstract}

| Field | Type | Description | Default | Validation |
| --- | --- | --- | --- | --- |
| `name` | _string_ | `name` specifies the name of the controller for which the observed condition is recorded. |  |  |
| `conditions` | _array_ | `conditions` contains information about the current state of the {{ external_secrets_operator_short }} controllers. |  |  |
| `observedGeneration` | _integer_ | `observedGeneration` represents the `.metadata.generation` on the observed resource. |  | The minimum number of observed resources is 0. |