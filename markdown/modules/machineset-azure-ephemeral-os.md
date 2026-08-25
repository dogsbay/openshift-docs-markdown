{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine sets that deploy machines on Ephemeral OS disks {id="machineset-azure-ephemeral-os_{{ context }}"}

You can create a compute machine set running on {{ azure_first }} that deploys machines on Ephemeral OS disks. Ephemeral OS disks use local VM capacity rather than remote {{ azure_full }} Storage. The configuration, therefore, incurs no additional cost and provides lower latency for reading, writing, and reimaging. {._abstract}

**Additional resources**
{._additional-resources}

*   [Ephemeral OS disks for {{ azure_short }} VMs ({{ azure_short }} documentation)](https://docs.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks)