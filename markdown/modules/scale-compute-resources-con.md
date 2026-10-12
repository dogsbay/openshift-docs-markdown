{%- set _mod_docs_content_type = "CONCEPT" %}
# Scale workloads to match demand {id="scale-compute-resources-con_{{ context }}"}

A horizontal autoscaler changes how many pod replicas a workload runs. A vertical autoscaler changes the CPU and memory that each pod requests. Both respond to the load the workload is under, so the workload keeps the resources it needs without manual intervention.