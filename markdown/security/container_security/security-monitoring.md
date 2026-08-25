---
title: Monitoring cluster events and logs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring cluster events and logs {id="security-monitoring"}
{%- set context = "security-monitoring" %}

Monitoring and auditing an {{ product_title }} cluster is an important part of safeguarding the cluster and its users against inappropriate usage. There are two main sources of cluster-level information that are useful for this purpose: events and logging. {._abstract}

{% leveloffset +1 %}{% include "./modules/security-monitoring-events.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-monitoring-cluster-logging.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-monitoring-audit-logging.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [List of system events](/nodes/clusters/nodes-containers-events#nodes-containers-events)
*   [Viewing audit logs](/security/audit-log-view#audit-log-view)