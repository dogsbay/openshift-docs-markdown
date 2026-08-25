---
title: Modifying a compute machine set
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Modifying a compute machine set {id="modifying-machineset"}
{%- set context = "modifying-machineset" %}

To add labels, change the instance type, change block storage, or make other changes, you can modify a compute machine set. {._abstract}


:::note

If you need to scale a compute machine set without making other changes, see "Manually scaling a compute machine set".

:::


{% leveloffset +1 %}{% include "./modules/machineset-modifying.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Lifecycle hooks for the machine deletion phase](/machine_management/deleting-machine#machine-lifecycle-hook-deletion_deleting-machine)
*   [Manually scaling a compute machine set](/machine_management/manually-scaling-machineset#machineset-manually-scaling_manually-scaling-machineset)
*   [Controlling pod placement using the scheduler](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)