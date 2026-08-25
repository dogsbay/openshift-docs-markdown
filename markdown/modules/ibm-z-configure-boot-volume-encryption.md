{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring boot volume encryption in an {{ ibm_z_title }} or {{ ibm_linuxone_title }} environment {id="configuring-boot-volume-encryption-ibm-z-linuxone-environment_{{ context }}"}

You can optionally encrypt the boot volumes of your {{ product_title }} control plane and compute nodes on {{ ibm_z_name }} or {{ ibm_linuxone_name }} by using LUKS encryption via {{ ibm_name }} Crypto Express (CEX) or Network Bound Disk Encryption (NBDE). {._abstract}

*   Linux Unified Key Setup (LUKS) encryption via {{ ibm_name }} Crypto Express (CEX)
*   Network Bound Disk Encryption (NBDE)