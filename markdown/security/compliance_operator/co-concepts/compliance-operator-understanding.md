---
title: Understanding the Compliance Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding the Compliance Operator {id="understanding-compliance-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "understanding-compliance" %}

The Compliance Operator evaluates your {{ product_title }} cluster against compliance benchmarks and identifies gaps so you can remediate them. The Operator uses profiles that target platform components, node configurations, or both depending on the compliance standard you need to meet.

The Compliance Operator lets {{ product_title }} administrators describe the required compliance state of a cluster and provides them with an overview of gaps and ways to remediate them. The Compliance Operator assesses compliance of both the Kubernetes API resources of {{ product_title }}, and the nodes running the cluster. The Compliance Operator uses OpenSCAP, a NIST-certified tool, to scan and enforce security policies provided by the content.


:::important

The Compliance Operator is available for {{ op_system_first }} deployments only.

:::


{% leveloffset +1 %}{% include "./modules/compliance-profiles.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-profile-types.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [ACSC Essential Eight - Hardening Linux Workstations and Servers](https://www.cyber.gov.au/acsc/view-all-content/publications/hardening-linux-workstations-and-servers)
*   [OpenSCAP project](https://www.open-scap.org/)
*   [NIST Security Content Automation Protocol (SCAP)](https://csrc.nist.gov/projects/security-content-automation-protocol)