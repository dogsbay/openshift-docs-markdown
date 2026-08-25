{%- set _mod_docs_content_type = "REFERENCE" %}

# DataProtectionApplicationSpec type {id="dataprotectionapplicationspec-type_{{ context }}"}

The following are `DataProtectionApplicationSpec` {{ oadp_short }} APIs: {._abstract}

**DataProtectionApplicationSpec**

| Property | Type | Description |
| --- | --- | --- |
| `backupLocations` | [] [`BackupLocation`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#BackupLocation) | Defines the list of configurations to use for `BackupStorageLocations`. |
| `snapshotLocations` | [] [`SnapshotLocation`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#SnapshotLocation) | Defines the list of configurations to use for `VolumeSnapshotLocations`. |
| `unsupportedOverrides` | map [ [UnsupportedImageKey](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#UnsupportedImageKey) ]  [string](https://pkg.go.dev/builtin#string) | Can be used to override the deployed dependent images for development. Options are `veleroImageFqin`, `awsPluginImageFqin`, `hypershiftPluginImageFqin`, `openshiftPluginImageFqin`, `azurePluginImageFqin`, `gcpPluginImageFqin`, `csiPluginImageFqin`, `dataMoverImageFqin`, `resticRestoreImageFqin`, `kubevirtPluginImageFqin`, and `operator-type`. |
| `podAnnotations` | map [ [string](https://pkg.go.dev/builtin#string) ] [string](https://pkg.go.dev/builtin#string) | Used to add annotations to pods deployed by Operators. |
| `podDnsPolicy` | [`DNSPolicy`](https://pkg.go.dev/k8s.io/api/core/v1#DNSPolicy) | Defines the configuration of the DNS of a pod. |
| `podDnsConfig` | [`PodDNSConfig`](https://pkg.go.dev/k8s.io/api/core/v1#PodDNSConfig) | Defines the DNS parameters of a pod in addition to those generated from `DNSPolicy`. |
| `backupImages` | *[bool](https://pkg.go.dev/builtin#bool) | Used to specify whether or not you want to deploy a registry for enabling backup and restore of images. |
| `configuration` | *[`ApplicationConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#ApplicationConfig) | Used to define the data protection application’s server configuration. |
| `features` | *[`Features`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#Features) | Defines the configuration for the DPA to enable the Technology Preview features. |

**Additional resources**
{._additional-resources}

*   [Complete schema definitions for the OADP API](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#DataProtectionApplicationSpec)