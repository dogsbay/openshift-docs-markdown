{%- set _mod_docs_content_type = "CONCEPT" %}
# Requests versus limits {id="quotas-requests-vs-limits_{{ context }}"}

To manage cluster capacity, use a project quota to restrict container compute resources. When you configure CPU and memory quotas, incoming containers can explicitly request or limit resources to ensure stable performance. {._abstract}

If the quota has a value specified for `requests.cpu` or `requests.memory`, then it requires that every incoming container make an explicit request for those resources. If the quota has a value specified for `limits.cpu` or `limits.memory`, then it requires that every incoming container specify an explicit limit for those resources.