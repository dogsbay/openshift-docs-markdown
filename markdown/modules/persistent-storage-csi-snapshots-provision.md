{%- set _mod_docs_content_type = "REFERENCE" %}
# Volume snapshot provisioning {id="persistent-storage-csi-snapshots-provision_{{ context }}"}

You can provision volume snapshots in {{ product_title }} using either dynamic provisioning to create new snapshots on-demand or static provisioning to reference pre-existing snapshots. {._abstract}

## Dynamic provisioning {id="snapshots-dynamic-provisioning_{{ context }}"}
Instead of using a preexisting snapshot, you can request that a snapshot be taken dynamically from a persistent volume claim. Parameters are specified using a `VolumeSnapshotClass` CRD.

## Static provisioning {id="snapshots-manual-provisioning_{{ context }}"}
As a cluster administrator, you can manually pre-provision a number of `VolumeSnapshotContent` objects. These carry the real volume snapshot details available to cluster users.