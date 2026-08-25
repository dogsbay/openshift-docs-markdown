{%- set _mod_docs_content_type = "CONCEPT" %}
# Avoid virtual SCSI devices {id="avoid-virtual-scsi-devices_{{ context }}"}

Configure virtual SCSI devices only if you need to address the device through SCSI-specific interfaces. Configure disk space as virtual block devices rather than virtual SCSI devices, regardless of the backing on the host. {._abstract}

However, you might need SCSI-specific interfaces for:

*   A logical unit number (LUN) for a SCSI-attached tape drive on the host.
*   A DVD ISO file on the host file system that is mounted on a virtual DVD drive.