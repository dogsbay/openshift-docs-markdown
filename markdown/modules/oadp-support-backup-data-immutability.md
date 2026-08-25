{%- set _mod_docs_content_type = "REFERENCE" %}
# OADP support for backup data immutability {id="oadp-support-backup-data-immutability_{{ context }}"}

Starting with {{ oadp_short }} 1.4, you can store {{ oadp_short }} backups in an {{ aws_short }} S3 bucket with enabled versioning. The versioning support is only for {{ aws_short }} S3 buckets and not for S3-compatible buckets. {._abstract}

See the following list for specific cloud provider limitations:

*   AWS S3 service supports backups because an S3 object lock applies only to versioned buckets. You can still update the object data for the new version. However, when backups are deleted, old versions of the objects are not deleted.
*   {{ oadp_short }} backups are not supported and might not work as expected when you enable immutability on Azure Storage Blob.
*   {{ gcp_short }} storage policy only supports bucket-level immutability. Therefore, it is not feasible to implement it in the {{ gcp_short }} environment.

Depending on your storage provider, the immutability options are called differently:

*   S3 object lock
*   Object retention
*   Bucket versioning
*   Write Once Read Many (WORM) buckets

The primary reason for the absence of support for other S3-compatible object storage is that {{ oadp_short }} initially saves the state of a backup as _finalizing_ and then verifies whether any asynchronous operations are in progress.