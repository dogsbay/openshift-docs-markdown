{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ oadp_short }} VMFR approach and benefits {id="oadp-vmfr-approach-and-benefits_{{ context }}"}

{{ oadp_short }} VMFR recovers individual files from a virtual machine (VM) backup without restoring the whole VM. It works in two phases: discovering which backups contain the VM, then making those files available to browse and download. {._abstract}

1.  **Backup discovery**: Identify which Velero backups contain a specified virtual machine by creating a `VirtualMachineBackupsDiscovery` (VMBD) custom resource (CR).
1.  **File restore**: Make the discovered backup files accessible for browsing and downloading by creating a `VirtualMachineFileRestore` (VMFR) CR.

{{ oadp_short }} VMFR offers the following benefits:

*   You can recover individual files from VM backups without restoring the entire VM.
*   You can browse and compare files across multiple backup versions simultaneously.
*   You can access restored files through a web browser or SSH-based tools such as `rsync`, `scp`, and `sftp`.
*   All operations are managed within the cluster by using standard Kubernetes resources.
*   Temporary namespaces isolate file-serving resources and are cleaned up automatically.