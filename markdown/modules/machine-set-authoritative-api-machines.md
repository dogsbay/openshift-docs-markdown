{%- set _mod_docs_content_type = "REFERENCE" %}
# Authoritative API types of compute machines {id="machine-set-authoritative-api-machines_{{ context }}"}

The values of the `.spec.authoritativeAPI` and `.spec.template.spec.authoritativeAPI` fields in a Machine API compute machine set determine the authoritative API of the compute machines. {._abstract}

**Interaction of `authoritativeAPI` fields when creating compute machines**

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| `.spec.authoritativeAPI` value | `ClusterAPI` | `ClusterAPI` | `MachineAPI` | `MachineAPI` |
| `.spec.template.spec.authoritativeAPI` value | `ClusterAPI` | `MachineAPI` | `MachineAPI` | `ClusterAPI` |
| `authoritativeAPI` value for new compute machines | `ClusterAPI` | `ClusterAPI` | `MachineAPI` | `ClusterAPI` |


:::note

When the `.spec.authoritativeAPI` value is `ClusterAPI`, the Machine API machine set is not authoritative and the `.spec.template.spec.authoritativeAPI` value is not used.
As a result, the only combination that creates a compute machine with the Machine API as authoritative is where the `.spec.authoritativeAPI` and `.spec.template.spec.authoritativeAPI` values are `MachineAPI`.

:::