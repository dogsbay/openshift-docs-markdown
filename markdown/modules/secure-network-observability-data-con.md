{%- set _mod_docs_content_type = "CONCEPT" %}
# Secure network observability data {id="secure-network-observability-data-con_{{ context }}"}

Network flow data can reveal sensitive information about the workloads running in a cluster. Protecting it means controlling who can read stored flows, isolating tenants from one another, and securing the credentials that the collection pipeline uses to reach its storage backend.