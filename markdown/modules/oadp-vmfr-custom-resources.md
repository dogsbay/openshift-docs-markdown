{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ oadp_short }} VMFR custom resources {id="oadp-vmfr-custom-resources_{{ context }}"}

Use {{ oadp_short }} virtual machine file restore (VMFR) custom resources to discover VM backups and restore individual files from those backups. {._abstract}

The {{ oadp_short }} VMFR feature uses the following custom resources (CRs) to perform file-level restore operations:

**Custom resources**

| **CR** | **Description** |
| --- | --- |
| `VirtualMachineBackupsDiscovery` (VMBD) | Identifies which Velero backups contain a specified virtual machine. Returns categorized results of valid and invalid backups. |
| `VirtualMachineFileRestore` (VMFR) | Orchestrates the workflow for making discovered backup files accessible through web or SSH access methods. |