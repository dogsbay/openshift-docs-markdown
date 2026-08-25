{%- set _mod_docs_content_type = "CONCEPT" %}
# What problem is {{ oadp_short }} VMFR solving {id="oadp-vmfr-overview_{{ context }}"}

Recover individual files from virtual machine (VM) backups without restoring the entire VM. Browse multiple backups simultaneously and retrieve only the files you need through standard tools such as a web browser or `rsync`. {._abstract}

Current VM backup recovery workflows require you to restore an entire virtual machine to access a single file. This uses substantial cluster resources and time. The virtual machine file restore (VMFR) feature addresses this problem by providing a Kubernetes-native mechanism for file-level recovery from VM backups created by {{ oadp_short }}.

The VMFR feature uses a two-phase approach:

1.  **Backup discovery**: Identify which Velero backups contain a specified virtual machine by creating a `VirtualMachineBackupsDiscovery` (VMBD) custom resource (CR).
1.  **File restore**: Make the discovered backup files accessible for browsing and downloading by creating a `VirtualMachineFileRestore` (VMFR) CR.

{{ oadp_short }} VMFR offers the following benefits:

*   You can recover individual files from VM backups without restoring the entire VM.
*   You can browse and compare files across multiple backup versions simultaneously.
*   You can access restored files through a web browser or SSH-based tools such as `rsync`, `scp`, and `sftp`.
*   All operations are managed within the cluster by using standard Kubernetes resources.
*   Temporary namespaces isolate file-serving resources and are cleaned up automatically.