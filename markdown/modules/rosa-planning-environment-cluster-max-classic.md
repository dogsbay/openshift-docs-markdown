{%- set _mod_docs_content_type = "REFERENCE" %}
# Tested cluster maximums for {{ product_title }} {id="planning-environment-tested-maximums-classic_{{ context }}"}

These tested maximums apply to {{ product_title }} clusters. Use the table to plan worker nodes, namespaces, pods, and related objects within validated scale ranges. {._abstract}

| Maximum type | {{ product_title }} tested maximum |
| --- | --- |
| Number of compute (worker) nodes | 249 |
| Number of pods | 60,000 |
| Number of pods per node | 250 |
| Number of deployments | 11,200 |
| Number of namespaces | 2,250 |
| Number of routes | 4,500 |
| Number of secrets | 29,000 |
| Number of config maps | 34,000 |
| Number of services | 22,000 |
| Number of pods per namespace | 2,000 |
| Number of services per namespace | 1,000 |
| Number of deployments per namespace | 2,000 |