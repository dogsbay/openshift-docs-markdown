---
title: Editing kubelet log level verbosity and gathering logs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Editing kubelet log level verbosity and gathering logs {id="editing-kubelet-log-level-verbosity"}
{%- set context = "editing-kubelet-log-level-verbosity" %}

To troubleshoot some issues with nodes, establish the kubelet’s log level verbosity depending on the issue to be tracked.

{% leveloffset +1 %}{% include "./modules/modifying-kubelet-as-one-time-scenario.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-kubelet-log-level-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/log-verbosity-descriptions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gathering-kubelet-logs.md" %}{% endleveloffset %}