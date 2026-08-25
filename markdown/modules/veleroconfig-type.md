{%- set _mod_docs_content_type = "REFERENCE" %}

# VeleroConfig type {id="veleroconfig-type_{{ context }}"}

The following are `VeleroConfig` {{ oadp_short }} APIs: {._abstract}

**VeleroConfig**

| Property | Type | Description |
| --- | --- | --- |
| `featureFlags` | [] [string](https://pkg.go.dev/builtin#string) | Defines the list of features to enable for the Velero instance. |
| `defaultPlugins` | [] [string](https://pkg.go.dev/builtin#string) | The following types of default Velero plugins can be installed: `aws`,`azure`, `csi`, `gcp`, `kubevirt`, and `openshift`. |
| `customPlugins` | [][CustomPlugin](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#CustomPlugin) | Used for installation of custom Velero plugins. |
| `restoreResourcesVersionPriority` | [string](https://pkg.go.dev/builtin#string) | Represents a config map that is created if defined for use in conjunction with the `EnableAPIGroupVersions` feature flag. Defining this field automatically adds `EnableAPIGroupVersions` to the Velero server feature flag. |
| `noDefaultBackupLocation` | [bool](https://pkg.go.dev/builtin#bool) | To install Velero without a default backup storage location, you must set the `noDefaultBackupLocation` flag in order to confirm installation. |
| `podConfig` | *[`PodConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#PodConfig) | Defines the configuration of the `Velero` pod. |
| `logLevel` | [string](https://pkg.go.dev/builtin#string) | Velero server’s log level (use `debug` for the most granular logging, leave unset for Velero default). Valid options are `trace`, `debug`, `info`, `warning`, `error`, `fatal`, and `panic`. |

**Additional resources**
{._additional-resources}

*   [Complete schema definitions for the type `VeleroConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#VeleroConfig)