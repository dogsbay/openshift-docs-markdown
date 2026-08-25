---
title: Gathering audit logs
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-audit-log" %}
{% include "./_attributes/common-attributes.md" %}
# Gathering audit logs {id="nodes-cma-autoscaling-custom-audit-log"}

You can gather audit logs, which are a security-relevant chronological set of records documenting the sequence of activities that have affected the system by individual users, administrators, or other components of the system.

For example, audit logs can help you understand where an autoscaling request is coming from. This is key information when backends are getting overloaded by autoscaling requests made by user applications and you need to determine which is the troublesome application.

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-audit.md" %}{% endleveloffset %}