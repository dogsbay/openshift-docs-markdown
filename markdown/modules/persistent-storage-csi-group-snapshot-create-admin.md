{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a volume group snapshot class {id="persistent-storage-csi-group-snapshots-create-admin_{{ context }}"}

Create a `VolumeGroupSnapshotClass` to define how volume group snapshots are provisioned, including the Container Storage Interface (CSI) driver and deletion policy. Cluster administrators must create this class before users can provision volume group snapshots. {._abstract}

**Prerequisites**

*   Logged in to a running {{ product_title }} cluster with administrator privileges.
*   Enabled this feature using feature gates. For information about how to use feature gates, see "Enabling features sets by using feature gates".

**Procedure**

1.  Create a `VolumeGroupSnapshotClass` YAML file using the following example file:
    ```yaml title="Example volume group snapshot class YAML file"
    apiVersion: groupsnapshot.storage.k8s.io/v1beta2
    kind: VolumeGroupSnapshotClass
    metadata:
      name: csi-hostpath-groupsnapclass
    deletionPolicy: Delete
    driver: hostpath.csi.k8s.io 
         …...
    ```
    *   `kind`: Specifies the `VolumeGroupSnapshotClass` object.
    *   `metadata.name`: Name of the `VolumeGroupSnapshotClass`.
1.  Create the 'VolumeGroupSnapshotClass' object by running the following command:
    ```terminal
    $ oc create -f <volume-group-snapshot-class-filename>.yaml
    ```