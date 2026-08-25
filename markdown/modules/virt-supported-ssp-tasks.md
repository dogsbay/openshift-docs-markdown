{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported virtual machine tasks {id="virt-supported-ssp-tasks_{{ context }}"}

Automate virtual machine (VM) provisioning and management in your CI/CD workflows with {{ pipelines_shortname }} tasks designed for virtualization. These tasks allow you to manage VMs and their disks as part of your automated deployment pipelines, streamlining VM lifecycle management. {._abstract}

**Supported virtual machine tasks**

| Task | Description |
| --- | --- |
| `create-vm-from-manifest` | Create a virtual machine from a provided manifest or with `virtctl`. |
| `create-vm-from-template` | Create a virtual machine from a template. |
| `copy-template` | Copy a virtual machine template. |
| `modify-vm-template` | Modify a virtual machine template. |
| `modify-data-object` | Create or delete data volumes or data sources. |
| `cleanup-vm` | Run a script or a command in a virtual machine and stop or delete the virtual machine afterward. |
| `disk-virt-customize` | Use the `virt-customize` tool to run a customization script on a target PVC. |
| `disk-virt-sysprep` | Use the `virt-sysprep` tool to run a sysprep script on a target PVC. |
| `wait-for-vmi-status` | Wait for a specific status of a virtual machine instance and fail or succeed based on the status. |


:::note

Virtual machine creation in pipelines now utilizes `ClusterInstanceType` and `ClusterPreference` instead of template-based tasks, which have been deprecated. The `create-vm-from-template`, `copy-template`, and `modify-vm-template` commands remain available but are not used in default pipeline tasks.

:::