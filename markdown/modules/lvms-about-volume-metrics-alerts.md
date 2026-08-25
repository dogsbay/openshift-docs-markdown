{%- set _mod_docs_content_type = "CONCEPT" %}
# Metrics and alerts overview {id="lvms-about-volume-metrics-alerts_{{ context }}"}

You can monitor thin pool and volume group usage through {{ lvms }} metrics, and receive alerts at 75% (near full) and 85% (critical) capacity thresholds to take corrective action before storage operations fail. {._abstract}

## Metrics {id="lvms-monitoring-using-lvms-metrics_{{ context }}"}
You can monitor {{ lvms }} by viewing the metrics.

The following table describes the `topolvm` metrics:

**`topolvm` metrics**

| Alert | Description |
| --- | --- |
| `topolvm_thinpool_data_percent` | Indicates the percentage of data space used in the LVM thinpool. |
| `topolvm_thinpool_metadata_percent` | Indicates the percentage of metadata space used in the LVM thinpool.  |
| `topolvm_thinpool_size_bytes` | Indicates the size of the LVM thin pool in bytes. |
| `topolvm_volumegroup_available_bytes` | Indicates the available space in the LVM volume group in bytes. |
| `topolvm_volumegroup_size_bytes` | Indicates the size of the LVM volume group in bytes. |
| `topolvm_thinpool_overprovisioned_available` | Indicates the available over-provisioned size of the LVM thin pool in bytes. |


:::note

Metrics are updated every 10 minutes or when there is a change, such as a new logical volume creation, in the thin pool.

:::


## Alerts {id="lvms-monitoring-using-lvms-alerts_{{ context }}"}
When the thin pool and volume group reach maximum storage capacity, further operations fail. This can lead to data loss.

{{ lvms }} sends the following alerts when the usage of the thin pool and volume group exceeds a certain value:

**{{ lvms }} alerts**

| Alert | Description |
| --- | --- |
| `VolumeGroupUsageAtThresholdNearFull` | This alert is triggered when both the volume group and thin pool usage exceeds 75% on nodes. Data deletion or volume group expansion is required. |
| `VolumeGroupUsageAtThresholdCritical` | This alert is triggered when both the volume group and thin pool usage exceeds 85% on nodes. In this case, the volume group is critically full. Data deletion or volume group expansion is required. |
| `ThinPoolDataUsageAtThresholdNearFull` | This alert is triggered when the thin pool data uusage in the volume group exceeds 75% on nodes. Data deletion or thin pool expansion is required. |
| `ThinPoolDataUsageAtThresholdCritical` | This alert is triggered when the thin pool data usage in the volume group exceeds 85% on nodes. Data deletion or thin pool expansion is required. |
| `ThinPoolMetaDataUsageAtThresholdNearFull` | This alert is triggered when the thin pool metadata usage in the volume group exceeds 75% on nodes. Data deletion or thin pool expansion is required. |
| `ThinPoolMetaDataUsageAtThresholdCritical` | This alert is triggered when the thin pool metadata usage in the volume group exceeds 85% on nodes. Data deletion or thin pool expansion is required. |