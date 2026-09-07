{%- set _mod_docs_content_type = "CONCEPT" %}
# About workload partitioning {id="microshift-workload-partitioning-about_{{ context }}"}

Workload partitioning divides the node CPU resources into distinct CPU sets. The primary objective is to limit the amount of CPU usage for all control plane components which reserves rest of the device CPU resources for workloads of the user.

Workload partitioning allocates reserved set of CPUs to {{ microshift_short }} services, cluster management workloads, and infrastructure pods, ensuring that the remaining CPUs in the cluster deployment are untouched and available exclusively for non-platform workloads.