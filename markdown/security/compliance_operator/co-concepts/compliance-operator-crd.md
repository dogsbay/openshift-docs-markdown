---
title: Understanding the Custom Resource Definitions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding the Custom Resource Definitions {id="custom-resource-definitions"}
{%- set context = "compliance-crd" %}

You can use the Custom Resource Definitions (CRDs) provided by the Compliance Operator to run compliance scans and get remediation for the issues found. {._abstract}

The Compliance Operator in the {{ product_title }} provides you with several Custom Resource Definitions (CRDs) to run the compliance scans. The Compliance Operator converts security policies into CRDs, which you can use.

The CRD workflow uses these objects:

*   `ProfileBundle`, `Profile`, and `TailoredProfile` to define scan requirements
*   `ScanSetting` to configure the scan type, occurrence, and location
*   `ScanSettingBinding` to process requirements with those settings
*   `ComplianceSuite` to monitor deployed scans
*   Scan results and remediation after the suite reaches the `DONE` phase

{% leveloffset +1 %}{% include "./modules/compliance-crd-workflow.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-crd-profile-bundle.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-crd-profile.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-crd-rule.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-crd-tailored-profile.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-crd-scan-setting.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/compliance-crd-scan-setting-binding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/compliance-crd-compliance-suite.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/compliance-crd-advanced-compliance-scan.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/compliance-crd-compliance-check-result.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/compliance-crd-compliance-remediation.md" %}{% endleveloffset %}