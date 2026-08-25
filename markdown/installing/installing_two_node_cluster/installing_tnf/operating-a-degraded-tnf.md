---
title: Operating a degraded two-node OpenShift cluster with fencing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Operating a degraded two-node OpenShift cluster with fencing {id="operating-a-degraded-tnf"}
{%- set context = "operating-a-degraded-tnf" %}

A two-node OpenShift cluster with fencing (TNF) enters a `degraded` state when one of its two control plane nodes becomes unavailable. The remaining node continues to host the active control plane; however, the cluster loses its high-availability (HA) redundancy until the failed node recovers. {._abstract}

Degraded operation is an intentional design state rather than a system failure. In this state, the cluster remains functional and core services continue to operate. Only specific capabilities that strictly require two-node redundancy are temporarily unavailable.


:::important

A degraded cluster has zero fault tolerance. If the surviving node also fails, the cluster fails. Restore the second node as soon as possible. Degraded operation is a temporary recovery window, not a long-term steady state.

:::


{% leveloffset +1 %}{% include "./modules/tnf-cluster-degradation-causes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-failure-sequence-in-a-tnf-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pacemaker-and-fencing-behavior-during-degraded-operation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-operator-stability-during-degraded-operation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/capabilities-during-degraded-tnf-operation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/prohibited-operations-during-degraded-tnf-operation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/recovering-a-failed-tnf-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/verifying-tnf-cluster-state.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolving-a-fencing-failure-in-tnf.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolving-etcd-not-recovering-on-the-surviving-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/resolving-a-failed-node-not-rejoining-after-power-on.md" %}{% endleveloffset %}