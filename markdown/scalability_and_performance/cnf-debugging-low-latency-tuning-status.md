---
title: Debugging low latency node tuning status
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Debugging low latency node tuning status {id="cnf-debugging-low-latency-tuning-status"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cnf-debugging-low-latency" %}

Use the `PerformanceProfile` custom resource (CR) status fields for reporting tuning status and debugging latency issues in a cluster node.

{% leveloffset +1 %}{% include "./modules/cnf-debugging-low-latency-cnf-tuning-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-debugging-low-latency-cnf-tuning-status-machineconfigpools.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-about-must-gather.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-collecting-low-latency-tuning-debugging-data-for-red-hat-support.md" %}{% endleveloffset %}

**Additional resources**

*   [Gathering data about your cluster with the `must-gather` tool](/support/gathering-cluster-data#gathering-cluster-data)
*   [Managing nodes with MachineConfig and KubeletConfig CRs](/nodes/nodes/nodes-nodes-managing#nodes-nodes-managing)
*   [Using the Node Tuning Operator](/scalability_and_performance/using-node-tuning-operator#using-node-tuning-operator)
*   [Configuring huge pages at boot time](/scalability_and_performance/what-huge-pages-do-and-how-they-are-consumed-by-apps#configuring-huge-pages_huge-pages)
*   [How huge pages are consumed by apps](/scalability_and_performance/what-huge-pages-do-and-how-they-are-consumed-by-apps#how-huge-pages-are-consumed-by-apps_huge-pages)