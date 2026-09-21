{%- set _mod_docs_content_type = "CONCEPT" %}
# Evaluate high availability capabilities {id="evaluate-high-availability-capabilities-con_{{ context }}"}

{{ product_title }} distributes control plane and compute machines across hosts so that the cluster keeps running when individual machines fail. Reviewing how machine roles, etcd, and control plane recovery work together helps you assess whether the platform meets your reliability requirements.