{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ autonode }} {id="rosa-nodes-autonode-about_{{ context }}"}

The {{ autonode }} builds on the open source Karpenter project and provides automatic node provisioning for {{ product_title }} clusters. Karpenter watches for pods that the Kubernetes scheduler marks as unschedulable. It evaluates scheduling constraints, including resource requests, node selectors, affinities, tolerations, and topology spread constraints. Karpenter then provisions nodes that meet the specific requirements of those waiting pods.