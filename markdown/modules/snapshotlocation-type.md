{%- set _mod_docs_content_type = "REFERENCE" %}

# SnapshotLocation type {id="snapshotlocation-type_{{ context }}"}

Use the `SnapshotLocation` {{ oadp_short }} API type to define where {{ oadp_short }} stores volume snapshots in {{ product_title }}. It uses the Velero `VolumeSnapshotLocationSpec` to specify the snapshot storage backend. {._abstract}

**SnapshotLocation**

| Property | Type | Description |
| --- | --- | --- |
| `velero` | *[VolumeSnapshotLocationSpec](https://pkg.go.dev/github.com/vmware-tanzu/velero/pkg/apis/velero/v1#VolumeSnapshotLocationSpec) | Location to store volume snapshots, as described in [Volume Snapshot Location](https://pkg.go.dev/github.com/vmware-tanzu/velero/pkg/apis/velero/v1#VolumeSnapshotLocation). |

**Additional resources**
{._additional-resources}

*   [Complete schema definitions for the type `SnapshotLocation`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#SnapshotLocation)