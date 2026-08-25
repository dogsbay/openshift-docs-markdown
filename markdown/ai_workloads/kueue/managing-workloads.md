---
title: Managing jobs and workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing jobs and workloads {id="managing-workloads"}
{%- set context = "managing-workloads" %}

When you create jobs in your cluster, {{ kueue_name }} represents each job as a `Workload` object to track resource requirements, decisions, and statuses. {._abstract}

{{ kueue_name }} does not directly manipulate your jobs. Instead, {{ kueue_name }} manages `Workload` objects that represent the resource requirements of a job, and syncs any decisions and statuses between the two objects.

{% leveloffset +1 %}{% include "./modules/kueue-label-namespaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kueue-configuring-labelpolicy.md" %}{% endleveloffset %}