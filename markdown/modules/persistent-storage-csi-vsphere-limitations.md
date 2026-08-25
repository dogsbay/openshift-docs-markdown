{%- set _mod_docs_content_type = "CONCEPT" %}
# vSphere CSI limitations {id="persistent-storage-csi-vsphere-limitations_{{ context }}"}

Before deploying vSphere storage volumes, verify that your configuration meets the static provisioning and snapshot restoration requirements to avoid compatibility issues. {._abstract}

The following limitations apply to the vSphere Container Storage Interface (CSI) Driver Operator:

*   The vSphere CSI Driver supports dynamic and static provisioning. However, when using static provisioning in the PV specifications, do not use the key `storage.kubernetes.io/csiProvisionerIdentity` in `csi.volumeAttributes` because this key indicates dynamically provisioned PVs.
*   {{ product_title }} does not support restoring volume snapshots in a topology domain that does not have access to the datastore where the snapshot resides. You must manually schedule pods that use a persistent volume claim (PVC) that restore a snapshot to a region and zone with the snapshot. Using a shared datastore across all regions and zones meets this requirement.