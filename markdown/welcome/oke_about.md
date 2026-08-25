---
title: About OpenShift Kubernetes Engine
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set oke = "OpenShift Kubernetes Engine" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ oke }} {id="oke-about"}
{%- set context = "oke-about" %}

You can use the Red&#160; Hat {{ oke }} as a way to launch containers in an enterprise-class Kubernetes production platform. {._abstract}


:::note

As of 27 April 2020, Red Hat has decided to rename Red Hat OpenShift Container Engine to Red Hat {{ oke }}
to better communicate what value the product offering delivers.

:::


{{ oke }} is a subscription offering that provides {{ product_title }} with a limited set
of supported features at a lower list price. {{ oke }} and {{ product_title }} are the
same product and, therefore, all software and features are delivered in both.
There is only one download, {{ product_title }}. {{ oke }} uses the {{ product_title }}
documentation and support services and bug errata for this reason.

![Red Hat {{ oke }}](/_assets/images/oke-about-ocp-stack-image.png)

You download and install {{ oke }} the same way as {{ product_title }},
as they are the same binary distribution, but {{ oke }} offers a subset of the
features that {{ product_title }} offers.

{% leveloffset +1 %}{% include "./modules/oke_similarities_and_differences.md" %}{% endleveloffset %}