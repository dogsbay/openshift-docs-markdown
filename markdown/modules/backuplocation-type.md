{%- set _mod_docs_content_type = "REFERENCE" %}

# BackupLocation type {id="backuplocation-type_{{ context }}"}

The following are `BackupLocation` {{ oadp_short }} APIs: {._abstract}

**BackupLocation**

| Property | Type | Description |
| --- | --- | --- |
| `velero` | *[velero.BackupStorageLocationSpec](https://pkg.go.dev/github.com/vmware-tanzu/velero/pkg/apis/velero/v1#BackupStorageLocationSpec) | Location to store volume snapshots, as described in [Backup Storage Location](https://pkg.go.dev/github.com/vmware-tanzu/velero/pkg/apis/velero/v1#BackupStorageLocation). |
| `bucket` | *[CloudStorageLocation](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#CloudStorageLocation) | Automates creation of a bucket at some cloud storage providers for use as a backup storage location. |

{%- set FeatureName = "The `bucket` parameter" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Complete schema definitions for the type `BackupLocation`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#BackupLocation)