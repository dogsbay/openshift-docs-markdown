{%- set _mod_docs_content_type = "CONCEPT" %}
# Allocate GPU resources to pods {id="allocate-gpu-resources-to-pods-con_{{ context }}"}

A GPU is exposed to workloads as an extended resource that a pod requests in its resource limits.
You can give a pod a whole GPU, or divide one GPU across several pods. {._abstract}

**Prerequisites**

*   GPU nodes are available in the cluster.
Complete the "Accelerate workloads with GPUs" job in the Optimize category to add them.
*   The GPU Operator for your hardware vendor is installed.
Complete the "Configure NVIDIA GPU accelerators" job in the Configure category, or the AMD GPU Operator installation procedure in this job.