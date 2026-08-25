{%- set _mod_docs_content_type = "CONCEPT" %}
# Workload placement considerations {id="workload-placement-considerations-span_{{ context }}"}

Place critical workloads across sites in a multisite cluster so you avoid single points of failure during a data center outage. {._abstract}

With multisite clusters, administrators and developers must take special considerations into account to ensure that critical workloads are scheduled or placed based on the proper hardware or hosts within the topology of the cluster. This planning ensures that the applications and services are highly available and fault-tolerant based on the topology of the cluster deployment.

Without this planning, {{ product_title }} might schedule workloads on hosts within the cluster so that a single point of failure (SPoF) exists for {{ product_title }} infrastructure services and other application services if a data center outage occurs.