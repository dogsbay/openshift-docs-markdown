{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure the {{ osc }} feature on my nodes {id="configure-the-openshift-sandboxed-container-feature-on-my-nodes-con_{{ context }}"}

You can prepare the nodes in a pool for {{ osc }} by creating a machine config that enables the {{ op_system_base }} `sandboxed-containers` extension. The Machine Config Operator adds the extension to every node in the pool.