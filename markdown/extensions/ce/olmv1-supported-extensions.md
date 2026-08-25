---
title: Supported extensions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Supported extensions {id="olmv1-supported-extensions"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "olmv1-supported-extensions" %}

To install an Operator as a cluster extension, it must meet bundle format, install mode, and dependency requirements. {{ olmv1_first }} supports extensions that use webhooks for validation, mutation, or conversion.

{{ olmv1_first }} supports extensions that use the `AllNamespaces` install mode. With this mode, the Operator watches and manages resources across all namespaces in the cluster.

As a Technology Preview feature, you can configure an extension to watch a specific namespace. This limits watching to one namespace instead of the entire cluster.

{% leveloffset +1 %}{% include "./modules/olmv1-about-supported-bundle-formats.md" %}{% endleveloffset %}

**Additional resources**

*   [Bundle format](/operators/understanding/olm-packaging-format#olm-bundle-format_olm-packaging-format)
*   [Operator conditions](/operators/understanding/olm/olm-operatorconditions#olm-operatorconditions)

{% leveloffset +1 %}{% include "./modules/olmv1-webhook-support.md" %}{% endleveloffset %}

**Additional resources**

*   [Types of webhook admission plugins](/architecture/admission-plug-ins#admission-webhook-types_admission-plug-ins)
*   [Service CA certificates](/security/certificate_types_descriptions/service-ca-certificates#add-service-certificate_service-ca-certificates)
*   [OpenShift Service CA Operator](/operators/operator-reference#openshift-service-ca-operator_operator-reference)
*   [Validating admission webhooks (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook)
*   [Mutating admission webhooks (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook)
*   [Conversion webhooks (Kubernetes documentation)](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definition-versioning/#webhook-conversion)