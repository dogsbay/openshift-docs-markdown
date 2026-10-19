{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure admission fair sharing {id="kueue-admission-fair-sharing-intro_{{ context }}"}

Use admission fair sharing to distribute workloads fairly across local queues that share a single `ClusterQueue` object.  {._abstract}

Admission fair sharing prioritizes workloads from local queues that have used fewer resources historically, tracking usage over time with a configurable decay function so that no tenant of a shared cluster queue is starved of resources.