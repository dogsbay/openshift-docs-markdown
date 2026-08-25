---
title: Monitoring user workload in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring user workload in a disconnected environment {id="hcp-dc-monitor"}
{%- set context = "hcp-dc-monitor" %}

When the `--enable-uwm-telemetry-remote-write` option is enabled, user workload monitoring is enabled and it can remotely write telemetry metrics from control planes. 

{% leveloffset +1 %}{% include "./modules/hcp-dc-usr-wkld.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-verify.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-dc-addon.md" %}{% endleveloffset %}