{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if context == "olm-understanding-olm" %}
# Operator conditions {id="olm-about-operatorconditions_{{ context }}"}

{% endif %}
{% if context != "olm-understanding-olm" %}
# About Operator conditions {id="_about_operator_conditions"}

{% endif %}

Operator Lifecycle Manager (OLM) infers Operator state from Kubernetes resources, but some conditions require explicit communication. You can use the `OperatorCondition` custom resource definition (CRD) to tell OLM about supported conditions that affect lifecycle management. {._abstract}


:::note

By default, the `Spec.Conditions` array is not present in an `OperatorCondition` object until it is either added by a user or as a result of custom Operator logic.

:::