{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure {{ kueue_name }} quotas and queues {id="configure-kueue-quotas-intro_{{ context }}"}

As an administrator, you configure quotas in {{ kueue_name }} to optimize resource allocation and system throughput for user workloads, including CPU, memory, pods, and GPU. You configure a cluster queue, a resource flavor, and a local queue, after which users submit their workloads to the local queue.