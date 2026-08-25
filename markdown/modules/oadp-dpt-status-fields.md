{%- set _mod_docs_content_type = "REFERENCE" %}
# OADP DataProtectionTest CR status fields {id="oadp-dpt-status_{{ context }}"}

Review the status fields in the `DataProtectionTest` (DPT) custom resource (CR) to monitor test progress, upload speed results, bucket metadata, and snapshot test outcomes. This helps you interpret the DPT CR results and identify any issues with your {{ oadp_short }} configuration. {._abstract}

**DPT CR status fields**

| Field | Type | Description |
| --- | --- | --- |
| `phase` | string | Current phase of the DPT CR. Values are `InProgress`, `Complete`, or `Failed`. |
| `lastTested` | timestamp | The timestamp when the DPT CR was last run. |
| `uploadTest` | object | Results of the upload speed test. |
| `bucketMetadata` | object | Information about the storage bucket encryption and versioning. |
| `snapshotTests` | list | Snapshot test results for each persistent volume claim. |
| `snapshotSummary` | string | Aggregated pass/fail summary for snapshots. For example, `2/2 passed`. |
| `s3Vendor` | string | {{ aws_short }} S3-compatible storage bucket vendors. For example, {{ aws_short }}, MinIO, Ceph. |
| `errorMessage` | string | Error message if the DPT CR fails. |