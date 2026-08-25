{%- set _mod_docs_content_type = "REFERENCE" %}
# GCP PD CSI driver storage class parameters {id="persistent-storage-csi-gcp-pd-storage-class-ref_{{ context }}"}

To configure persistent volume provisioning behavior for Google Cloud Platform (GCP) persistent disk (PD), use storage class parameters that control disk type, replication, and encryption settings. {._abstract}

The GCP PD Container Storage Interface (CSI) driver uses the CSI `external-provisioner` sidecar as a controller. This is a separate helper container that is deployed with the CSI driver. The sidecar manages persistent volumes (PVs) by triggering the `CreateVolume` operation.

The GCP PD CSI driver uses the `csi.storage.k8s.io/fstype` parameter key to support dynamic provisioning. The following table describes all the GCP PD CSI storage class parameters that are supported by {{ product_title }}.

**CreateVolume Parameters**

| Parameter | Values | Default | Description |
| --- | --- | --- | --- |
| `type` | `pd-ssd`, `pd-standard`, `pd-balanced`, or `hyperdisk-balanced` | `pd-standard` | Allows you to choose between standard PVs or solid-state-drive PVs.<br>The driver does not validate the value, thus all the possible values are accepted.<br>For `hyperdisk-balanced`, be sure to check the limitations under "C3 and N4 instance type limitations". |
| `replication-type` | `none` or `regional-pd` | `none` | Allows you to choose between zonal or regional PVs. |
| `disk-encryption-kms-key` | Fully qualified resource identifier for the key to use to encrypt new disks. | Empty string | Uses customer-managed encryption keys (CMEK) to encrypt new disks. |