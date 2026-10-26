---
title: Increase the cluster network hostPrefix
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Increase the cluster network hostPrefix {id="increasing-cluster-network-hostprefix"}
{%- set context = "increase-cluster-network-hostprefix" %}

You can increase the number of pod IP addresses available on each node by enlarging each node’s OVN-Kubernetes pod subnet after installation. This workflow updates the `k8s.ovn.org/node-subnets` node annotation while the Cluster Version Operator and Cluster Network Operator are scaled down. {._abstract}


:::important

*   Enlarging per-node subnets does not change the support for increased pod density or the number of pods that can be supported per node. Red&#160;Hat supports tested cluster maximums rather than absolute cluster maximums. You must still adhere to the cluster scalability limits, node resources, workload behavior, and operational constraints. See "Planning your environment according to object maximums".
*   This procedure applies only to the cluster network, is supported only with OVN-Kubernetes, and requires sequential node maintenance to apply the updated per-node subnet size.

:::


{% leveloffset +1 %}{% include "./modules/nw-hostprefix-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-hostprefix-planning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-hostprefix-increase-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-hostprefix-drain-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-hostprefix-troubleshooting.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [CIDR range definitions](/networking/networking_overview/cidr-range-definitions#cidr-range-definitions)
*   [Configuring the cluster network range](/networking/configuring_network_settings/configuring-cluster-network-range#configuring-cluster-network-range)
*   [Planning your environment according to object maximums](/scalability_and_performance/planning-your-environment-according-to-object-maximums#planning-your-environment-according-to-object-maximums)