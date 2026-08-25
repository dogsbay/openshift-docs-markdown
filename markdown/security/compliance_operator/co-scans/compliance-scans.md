---
title: Compliance Operator scans
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Compliance Operator scans {id="compliance-operator-scans"}
{%- set context = "compliance-operator-scans" %}

You can use the `ScanSetting` and `ScanSettingBinding` APIs to run compliance scans with the Compliance Operator. {._abstract}

For more information on these API objects, run the following command:

```terminal
$ oc explain scansettings
```

or

```terminal
$ oc explain scansettingbindings
```

{% leveloffset +1 %}{% include "./modules/running-compliance-scans.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-custom-storage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/running-compliance-scans-worker-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-scansetting-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-operator-hcp-mgmt-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-applying-resource-requests-and-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-scheduling-pods-with-resource-requests.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Increasing Compliance Operator resource limits](/security/compliance_operator/co-scans/compliance-operator-troubleshooting#compliance-increasing-operator-limits_compliance-troubleshooting)
*   [Compliance Operator shows INCONSISTENT scan result with worker node](https://access.redhat.com/solutions/6970861)
*   [Managing Compliance Operator result and remediation](/security/compliance_operator/co-scans/compliance-operator-remediation#compliance-operator-remediation)