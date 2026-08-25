---
title: Compliance Operator overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Compliance Operator overview {id="co-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "co-overview" %}

The {{ product_title }} Compliance Operator assists users by automating the inspection of numerous technical implementations and compares those against certain aspects of industry standards, benchmarks, and baselines.

The Compliance Operator is not an auditor. To be compliant or certified under these various standards, you need to engage an authorized auditor such as a Qualified Security Assessor (QSA), Joint Authorization Board (JAB), or other industry recognized regulatory authority to assess your environment.

The Compliance Operator makes recommendations based on generally available
information and practices regarding such standards and may assist with
remediations, but actual compliance is your responsibility. You are required to
work with an authorized auditor to achieve compliance with a standard. For more
information on compliance support for all Red&#160;Hat products, see "Product
Compliance".

{% leveloffset +1 %}{% include "./modules/co-overview-concepts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/co-overview-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/co-overview-scan-management.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Compliance Operator release notes](/security/compliance_operator/compliance-operator-release-notes#compliance-operator-release-notes)
*   [Product Compliance](https://access.redhat.com/compliance)