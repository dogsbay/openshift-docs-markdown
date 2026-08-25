{%- set _mod_docs_content_type = "CONCEPT" %}
# Purpose of the Machine Config Operator {id="troubleshooting-mco-purpose_{{ context }}"}

The Machine Config Operator (MCO) manages and applies configuration and updates of {{ op_system_first }} and container runtime, including everything between the kernel and kubelet.
Managing {{ op_system }} is important since most telecommunications companies run on bare-metal hardware and use some sort of hardware accelerator or kernel modification.
Applying machine configuration to {{ op_system }} manually can cause problems because the MCO monitors each node and what is applied to it. {._abstract}

You must consider these minor components and how the MCO can help you manage your clusters effectively.


:::important

You must use the MCO to perform all changes on worker or control plane nodes.
Do not manually make changes to {{ op_system }} or node files.

:::