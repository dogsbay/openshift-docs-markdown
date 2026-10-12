---
title: "Introduction to {{ kueue_name }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Introduction to {{ kueue_name }} {id="about-kueue"}
{%- set context = "about-kueue" %}

{{ kueue_name }} is a job queuing system that decides when workloads start, wait, or are preempted on a shared cluster. Review the following topics to learn what {{ kueue_name }} does, which personas interact with it, and how a job moves through the queuing workflow. {._abstract}

{% leveloffset +1 %}{% include "./modules/kueue-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-personas.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-workflow-overview.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Kueue (upstream documentation)](https://kueue.sigs.k8s.io/docs/)