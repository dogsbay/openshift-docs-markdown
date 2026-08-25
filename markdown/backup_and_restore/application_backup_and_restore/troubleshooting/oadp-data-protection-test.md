---
title: OADP Data protection test
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# OADP Data protection test {id="oadp-data-protection-test"}
{%- set toc = true %}

{%- set context = "oadp-data-protection-test" %}

Validate your {{ oadp_short }} configuration by using the `DataProtectionTest` (DPT) custom resource (CR). This helps you ensure your data protection environment is properly configured and performing according to your requirements before performing backups. {._abstract}

The DPT checks the upload performance of backups to object storage, CSI snapshot readiness for persistent volume claims, and storage bucket configuration such as encryption and versioning. 

{% leveloffset +1 %}{% include "./modules/oadp-dpt-spec-fields.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-dpt-status-fields.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/using-data-protection-test.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-dpt-use-case-bsl-spec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-dpt-use-case-azure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-troubleshooting-dpt.md" %}{% endleveloffset %}