---
title: OpenShift Container Platform scalability and performance overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ product_title }} scalability and performance overview {id="scalability-and-performance-overview"}
{%- set context = "index" %}

{{ product_title }} provides best practices and tools to help you optimize the performance and scale of your clusters. {._abstract}

The following documentation provides information on recommended performance and scalability practices, reference design specifications, optimization, and low latency tuning.

To contact Red Hat support, see "Getting support".


:::note

Some performance and scalability Operators have release cycles that are independent from {{ product_title }} release cycles. For more information, see "OpenShift Operators".

:::


{% leveloffset +1 %}{% include "./modules/scalability-and-performance-recommended-practices.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/scalability-and-performance-telco-reference-designs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/scalability-and-performance-planning-optimization-measurement.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Getting support](/support/getting-support#getting-support)
*   [OpenShift Operators](https://access.redhat.com/support/policy/updates/openshift_operators)