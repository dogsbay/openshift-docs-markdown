{%- set _mod_docs_content_type = "CONCEPT" %}
# Make changes to the CRI-O settings on my nodes {id="make-changes-to-the-cri-o-settings-on-my-nodes-con_{{ context }}"}

You can change CRI-O settings such as the log level, the container runtime, and the maximum overlay size by creating a `ContainerRuntimeConfig` object. The Machine Config Operator applies the settings to every node in the machine config pool that you target.