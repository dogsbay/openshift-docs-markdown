{%- set _mod_docs_content_type = "CONCEPT" %}
# Allocate GPU resources to pods {id="allocate-gpu-resources-to-pods-con_{{ context }}"}

A GPU is exposed to workloads as an extended resource that a pod requests in its resource limits. You can give a pod a whole GPU, or use the Dynamic Accelerator Slicer (DAS) Operator to divide one GPU across several pods.