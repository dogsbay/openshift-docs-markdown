{%- set _mod_docs_content_type = "CONCEPT" %}
# NVIDIA GPU prerequisites {id="nvidia-gpu-prerequisites_{{ context }}"}

Before using graphics processing unit (GPU) resources on {{ product_title }}, you must meet certain prerequisites so that NVIDIA GPU resources can effectively accelerate workloads. {._abstract}

The following list details these prerequisites:

*   You have a working {{ product_title }} cluster with at least one GPU worker node.
*   You have access to the {{ product_title }} cluster as a `cluster-admin` to perform the required steps.
*   You installed {{ oc_first }}.
*   You installed the node feature discovery (NFD) Operator and created a `nodefeaturediscovery` instance.