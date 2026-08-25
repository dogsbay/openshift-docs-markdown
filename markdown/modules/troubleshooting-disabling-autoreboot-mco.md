{%- set _mod_docs_content_type = "CONCEPT" %}
# Disabling the Machine Config Operator from automatically rebooting {id="troubleshooting-disabling-autoreboot-mco_{{ context }}"}

When configuration changes are made by the Machine Config Operator (MCO), {{ op_system_first }} must reboot for the changes to take effect. Whether the configuration change is automatic or manual, an {{ op_system }} node reboots automatically unless it is paused. {._abstract}


:::note

{% include "./snippets/node-icsp-no-drain.md" %}

:::


To avoid unwanted disruptions, you can modify the machine config pool (MCP) to prevent automatic rebooting after the Operator makes changes to the machine config.