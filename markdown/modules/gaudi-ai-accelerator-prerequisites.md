{%- set _mod_docs_content_type = "CONCEPT" %}
# Intel Gaudi AI accelerators prerequisites {id="gaudi-ai-accelerators-prerequisites_{{ context }}"}

Before using Intel Gaudi AI accelerators for AI/ML workloads in {{ product_title }}, your cluster must meet hardware, access, and software requirements.  {._abstract}

At minimum, you need at least one GPU worker node, cluster-admin access, the OpenShift CLI, and the Node Feature Discovery (NFD) Operator.

*   You have a working {{ product_title }} cluster with at least one GPU worker node.
*   You have access to the {{ product_title }} cluster as a cluster-admin to perform the required steps.
*   You have installed {{ oc_first }}.
*   You have installed the Node Feature Discovery (NFD) Operator and created a `NodeFeatureDiscovery` instance.