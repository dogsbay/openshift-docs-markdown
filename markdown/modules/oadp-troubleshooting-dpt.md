{%- set _mod_docs_content_type = "CONCEPT" %}
# Troubleshooting the DataProtectionTest custom resource {id="oadp-troubleshooting-dpt_{{ context }}"}

Troubleshoot common `DataProtectionTest` (DPT) custom resource (CR) issues, such as stuck progress states, upload test failures, and snapshot test failures. This helps you identify and resolve problems with your DPT configuration. {._abstract}

**DPT CR troubleshooting**

| Error | Reason | Solution |
| --- | --- | --- |
| DPT stuck in `InProgress` state | Bucket credentials or bucket access failure | Check `Secret` object, bucket permissions, and logs. |
| Upload test failed | Incorrect `Secret` object or S3 endpoint | Check the `BackupStorageLocation` object config and the access keys. |
| Snapshot tests fail | Incorrect configuration of CSI snapshot controller | Check the `VolumeSnapshotClass` object availability and the CSI driver logs. |
| Bucket encryption or versioning not populated | Cloud provider limitations | Not all object storage providers expose these fields consistently. |