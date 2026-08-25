---
title: Extension APIs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Extension APIs {id="extension-apis"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}

## APIService [apiregistration.k8s.io/v1] {id="_apiservice_apiregistrationk8siov1"}


Description
:   APIService represents a server for a particular GroupVersion. Name must be "version.group".


Type
:     `object`

## CustomResourceDefinition [apiextensions.k8s.io/v1] {id="_customresourcedefinition_apiextensionsk8siov1"}


Description
:   CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format &lt;.spec.name>.&lt;.spec.group>.


Type
:     `object`

## MutatingWebhookConfiguration [admissionregistration.k8s.io/v1] {id="_mutatingwebhookconfiguration_admissionregistrationk8siov1"}


Description
:   MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.


Type
:     `object`

## TestExtensionAdmission [testextension.redhat.io/v1] {id="_testextensionadmission_testextensionredhatiov1"}


Description
:   TestExtensionAdmission controls which ImageStreams are permitted to provide extension test binaries


Type
:     `object`

## ValidatingAdmissionPolicy [admissionregistration.k8s.io/v1] {id="_validatingadmissionpolicy_admissionregistrationk8siov1"}


Description
:   ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.


Type
:     `object`

## ValidatingAdmissionPolicyBinding [admissionregistration.k8s.io/v1] {id="_validatingadmissionpolicybinding_admissionregistrationk8siov1"}


Description
:   ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.


    For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don’t use params, otherwise N is the number of parameters selected by the binding.


    The CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.


Type
:     `object`

## ValidatingWebhookConfiguration [admissionregistration.k8s.io/v1] {id="_validatingwebhookconfiguration_admissionregistrationk8siov1"}


Description
:   ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.


Type
:     `object`