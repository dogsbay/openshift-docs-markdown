---
title: Gang scheduling
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Gang scheduling {id="gangscheduling"}
{%- set context = "gangscheduling" %}

You can use gang scheduling to ensure that a group, or gang, of related jobs starts only when all required resources are available.

{{ kueue_name }} enables gang scheduling by suspending jobs until the {{ product_title }} cluster can guarantee the capacity to start and execute all of the related jobs in the _gang_ together. This is also known as _all-or-nothing_ scheduling.

Gang scheduling is important if you are working with expensive, limited resources, such as GPUs. Gang scheduling can prevent jobs from claiming but not using GPUs, which can improve GPU utilization and can reduce running costs. Gang scheduling can also help to prevent issues like resource segmentation and deadlocking.

{% leveloffset +1 %}{% include "./modules/kueue-configuring-gangscheduling.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Creating a Kueue custom resource](/ai_workloads/kueue/install-kueue#create-kueue-cr_install-kueue)