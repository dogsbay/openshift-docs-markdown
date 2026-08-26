{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ autonode }} {id="rosa-nodes-autonode-about_{{ context }}"}

The {{ autonode }} builds on the open source Karpenter project to provide automatic node provisioning for {{ product_title }} clusters. {._abstract}

Karpenter watches for pods that the Kubernetes scheduler marks as unschedulable and evaluates their scheduling constraints, such as resource requests, node selectors, affinities, tolerations, and topology spread constraints. Karpenter then provisions nodes that meet the requirements of those waiting pods.