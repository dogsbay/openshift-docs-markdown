{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ oadp_short }} virtual machine data protection {id="oadp-vmdp-overview_{{ context }}"}

You can independently back up and restore your own data from within a virtual machine (VM) by using the {{ oadp_short }} VM data protection (VMDP) command-line tool. This approach helps you secure specific files and directories in your encrypted repository without requiring cluster administrator privileges. {._abstract}

## What problem is VMDP solving {id="_what_problem_is_vmdp_solving"}

Cluster administrators manage traditional {{ oadp_short }} backups. The administrator owns the backup storage location, controls what to back up, and manages the restore process. This means that VM users must rely on an administrator to recover their data, and the backup scope is limited to the persistent volume claims (PVCs) attached to the VM at the time of backup.

VMDP addresses this gap by shifting data ownership to the VM user. The user creates their own encrypted backup repository, chooses what data to protect, and restores data without administrator involvement. This follows zero-trust architecture principles where the user owns the data, the backup, and the encryption keys. Administrators cannot access or restore the user’s backup data.

## What VMDP does {id="_what_vmdp_does"}

VMDP is a command-line tool that runs inside virtual machines on {{ VirtProductName }}. With VMDP, you can complete the following tasks:

*   Back up and restore files and directories from within the VM by using a single command.
*   Protect data accessible over network file systems such as Common Internet File System (CIFS) and Network File System (NFS) shares, which standard {{ oadp_short }} backups typically exclude.
*   Create a personal encrypted repository in S3-compatible or file system storage.
*   Use data deduplication for efficient storage and fast incremental backups.

VMDP is based on Kopia and uses the same repository format.

## Who uses VMDP {id="_who_uses_vmdp"}

VMDP is designed for VM users who need to manage their own backups independently. The user is responsible for:

*   Providing their own credentials to create an encrypted backup repository.
*   Choosing what data to back up and restore.
*   Managing backup lifecycle operations such as listing, deleting, and restoring backups.

Cluster administrators are not involved in the backup and restore process. Their role is limited to deploying the {{ oadp_short }} Operator. The {{ oadp_short }} Operator has the VMDP CLI available for download.

## VMDP and VMFR comparison {id="_vmdp_and_vmfr_comparison"}

{{ oadp_short }} provides two complementary features for VM data recovery:


VMDP (VM data protection)
:   The VM user, without `cluster-admin` privileges, owns the data. The user creates encrypted backups of selected files and directories from within the VM. The user holds the encryption keys and manages the backup lifecycle independently.


VMFR (VM file restore)
:   The cluster administrator manages the backups and file recovery. VMFR enables file-level recovery from admin-created Velero backups of entire VMs, including all PVCs. The administrator controls the backup and restore process.