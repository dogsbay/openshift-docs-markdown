---
title: Managing Compliance Operator result and remediation
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing Compliance Operator result and remediation {id="compliance-operator-remediation"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "compliance-remediation" %}

You can review compliance scan results and apply remediations to resolve failing rules. Remediations are not applied automatically, so you can verify each change before applying it to your cluster.


:::important

Full remediation for Federal Information Processing Standards (FIPS) compliance requires enabling FIPS mode for the cluster. To enable FIPS mode, you must run the installation program from a {{ op_system_base_full }} computer configured to operate in FIPS mode. For more information about configuring FIPS mode on RHEL, see Installing the system in FIPS mode.

FIPS mode is supported on the following architectures:

*   `x86_64`
*   `ppc64le`
*   `s390x`

:::


{% leveloffset +1 %}{% include "./modules/compliance-filtering-results.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-review.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-apply-remediation-for-customized-mcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-evaluate-kubeletconfig-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-custom-node-pools.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-kubeletconfig-sub-pool-remediation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-applying.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-manual.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-updating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-unapplying.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-removing-kubeletconfig.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-inconsistent.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Modifying nodes](/nodes/nodes/nodes-nodes-managing#nodes-nodes-managing-about_nodes-nodes-managing)
*   [Ignition specification](https://coreos.github.io/ignition/specs/)
*   [Installing the system in FIPS mode](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/assembly_installing-the-system-in-fips-mode_security-hardening)