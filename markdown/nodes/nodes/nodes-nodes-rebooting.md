---
title: Understanding node rebooting
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding node rebooting {id="nodes-nodes-rebooting"}
{%- set context = "nodes-nodes-rebooting" %}

Review the following information to learn about rebooting a node without causing an outage for applications running on the
platform by first evacuating the pods on the node.  {._abstract}

For pods that are made highly available by the routing tier, nothing
else needs to be done. For other pods needing storage, typically databases, it
is critical to ensure that they can remain in operation with one pod
temporarily going offline. While implementing resiliency for stateful pods
is different for each application, in all cases it is important to configure
the scheduler to use node anti-affinity to
ensure that the pods are properly spread across available nodes.

Another challenge is how to handle nodes that are running critical
infrastructure such as the router or the registry. The same node evacuation
process applies, though it is important to understand certain edge cases.

{% leveloffset +1 %}{% include "./modules/nodes-nodes-rebooting-infrastructure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-rebooting-affinity.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-rebooting-router.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-rebooting-gracefully.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Placing pods relative to other pods using affinity and anti-affinity rules](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity)
*   [Backing up etcd data](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)