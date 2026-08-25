{%- set _mod_docs_content_type = "REFERENCE" %}
# CSI snapshot controller and sidecar {id="persistent-storage-csi-snapshots-controller-sidecar_{{ context }}"}

Container Storage Interface (CSI) snapshots require two components: a controller deployed by {{ product_title }} to the control plane, and a vendor-provided sidecar with the CSI driver. The controller manages `VolumeSnapshot` bindings while the sidecar triggers create and delete operations. {._abstract}

The CSI snapshot controller and sidecar provide volume snapshotting through the {{ product_title }} API. These external components run in the cluster.

The external controller is deployed by the CSI Snapshot Controller Operator.


External controller
:   The CSI snapshot controller binds `VolumeSnapshot` and `VolumeSnapshotContent` objects. The controller manages dynamic provisioning by creating and deleting `VolumeSnapshotContent` objects.


External sidecar
:   Your CSI driver vendor provides the `csi-external-snapshotter` sidecar. This is a separate helper container that is deployed with the CSI driver. The sidecar manages snapshots by triggering `CreateSnapshot` and `DeleteSnapshot` operations. Follow the installation instructions provided by your vendor.