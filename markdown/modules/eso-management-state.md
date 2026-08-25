{%- set _mod_docs_content_type = "REFERENCE" %}
# managementState {id="eso-management-state_{{ context }}"}

The `managementState` field controls whether the Operator manages the resource lifecycle. {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `Managed` | _string_ | `ManagementStateManaged` indicates the Operator is responsible for the resource lifecycle. |
| `Unmanaged` | _string_ | `ManagementStateUnmanaged` indicates the user is responsible for the resource lifecycle. |