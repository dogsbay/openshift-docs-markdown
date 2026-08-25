---
title: What are Operators?
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# What are Operators? {id="olm-what-operators-are"}
{%- set context = "olm-what-operators-are" %}

Operators encode human operational knowledge into software that manages complex applications. You can use Operators to package, deploy, and manage Kubernetes applications with the same APIs and tooling as native cluster resources. {._abstract}

Operators are pieces of software that ease the operational complexity of running another piece of software. They act like an extension of the software vendor’s engineering team, monitoring a Kubernetes environment (such as {{ product_title }}) and using its current state to make decisions in real time. Advanced Operators are designed to handle upgrades seamlessly, react to failures automatically, and not take shortcuts, like skipping a software backup process to save time.

A Kubernetes application is an app that is both deployed on Kubernetes and managed using the Kubernetes APIs and `kubectl` or `oc` tooling. To be able to make the most of Kubernetes, you require a set of cohesive APIs to extend in order to service and manage your apps that run on Kubernetes. Think of Operators as the runtime that manages this type of app on Kubernetes.

{% leveloffset +1 %}{% include "./modules/olm-why-use-operators.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operator-framework.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-operator-maturity-model.md" %}{% endleveloffset %}