---
title: Gang scheduling
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Gang scheduling {id="gangscheduling"}
{%- set context = "gangscheduling" %}

Configure gang scheduling in {{ kueue_name }} for _all-or-nothing_ admission of workloads that require a group of pods to run together. {._abstract}

Gang scheduling can improve resource use, help resolve deadlocks, and reduce costs.

A deadlock can occur when workloads compete for limited resources and not all required pods reach a ready state. For example, running workers in a distributed training job can hold GPUs while waiting for the remaining workers to start.

You can specify how {{ kueue_name }} admits workloads and responds when pods do not reach a ready state.

To reduce competition for resources while pods start, configure sequential admission. To admit workloads without waiting for pods in admitted workloads to reach a ready state, configure parallel admission.

To limit how long workloads hold quota when pods do not reach a ready state during startup or recovery, set cluster-wide readiness timeouts. Use requeue settings to specify whether and how {{ kueue_name }} returns the workload to the queue.

{% leveloffset +1 %}{% include "./modules/kueue-workload-readiness-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configuring-gangscheduling.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-manage-workload-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-gang-scheduling-timeout-requeue-fields.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Creating a Kueue custom resource](/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)