---
title: Managing a cluster with multi-architecture compute machines
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "multi-architecture-compute-managing" %}
{% include "./_attributes/common-attributes.md" %}
# Managing a cluster with multi-architecture compute machines {id="multi-architecture-compute-managing"}

Managing a cluster that has nodes with multiple architectures requires you to consider node architecture as you monitor the cluster and manage your workloads. This requires you to take additional considerations into account when you 
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
configure cluster resource requirements and behaviors, or
{%- endif %}
schedule workloads in a multi-architecture cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/multi-architecture-scheduling.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/postinstallation_configuration/configuring-multi-architecture-compute-machines-on-an-openshift-cluster#multiarch-tuning-operator)

{% leveloffset +2 %}{% include "./modules/multi-architecture-scheduling-examples.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
*   [Controlling pod placement on nodes using node affinity](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity)
*   [Controlling pod placement using the scheduler](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)
*   [Modifying a compute machine set](/machine_management/modifying-machineset#machineset-modifying_modifying-machineset)

{% leveloffset +1 %}{% include "./modules/multi-architecture-enabling-64k-pages.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/multi-architecture-import-imagestreams.md" %}{% endleveloffset %}