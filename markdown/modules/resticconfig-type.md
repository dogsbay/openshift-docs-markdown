{%- set _mod_docs_content_type = "REFERENCE" %}

# ResticConfig type {id="resticconfig-type_{{ context }}"}

The following are `ResticConfig` {{ oadp_short }} APIs: {._abstract}

**ResticConfig**

| Property | Type | Description |
| --- | --- | --- |
| `enable` | *[bool](https://pkg.go.dev/builtin#bool) | If set to `true`, enables backup and restore using Restic. If set to `false`, snapshots are needed. |
| `supplementalGroups` | [][int64](https://pkg.go.dev/builtin#int64) | Defines the Linux groups to be applied to the `Restic` pod. |
| `timeout` | [string](https://pkg.go.dev/builtin#string) | A user-supplied duration string that defines the Restic timeout. Default value is `1hr` (1 hour). A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as `300ms`, `-1.5h`, or `2h45m`. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, and `h`. |
| `podConfig` | *[`PodConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#PodConfig) | Defines the configuration of the `Restic` pod. |

**Additional resources**
{._additional-resources}

*   [Complete schema definitions for the type `ResticConfig`](https://pkg.go.dev/github.com/openshift/oadp-operator/api/v1alpha1#ResticConfig)