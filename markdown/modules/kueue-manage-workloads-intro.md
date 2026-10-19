{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage jobs and workloads with {{ kueue_name }} {id="kueue-manage-workloads-intro_{{ context }}"}

When you create jobs in your cluster, {{ kueue_name }} represents each job as a `Workload` object that tracks resource requirements, decisions, and statuses.  {._abstract}

{{ kueue_name }} does not manipulate your jobs directly; it manages the `Workload` objects and syncs decisions and statuses between the two.