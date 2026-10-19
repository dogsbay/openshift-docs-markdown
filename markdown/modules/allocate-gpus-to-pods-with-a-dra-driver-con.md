{%- set _mod_docs_content_type = "CONCEPT" %}
# Allocate GPUs to pods with a DRA driver {id="allocate-gpus-to-pods-with-a-dra-driver-con_{{ context }}"}

A third-party Dynamic Resource Allocation (DRA) driver advertises the GPUs in the cluster and their attributes, such as product name and memory. You can request a GPU by including those attributes in a resource claim so the pod is scheduled onto a node that has a matching device.