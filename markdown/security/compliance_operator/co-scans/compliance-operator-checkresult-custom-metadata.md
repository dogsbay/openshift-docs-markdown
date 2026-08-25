---
title: Propagating custom metadata to ComplianceCheckResult objects
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Propagating custom metadata to ComplianceCheckResult objects {id="compliance-operator-checkresult-custom-metadata"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "compliance-operator-checkresult-metadata" %}

Starting in Compliance Operator 1.9.0, add labels and annotations to `Rule` and `CustomRule` objects so matching metadata is displayed on `ComplianceCheckResult` objects after a scan. Downstream tools, dashboards, and ticketing workflows can use this metadata without maintaining a separate mapping.

{% leveloffset +1 %}{% include "./modules/compliance-operator-checkresult-custom-metadata-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-operator-checkresult-custom-metadata-configure-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-operator-checkresult-custom-metadata-configure-customrules.md" %}{% endleveloffset %}