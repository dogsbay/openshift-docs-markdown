---
title: Managing jobs and workloads
---

# Managing jobs and workloads {#managing-workloads}

When you create jobs in your cluster, {{ kueue_name }} represents each job as a `Workload` object to track resource requirements, decisions, and statuses.

{{ kueue_name }} does not directly manipulate your jobs. Instead, {{ kueue_name }} manages `Workload` objects that represent the resource requirements of a job, and syncs any decisions and statuses between the two objects.
