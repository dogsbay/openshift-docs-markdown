{%- set _mod_docs_content_type = "CONCEPT" %}
# Harden boot integrity for control plane machines {id="harden-boot-integrity-for-control-plane-machines-con_{{ context }}"}

Secure boot and a virtual Trusted Platform Module let a machine verify its own firmware and boot loader before the operating system starts. Turning these on for the control plane helps you detect a control plane machine whose boot chain was changed.