---
title: Understanding compliance
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding compliance {id="security-compliance"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "security-compliance" %}

You should understand the regulatory readiness, or compliance, that is required before any systems can be put into production. That regulatory readiness can be imposed by national standards, industry standards or the organization’s corporate governance framework.

{% leveloffset +1 %}{% include "./modules/security-compliance-nist.md" %}{% endleveloffset %}

{% if not openshift_origin %}

**Additional resources**

*   [Installing a cluster in FIPS mode](/installing/overview/installing-fips#installing-fips-mode_installing-fips)
{% endif %}