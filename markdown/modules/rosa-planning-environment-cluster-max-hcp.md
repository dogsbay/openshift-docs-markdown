{%- set _mod_docs_content_type = "REFERENCE" %}
# Tested cluster maximums for {{ product_title }} {id="planning-environment-tested-maximums-hcp_{{ context }}"}

These tested maximums apply to {{ product_title }} clusters. Use the table to plan worker nodes, namespaces, pods, and related objects within validated scale ranges. {._abstract}

| Maximum type | {{ product_title }} tested maximum |
| --- | --- |
| Number of compute (worker) nodes | 501 |
| Number of pods | 105,205 |
| Number of pods per node | 250 |
| Number of deployments | 22,600 |
| Number of namespaces | 4,500 |
| Number of routes | 9,000 |
| Number of secrets | 59,000 |
| Number of config maps | 68,000 |
| Number of services | 38,000 |
| Number of pods per namespace | 2,000 |
| Number of services per namespace | 1,000 |
| Number of deployments per namespace | 2,000 |