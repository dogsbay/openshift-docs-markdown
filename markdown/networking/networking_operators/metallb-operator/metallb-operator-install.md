---
title: Installing the MetalLB Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the MetalLB Operator {id="metallb-operator-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "metallb-operator-install" %}

As a cluster administrator, you can add the MetalLB Operator so that the Operator can manage the lifecycle for an instance of MetalLB on your cluster.

MetalLB and IP failover are incompatible. If you configured IP failover for your cluster, perform the steps to [remove IP failover](/networking/configuring_network_settings/configuring-ipfailover#nw-ipfailover-remove_configuring-ipfailover) before you install the Operator.

{% leveloffset +1 %}{% include "./modules/metallb-installing-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-installing-operator-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-operator-initial-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-operator-deployment-specifications-for-metallb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-operator-limit-speaker-to-nodes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-operator-setting-pod-priority-affinity.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-operator-setting-pod-CPU-limits.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_metallb-operator-install"}

*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about)
*   [Understanding pod priority](/nodes/pods/nodes-pods-priority#nodes-pods-priority-about_nodes-pods-priority)
*   [Understanding pod affinity](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity-about_nodes-scheduler-pod-affinity)