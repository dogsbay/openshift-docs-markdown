{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuration for a primary network attachment {id="nw-nad-cr_{{ context }}"}

You configure a primary network by using the `NetworkAttachmentDefinition` API in the `k8s.cni.cncf.io` API group. {._abstract}

The configuration for the API is described in the following table:

**`NetworkAttachmentDefinition` API fields**

| Field | Type | Description |
| --- | --- | --- |
| `metadata.name` | `string` | The name for the primary network. |
| `metadata.namespace` | `string` | The namespace that the object is associated with. |
| `spec.config` | `string` | The CNI plugin configuration in JSON format. |