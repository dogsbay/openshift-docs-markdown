{%- set _mod_docs_content_type = "CONCEPT" %}
{% if context == "olm-understanding-olm" %}
# Operator groups {id="olm-operatorgroups-about_{{ context }}"}

{% endif %}
{% if context != "olm-understanding-olm" %}
# About Operator groups {id="_about_operator_groups"}

{% endif %}

An Operator group defines multitenant configuration for OLM-installed Operators through an `OperatorGroup` resource. An Operator group selects target namespaces where the required RBAC access is generated for member Operators . {._abstract}

The set of target namespaces is provided by a comma-delimited string stored in the `olm.targetNamespaces` annotation of a cluster service version (CSV). This annotation is applied to the CSV instances of member Operators and is projected into their deployments.