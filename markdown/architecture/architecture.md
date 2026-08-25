---
title: "{{ product_title }} architecture"
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{% if not openshift_rosa %}
# {{ product_title }} architecture {id="architecture"}
{% endif %}
{% if openshift_rosa %}
# {{ product_title }} {id="architecture"}
{%- endif %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "architecture" %}

Understand the architecture of the {{ product_title }} and Kubernetes so that you can learn how to effectively develop and run containerized applications. 
Containerized applications offer many advantages over using traditional deployment methods. {._abstract}

{% leveloffset +1 %}{% include "./modules/architecture-platform-introduction.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/architecture-kubernetes-introduction.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/architecture-container-application-benefits.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/architecture-platform-benefits.md" %}{% endleveloffset %}

{% if not (openshift_dedicated or openshift_rosa) %}
{% leveloffset +2 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}
{% endif %}