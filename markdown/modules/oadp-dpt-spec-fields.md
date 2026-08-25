{%- set _mod_docs_content_type = "REFERENCE" %}
# OADP DataProtectionTest CR specification fields {id="oadp-dpt-spec_{{ context }}"}

Review the specification fields available in the `DataProtectionTest` (DPT) custom resource (CR) to configure backup location, upload speed tests, CSI volume snapshot tests, and other options. This helps you customize the DPT CR to validate your specific {{ oadp_short }} configuration requirements. {._abstract}

**DPT CR spec fields**

| Field | Type | Description |
| --- | --- | --- |
| `backupLocationName` | string | Name of the `BackupStorageLocation` CR configured in the `DataProtectionApplication` (DPA) CR. |
| `backupLocationSpec` | object | Inline specification of the `BackupStorageLocation` CR. |
| `uploadSpeedTestConfig` | object | Configuration to run an upload speed test to the object storage. |
| `csiVolumeSnapshotTestConfigs` | list | List of persistent volume claims to take a snapshot of and to verify the snapshot readiness. |
| `forceRun` | boolean | Re-run the DPT CR even if status is `Complete` or `Failed`. |
| `skipTLSVerify` | boolean | Bypasses the TLS certificate validation if set to `true`. |