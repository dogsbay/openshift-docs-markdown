{%- set _mod_docs_content_type = "CONCEPT" %}
# API Priority and Fairness {id="configuring-api-priority-and-fairness_{{ context }}"}

{{ kueue_name }} uses Kubernetes API Priority and Fairness (APF) To help manage pending workloads. APF is a flow control mechanism that allows you to define API-level policies to regulate inbound requests to the API server. It protects the API server from being overwhelmed by unexpectedly high request volume, while protecting critical traffic from the throttling effect on best-effort workloads. {._abstract}