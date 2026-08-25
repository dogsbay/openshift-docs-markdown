{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring encryption for nodes in an {{ ibm_z_title }} or {{ ibm_linuxone_title }} environment {id="configuring-encryption-kvm-ibm-z-linuxone-environment_{{ context }}"}

When installing {{ product_title }} on {{ ibm_z_name }} or {{ ibm_linuxone_name }} with {{ op_system_base }} KVM, you can optionally encrypt the boot volumes of your control plane and compute nodes by using one of the following methods. {._abstract}

*   {{ ibm_name }} Secure Execution
*   Linux Unified Key Setup (LUKS) encryption via {{ ibm_name }} Crypto Express (CEX)
*   Network Bound Disk Encryption (NBDE)