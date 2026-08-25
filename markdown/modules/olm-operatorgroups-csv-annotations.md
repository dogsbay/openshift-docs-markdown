{%- set _mod_docs_content_type = "CONCEPT" %}
# Operator group CSV annotations {id="olm-operatorgroups-csv-annotations_{{ context }}"}

Member cluster service versions (CSVs) of an Operator group carry annotations that identify the group name, namespace, and target namespace selection. {._abstract}

Member CSVs of an Operator group have the following annotations:

| Annotation | Description |
| --- | --- |
| `olm.operatorGroup=<group_name>` | Contains the name of the Operator group. |
| `olm.operatorNamespace=<group_namespace>` | Contains the namespace of the Operator group. |
| `olm.targetNamespaces=<target_namespaces>` | Contains a comma-delimited string that lists the target namespace selection of the Operator group. |


:::note

All annotations except `olm.targetNamespaces` are included with copied CSVs. Omitting the `olm.targetNamespaces` annotation on copied CSVs prevents the duplication of target namespaces between tenants.

:::