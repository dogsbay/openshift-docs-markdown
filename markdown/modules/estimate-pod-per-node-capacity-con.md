{%- set _mod_docs_content_type = "CONCEPT" %}
# Estimate pod-per-node capacity {id="estimate-pod-per-node-capacity-con_{{ context }}"}

The number of pods that a node can host depends on the CPU and memory of the node, the `maxPods` setting, and the tested per-node ceiling for your release. Estimate this capacity before you create a cluster so that your expected workload does not deplete node resources.