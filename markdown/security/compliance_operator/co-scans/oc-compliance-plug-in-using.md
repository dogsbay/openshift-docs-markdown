---
title: Using the oc-compliance plugin
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using the oc-compliance plugin {id="using-oc-compliance-plug-in"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oc-compliance-plug-in-understanding" %}

Although the Compliance Operator automates many of the checks and remediations for the cluster, an administrator can use the `oc-compliance` plugin to perform the full process of bringing a cluster into compliance by interacting with the Compliance Operator API and other components.

{% leveloffset +1 %}{% include "./modules/oc-compliance-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-compliance-fetching-raw-results.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-compliance-rerunning-scans.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-compliance-using-scan-setting-bindings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-compliance-printing-controls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-compliance-fetching-compliance-remediation-details.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oc-compliance-viewing-compliance-check-result-details.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Understanding the Compliance Operator](/security/compliance_operator/co-concepts/compliance-operator-understanding#understanding-compliance-operator)