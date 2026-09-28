{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure NFD feature sources and detection {id="configure-nfd-feature-sources-and-detection-con_{{ context }}"}

You can control which feature sources the Node Feature Discovery (NFD) Operator uses, and which of the detected features it turns into labels, by editing the `NodeFeatureDiscovery` custom resource. Restricting sources and labels keeps node labels limited to the hardware features that matter to your workloads.