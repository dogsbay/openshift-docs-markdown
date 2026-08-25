{%- set _mod_docs_content_type = "CONCEPT" %}
# Launching an {{ ibm_title }} Secure Execution VM on {{ ibm_z_title }} and {{ ibm_linuxone_title }} {id="virt-launching-ibm-secure-execution-vm-ibm-z_{{ context }}"}

Before launching an {{ ibm_name }} Secure Execution VM on {{ ibm_z_name }} and {{ ibm_linuxone_name }}, you must add the `launchSecurity` parameter to the VM manifest. Otherwise, the VM does not start correctly because it does not have access to the devices.