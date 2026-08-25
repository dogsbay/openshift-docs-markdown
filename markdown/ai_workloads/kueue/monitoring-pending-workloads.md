---
title: Monitoring pending workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Monitoring pending workloads {id="monitoring-pending-workloads-install-kueue"}
{%- set context = "monitoring-pending-workloads" %}

{{ kueue_name }} provides the `VisibilityOnDemand` feature to monitor pending workloads. A workload is an application that runs to completion. It can be composed by one or multiple pods that, loosely or tightly coupled, as a whole, complete a task. A workload is the unit of admission in {{ kueue_name }}. {._abstract}

The `VisibilityOnDemand` feature provides the ability for batch administrators to monitor the pipeline of pending jobs in the cluster queue and the local queue and batch users just for local queue, and help users to estimate when their jobs will start.

You can regulate inbound requests and high request volumes, and provide user permissions for viewing the pending workloads.

{% leveloffset +1 %}{% include "./modules/kueue-configuring-api-priority-and-fairness.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [API Priority and Fairness](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/)

{% leveloffset +1 %}{% include "./modules/kueue-providing-user-permissions.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring role-based permissions](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/ai_workloads/red-hat-build-of-kueue#rbac-permissions)

{% leveloffset +1 %}{% include "./modules/kueue-monitoring-pending-workloads-on-demand.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kueue-viewing-pending-workloads-clusterqueue.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/kueue-viewing-pending-workloads-localqueue.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-modifying-monitoring-settings.md" %}{% endleveloffset %}