{%- set _mod_docs_content_type = "PROCEDURE" %}
# Optimizing clone Performance at scale in {{ rh_storage }} {id="virt-optimizing-clone-performance-at-scale-in-openshift-data-foundation_{{ context }}"}

When you use {{ rh_storage }}, the storage profile configures the default cloning strategy as `csi-clone`. However, this method has limitations, as shown in the following link. {._abstract}

After a certain number of clones are created from a persistent volume claim (PVC), a background flattening process begins, which can significantly reduce clone creation performance at scale.

To improve performance when creating hundreds of clones from a single source PVC, use the `VolumeSnapshot` cloning method instead of the default `csi-clone` strategy.

**Procedure**

1.  Create a `VolumeSnapshot` custom resource (CR) of the source image by using the following content:
    ```yaml
    apiVersion: snapshot.storage.k8s.io/v1
    kind: VolumeSnapshot
    metadata: 
      name: golden-volumesnapshot
      namespace: golden-ns
    spec:
      volumeSnapshotClassName: ocs-storagecluster-rbdplugin-snapclass
      source:
        persistentVolumeClaimName: golden-snap-source
    ```
1.  Add the  `spec.source.snapshot` stanza to reference the `VolumeSnapshot` as the source for the `DataVolume clone`:
    ```yaml
    spec:
      source:
        snapshot:
          namespace: golden-ns
          name: golden-volumesnapshot
    ```