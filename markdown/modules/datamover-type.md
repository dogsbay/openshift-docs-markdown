{%- set _mod_docs_content_type = "REFERENCE" %}

# DataMover type {id="datamover-type_{{ context }}"}

The following are `DataMover` {{ oadp_short }} APIs: {._abstract}

**DataMover**

| Property | Type | Description |
| --- | --- | --- |
| `enable` | [bool](https://pkg.go.dev/builtin#bool) | If set to `true`, deploys the volume snapshot mover controller and a modified CSI Data Mover plugin. If set to `false`, these are not deployed. |
| `credentialName` | [string](https://pkg.go.dev/builtin#string) | User-supplied Restic `Secret` name for Data Mover. |
| `timeout` | [string](https://pkg.go.dev/builtin#string) | A user-supplied duration string for `VolumeSnapshotBackup` and `VolumeSnapshotRestore` to complete. Default is `10m` (10 minutes). A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as `300ms`, `-1.5h`, or `2h45m`. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, and `h`. |