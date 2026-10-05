{%- set _mod_docs_content_type = "CONCEPT" %}
# Manage the configuration and lifecycle of control plane machines {id="manage-the-configuration-and-lifecycle-of-control-plane-machines-con_{{ context }}"}

A control plane machine set keeps the control plane at the desired count and configuration, replacing a machine when its specification changes or when it becomes unhealthy. You activate the machine set, watch its status, and recover the control plane when a machine is lost.