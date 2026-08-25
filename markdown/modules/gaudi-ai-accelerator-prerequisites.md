{%- set _mod_docs_content_type = "CONCEPT" %}
# Intel Gaudi AI accelerators prerequisites {id="gaudi-ai-accelerators-prerequisites_{{ context }}"}

*   You have a working {{ product_title }} cluster with at least one GPU worker node.
*   You have access to the {{ product_title }} cluster as a cluster-admin to perform the required steps.
*   You have installed {{ oc_first }}.
*   You have installed the Node Feature Discovery (NFD) Operator and created a `NodeFeatureDiscovery` instance.