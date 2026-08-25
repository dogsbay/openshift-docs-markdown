---
title: Verifying node health
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Verifying node health {id="verifying-node-health"}

{%- set context = "verifying-node-health" %}

You can verify and troubleshoot node-related issues by reviewing the status, resource usage, and configuration of a node. {._abstract}

{% leveloffset +1 %}{% include "./modules/reviewing-node-status-usage-and-configuration.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/querying-kubelet-status-on-a-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/querying-cluster-node-journal-logs.md" %}{% endleveloffset %}

{% endif %}