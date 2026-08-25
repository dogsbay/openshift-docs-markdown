{%- set _mod_docs_content_type = "CONCEPT" %}
# How {{ oadp_short }} VMFR works {id="oadp-vmfr-how-it-works_{{ context }}"}

Review how {{ oadp_short }} virtual machine file restore (VMFR) processes file-level restore requests through a two-phase workflow that discovers virtual machine (VM) backups and makes their contents accessible for browsing and downloading. {._abstract}

## Backup discovery phase {id="_backup_discovery_phase"}

The backup discovery phase identifies which Velero backups contain a specified VM. When you create a `VirtualMachineBackupsDiscovery` (VMBD) CR, the discovery controller performs the following steps:

1.  Compiles a list of candidate backups from explicitly named backups or all cluster backups.
1.  Filters candidates by time range if you specify `startTime` and `endTime` boundaries.
1.  Validates that each candidate backup is in the `Completed` phase.
1.  Verifies that the specified VM is present in each candidate backup by querying Velero metadata.
1.  Updates the VMBD status with categorized results of valid and invalid backups.

## File restore phase {id="_file_restore_phase"}

The file restore phase makes the discovered backup files accessible. When you create a `VirtualMachineFileRestore` (VMFR) CR, the restore controller performs the following steps:

1.  Validates that the referenced VMBD CR exists and is in the `Completed` phase.
1.  Verifies that the selected backups exist in the valid discovery results.
1.  Extracts persistent volume claim (PVC) metadata from the selected backup manifests.
1.  Creates a temporary namespace to isolate file-serving resources.
1.  Triggers Velero restore objects for the PVCs for each backup. The restore objects use `includedResources` to restore only `PersistentVolumeClaims` (PVCs) and `VolumeSnapshots`, and use `orLabelSelectors` to target specific PVCs by their `velero.kubevirt.io/pvc-uid` label. A `namespaceMapping` redirects the restored PVCs to the temporary namespace.
1.  Creates a file-serving pod with an initialization container and access sidecars.

## File-serving pod architecture {id="_file-serving_pod_architecture"}

The file-serving pod uses `libguestfs` and FUSE to mount VM disk images without requiring privileged access. The initialization container performs the following steps:

1.  Scans PVCs to locate VM disk image files.
1.  Detects disk image formats, including `qcow2` and `raw`.
1.  Mounts disk images as read-only under the `/backups/` directory.
1.  Organizes files by backup name and PVC name.

After initialization, the sidecars provide file access through web or SSH methods.

The mounted directory structure provides an intuitive organization as shown in the following example:

```terminal
/backups/
  <backup_name_1>/
    <vm_disk_root>/
      etc/
      var/
    <vm_disk_data>/
      application-data/
  <backup_name_2>/
    <vm_disk_root>/
      etc/
      var/
```