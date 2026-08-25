---
title: Host security
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Host security {id="security-host-sec"}
{%- set context = "security-host-sec" %}

{% leveloffset +1 %}{% include "./modules/security-rhcos-overview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About RHCOS](/architecture/architecture-rhcos#rhcos-about_architecture-rhcos)
*   [Red Hat Enterprise Linux CoreOS (RHCOS)](/architecture/architecture-rhcos)
*   [Linux capabilities](/post_installation_configuration/day_2_core_cnf_clusters/security/security-host-sec#security-linux-capabilities-overview_security-host-sec)

{% leveloffset +1 %}{% include "./modules/security-command-line-host-access.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Using node disruption policies to minimize disruption from machine config changes](/machine_configuration/machine-config-node-disruption#machine-configs-configure_machine-config-node-disruption)
*   [Starting debug pods with root access](/support/troubleshooting/investigating-pod-issues#starting-debug-pods-with-root-access_investigating-pod-issues)
*   [How to connect to {{ product_title }} 4.x Cluster nodes using SSH bastion pod](https://access.redhat.com/solutions/4073041)

{% leveloffset +1 %}{% include "./modules/security-linux-capabilities-overview.md" %}{% endleveloffset %}