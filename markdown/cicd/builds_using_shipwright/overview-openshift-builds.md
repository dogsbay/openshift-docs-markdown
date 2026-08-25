---
title: Overview of Builds
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Overview of Builds {id="overview-openshift-builds"}
{%- set context = "overview-openshift-builds" %}

Builds is an extensible build framework based on the [Shipwright project](https://shipwright.io/), which you can use to build container images on your {{ product_title }} cluster. You can build container images from source code and Dockerfiles by using image build tools, such as Source-to-Image (S2I) and Buildah. You can create and apply build resources, view logs of build runs, and manage builds in your {{ product_title }} namespaces.

Builds includes the following capabilities:

*   Standard Kubernetes-native API for building container images from source code and Dockerfiles
*   Support for Source-to-Image (S2I) and Buildah build strategies
*   Extensibility with your own custom build strategies
*   Execution of builds from source code in a local directory
*   Shipwright CLI for creating and viewing logs, and managing builds on the cluster
*   Integrated user experience with the **Developer** perspective of the {{ product_title }} web console


:::note

Because Builds releases on a different cadence from {{ product_title }}, the Builds documentation is now available as a separate documentation set at [Builds for Red Hat OpenShift](https://docs.redhat.com/en/documentation/builds_for_red_hat_openshift).

:::