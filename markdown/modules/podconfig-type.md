{%- set _mod_docs_content_type = "REFERENCE" %}

# PodConfig type {id="podconfig-type_{{ context }}"}

The following are `PodConfig` {{ oadp_short }} APIs: {._abstract}

**PodConfig**

| Property | Type | Description |
| --- | --- | --- |
| `nodeSelector` | map [ [string](https://pkg.go.dev/builtin#string) ] [string](https://pkg.go.dev/builtin#string) | Defines the `nodeSelector` to be supplied to a `Velero` `podSpec` or a `Restic` `podSpec`. |
| `tolerations` | [][Toleration](https://pkg.go.dev/k8s.io/api/core/v1#Toleration) | Defines the list of tolerations to be applied to a Velero deployment or a Restic `daemonset`. |
| `resourceAllocations` | [ResourceRequirements](https://pkg.go.dev/k8s.io/api/core/v1#ResourceRequirements) | Set specific resource `limits` and `requests` for a `Velero` pod or a `Restic` pod as described in the Setting Velero CPU and memory resource allocations section. |
| `labels` | map [ [string](https://pkg.go.dev/builtin#string) ] [string](https://pkg.go.dev/builtin#string) | Labels to add to pods. |