---
title: Machine Config Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Machine Config Operator {id="troubleshooting-mco"}
{%- set context = "troubleshooting-mco" %}

The Machine Config Operator provides useful information to cluster administrators and controls what is running directly on the bare-metal host.

The Machine Config Operator differentiates between groups of nodes in the cluster, allowing control plane nodes and worker nodes to run with different configurations.
These groups of nodes run worker or application pods, which are called `MachineConfigPool` (`mcp`) groups.
The same machine config is applied to all nodes or only to one MCP in the cluster.

For more information about the Machine Config Operator, see [Machine Config Operator](/operators/operator-reference#machine-config-operator_cluster-operators-ref).

{% leveloffset +1 %}{% include "./modules/troubleshooting-mco-purpose.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/troubleshooting-mco-apply-several-mcs.md" %}{% endleveloffset %}