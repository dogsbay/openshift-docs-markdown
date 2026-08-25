---
title: Custom Metrics Autoscaler Operator release notes
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-rn" %}
{% include "./_attributes/common-attributes.md" %}
# Custom Metrics Autoscaler Operator release notes {id="nodes-cma-autoscaling-custom-rn"}

You can review the following release notes to learn about changes in the Custom Metrics Autoscaler Operator version 2.19.0-2. The release notes for the Custom Metrics Autoscaler Operator for Red Hat OpenShift describe new features and enhancements, deprecated features, and known issues. {._abstract}

The Custom Metrics Autoscaler Operator uses the Kubernetes-based Event Driven Autoscaler (KEDA) and is built on top of the {{ product_title }} horizontal pod autoscaler (HPA).


:::note

The Custom Metrics Autoscaler Operator for Red Hat OpenShift is provided as an installable component, with a distinct release cycle from the core {{ product_title }}. The [Red Hat OpenShift Container Platform Life Cycle Policy](https://access.redhat.com/support/policy/updates/openshift#cma) outlines release compatibility.

:::


## Supported versions {id="nodes-pods-autoscaling-custom-rn-versions_{{ context }}"}

The following table defines the Custom Metrics Autoscaler Operator versions for each {{ product_title }} version.

| Version | {{ product_title }} version | General availability |
| --- | --- | --- |
| 2.19.0-2 | 4.21 | General availability |
| 2.19.0-2 | 4.20 | General availability |
| 2.19.0-2 | 4.19 | General availability |
| 2.19.0-2 | 4.18 | General availability |
| 2.19.0-2 | 4.17 | General availability |
| 2.19.0-2 | 4.16 | General availability |
| 2.19.0-2 | 4.15 | General availability |
| 2.19.0-2 | 4.14 | General availability |
| 2.19.0-2 | 4.13 | General availability |
| 2.19.0-2 | 4.12 | General availability |

{% leveloffset +1 %}{% include "./modules/nodes-pods-autoscaling-custom-rn-2190-2.md" %}{% endleveloffset %}