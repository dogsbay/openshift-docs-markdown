{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure node resource limits {id="configure-node-resource-limits-con_{{ context }}"}

You can limit how many pods and processes a node accepts by setting the `podsPerCore`, `maxPods`, and `podPidsLimit` parameters in a `KubeletConfig` object. Sizing these limits for your hardware keeps nodes stable by preventing resource exhaustion.