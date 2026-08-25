---
title: Webhook management in Operator Lifecycle Manager
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Webhook management in Operator Lifecycle Manager {id="olm-webhooks"}
{%- set context = "olm-webhooks" %}

Webhooks allow Operator authors to intercept, modify, and accept or reject resources before they are saved to the object store and handled by the Operator controller. Operator Lifecycle Manager (OLM) can manage the lifecycle of these webhooks when they are shipped alongside your Operator. {._abstract}

## Additional resources {id="olm-webhooks-additional-resources" ._additional-resources}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Types of webhook admission plugins](/architecture/admission-plug-ins#admission-webhook-types_admission-plug-ins)
{%- endif %}
*   [Validating admission webhooks (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook)
*   [Mutating admission webhooks  (Kubernetes documentation)](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook)
*   [Conversion webhooks (Kubernetes documentation)](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definition-versioning/#webhook-conversion)