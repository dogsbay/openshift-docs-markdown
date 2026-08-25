---
title: "About {{ pipelines_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ pipelines_title }} {id="about-pipelines"}
{%- set context = "about-pipelines" %}

{{ pipelines_title }} is a cloud-native, continuous integration and continuous delivery (CI/CD) solution based on Kubernetes resources. It uses Tekton building blocks to automate deployments across multiple platforms by abstracting away the underlying implementation details. Tekton introduces a number of standard custom resource definitions (CRDs) for defining CI/CD pipelines that are portable across Kubernetes distributions.


:::note

Because {{ pipelines_title }} releases on a different cadence from {{ product_title }}, the {{ pipelines_title }} documentation is now available as a separate documentation set at [Red Hat OpenShift Pipelines](https://docs.redhat.com/en/documentation/red_hat_openshift_pipelines).

:::