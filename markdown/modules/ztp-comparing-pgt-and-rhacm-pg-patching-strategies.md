{%- set _mod_docs_content_type = "CONCEPT" %}
# Comparing {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate resource patching {id="ztp-comparing-pgt-and-rhacm-pg-patching-strategies_{{ context }}"}

`PolicyGenerator` custom resources (CRs) and `PolicyGenTemplate` CRs can be used in {{ ztp }} to generate {{ rh_rhacm }} policies for managed clusters. {._abstract}

There are advantages to using `PolicyGenerator` CRs over `PolicyGenTemplate` CRs when it comes to patching {{ product_title }} resources with {{ ztp }}.
Using the {{ rh_rhacm }} `PolicyGenerator` API provides a generic way of patching resources which is not possible with `PolicyGenTemplate` resources.

The `PolicyGenerator` API is a part of the [Open Cluster Management](https://open-cluster-management.io/) standard, while the `PolicyGenTemplate` API is not.
A comparison of `PolicyGenerator` and `PolicyGenTemplate` resource patching and placement strategies are described in the following table.

{% include "./snippets/pgt-deprecation-notice.md" %}

**Comparison of {{ rh_rhacm }} PolicyGenerator and PolicyGenTemplate patching**

| PolicyGenerator patching | PolicyGenTemplate patching |
| --- | --- |
| Uses Kustomize strategic merges for merging resources. For more information see [Declarative Management of Kubernetes Objects Using Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/). | Works by replacing variables with their values as defined by the patch. This is less flexible than Kustomize merge strategies. |
| Supports `ManagedClusterSet` and `Binding` resources. | Does not support `ManagedClusterSet` and `Binding` resources. |
| Relies only on patching, no embedded variable substitution is required. | Overwrites variable values defined in the patch. |
| Does not support merging lists in merge patches. Replacing a list in a merge patch is supported. | Merging and replacing lists is supported in a limited fashion - you can only merge one object in the list. |
| Does not currently support the [OpenAPI specification](https://spec.openapis.org/oas/latest.html) for resource patching. This means that additional directives are required in the patch to merge content that does not follow a schema, for example, `PtpConfig` resources. | Works by replacing fields and values with values as defined by the patch. |
| Requires additional directives, for example, `$patch: replace` in the patch to merge content that does not follow a schema. | Substitutes fields and values defined in the source CR with values defined in the patch, for example `$name`. |
| Can patch the `Name` and `Namespace` fields defined in the reference source CR, but only if the CR file has a single object. | Can patch the `Name` and `Namespace` fields defined in the reference source CR. |