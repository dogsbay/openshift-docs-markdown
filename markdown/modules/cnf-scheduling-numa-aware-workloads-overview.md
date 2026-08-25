{%- set _mod_docs_content_type = "CONCEPT" %}
# Scheduling NUMA-aware workloads {id="cnf-scheduling-numa-aware-workloads-overview_{{ context }}"}

To process latency-sensitive and high-performance workloads efficiently, configure your {{ product_title }} cluster for NUMA-aware scheduling. This process aligns pods with specific NUMA zones to minimize network delays and maximize compute resource utilization. {._abstract}

Clusters running latency-sensitive workloads typically feature performance profiles that help to minimize workload latency and optimize performance. The NUMA-aware scheduler deploys workloads based on available node NUMA resources and with respect to any performance profile settings applied to the node. The combination of NUMA-aware deployments, and the performance profile of the workload, ensures that workloads are scheduled in a way that maximizes performance.

For the NUMA Resources Operator to be fully operational, you must deploy the `NUMAResourcesOperator` custom resource and the NUMA-aware secondary pod scheduler.