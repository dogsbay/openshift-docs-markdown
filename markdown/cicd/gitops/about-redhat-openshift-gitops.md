---
title: "About {{ gitops_title }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ gitops_title }} {id="about-redhat-openshift-gitops"}
{%- set context = "about-redhat-openshift-gitops" %}

{{ gitops_title }} is an Operator that uses Argo CD as the declarative GitOps engine. It enables GitOps workflows across multicluster OpenShift and Kubernetes infrastructure. Using {{ gitops_title }}, administrators can consistently configure and deploy Kubernetes-based infrastructure and applications across clusters and development lifecycles. {{ gitops_title }} is based on the open source project [Argo CD](https://argoproj.github.io/cd/) and provides a similar set of features to what the upstream offers, with additional automation, integration into Red Hat {{ product_title }} and the benefits of Red Hat’s enterprise support, quality assurance and focus on enterprise security.


:::note

Because {{ gitops_title }} releases on a different cadence from {{ product_title }}, the {{ gitops_title }} documentation is now available as a separate documentation set at [Red Hat OpenShift GitOps](https://docs.redhat.com/en/documentation/red_hat_openshift_gitops).

:::