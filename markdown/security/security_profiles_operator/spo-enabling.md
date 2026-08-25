---
title: Enabling the Security Profiles Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Enabling the Security Profiles Operator {id="spo-enabling"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "spo-enabling" %}

Before you can use the Security Profiles Operator, you must ensure the Operator is deployed in the cluster.


:::important

All cluster nodes must have the same release version in order for this Operator to function properly.
As an example, for nodes running {{ op_system }}, all nodes must have the same {{ op_system }} version.

:::



:::important

The Security Profiles Operator supports only Red Hat Enterprise Linux CoreOS (RHCOS) worker nodes. Red Hat Enterprise Linux (RHEL) nodes are not supported.

:::



:::important

The Security Profiles Operator supports `x86_64` and `ppc64le` architecture.

:::


{% leveloffset +1 %}{% include "./modules/spo-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-installing-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/spo-logging-verbosity.md" %}{% endleveloffset %}