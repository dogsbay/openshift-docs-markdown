---
title: "Knative CLI for use with {{ ServerlessProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Knative CLI for use with {{ ServerlessProductName }} {id="kn-cli-tools"}
{%- set context = "kn-cli-tools" %}

The Knative (`kn`) CLI enables simple interaction with Knative components on {{ product_title }}.

## Key features {id="kn-cli-tools-key-features"}

The Knative (`kn`) CLI is designed to make serverless computing tasks simple and concise.
Key features of the Knative CLI include:

*   Deploy serverless applications from the command line.
*   Manage features of Knative Serving, such as services, revisions, and traffic-splitting.
*   Create and manage Knative Eventing components, such as event sources and triggers.
*   Create sink bindings to connect existing Kubernetes applications and Knative services.
*   Extend the Knative CLI with flexible plugin architecture, similar to the `kubectl` CLI.
*   Configure autoscaling parameters for Knative services.
*   Scripted usage, such as waiting for the results of an operation, or deploying custom rollout and rollback strategies.

## Installing the Knative CLI {id="kn-cli-tools-installing-kn"}

See [Installing the Knative CLI](https://docs.redhat.com/en/documentation/red_hat_openshift_serverless/1.28/html/installing_serverless/installing-kn#installing-kn).