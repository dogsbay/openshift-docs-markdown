{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ op_system_base }} 9 compatibility {id="virt-rhel-9_{{ context }}"}

{{ VirtProductName }} {{ VirtVersion }} is based on {{ op_system_base_full }} 9. {._abstract}

## {{ op_system_base }} 9 machine type {id="rhel-9-machine-type_{{ context }}"}

All VM templates that are included with {{ VirtProductName }} now use the {{ op_system_base }} 9 machine type by default: `machineType: pc-q35-rhel9.<y>.0`, where `<y>` is a single digit corresponding to the latest minor version of {{ op_system_base }} 9. For example, the value `pc-q35-rhel9.2.0` is used for {{ op_system_base }} 9.2.

Updating {{ VirtProductName }} does not change the `machineType` value of any existing VMs. These VMs continue to function as they did before the update. You can optionally change a VM’s machine type so that it can benefit from {{ op_system_base }} 9 improvements.


:::important

Before you change a VM’s `machineType` value, you must shut down the VM.

:::