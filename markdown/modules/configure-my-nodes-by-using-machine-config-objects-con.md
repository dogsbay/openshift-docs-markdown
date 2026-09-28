{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure my nodes by using machine config objects {id="configure-my-nodes-by-using-machine-config-objects-con_{{ context }}"}

You can create `MachineConfig` custom resources (CR) that modify files, systemd unit files, and other operating system features running on {{ product_title }} nodes. By using `MachineConfig` objects, you can perform tasks such as disabling chronyd, adding kernel arguments, enabling multipathing, and adding {{ op_system }} extensions.