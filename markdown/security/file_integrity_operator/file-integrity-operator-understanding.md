---
title: Understanding the File Integrity Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding the File Integrity Operator {id="understanding-file-integrity-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "file-integrity-operator" %}

The File Integrity Operator is an {{ product_title }} Operator that continually runs file integrity checks on the cluster nodes. It deploys a daemon set that initializes and runs privileged advanced intrusion detection environment (AIDE) containers on each node, providing a status object with a log of files that are modified during the initial run of the daemon set pods.


:::important

Currently, only {{ op_system_first }} nodes are supported.

:::


{% leveloffset +1 %}{% include "./modules/file-integrity-understanding-file-integrity-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/checking-file-intergrity-cr-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/file-integrity-CR-phases.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/file-integrity-understanding-file-integrity-node-statuses-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/file-integrity-node-status.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/file-integrity-node-status-success.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/file-integrity-node-status-failure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/file-integrity-events.md" %}{% endleveloffset %}