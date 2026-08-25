{%- set _mod_docs_content_type = "CONCEPT" %}
# Basic LVMS configuration example {id="microshift-lvms-config-example-basic_{{ context }}"}

To customize storage operations, pass through your LVM configuration to {{ microshift_short }}. With this flexibility, you can define custom volume groups, thin volume provisioning parameters, and reserved unallocated space by editing the LVMS configuration file. {._abstract}

You must restart {{ microshift_short }} to deploy configuration changes after editing the file.


:::note

If you need to take volume snapshots, you must use thin provisioning in your `lvmd.conf` file. If you do not need to take volume snapshots, you can use thick volumes.

:::


The following `lvmd.yaml` example file shows a basic LVMS configuration:

```yaml title="LVMS configuration example"
socket-name:
device-classes:
  - name: "default"
    volume-group: "VGNAMEHERE"
    spare-gb: 0 (5)
    default: (6)
```

where:


`socket-name`
:   Specifies the UNIX domain socket endpoint of gRPC. Defaults to `/run/lvmd/lvmd.socket`. Takes a string value.

`device-classes`
:   Specifies a list of maps for the settings for each `device-class`.

`device-classes.name`
:   Specifies the name of the `device-class`. Takes a string value.

`device-classes.volume-group`
:   Specifies the group where the `device-class` creates the logical volumes. Takes a string value.

`device-classes.spare-gb`
:   Specifies the storage capacity in GB to be left unallocated in the volume group. Defaults to `0`. Takes an unsigned 64-bit integer.

`device-classes.default`
:   Specifies that the `device-class` is used by default. Defaults to `false`. At least one value must be entered in the YAML file when this value is set to `true`. Takes a boolean value.


:::important

A race condition prevents LVMS from accurately tracking the allocated space and preserving the `spare-gb` for a device class when multiple PVCs are created simultaneously. Use separate volume groups and device classes to protect the storage of highly dynamic workloads from each other.

:::