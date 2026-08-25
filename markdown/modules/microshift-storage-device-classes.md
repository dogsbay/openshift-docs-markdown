{%- set _mod_docs_content_type = "CONCEPT" %}
# Device classes {id="microshift-storage-device-classes_{{ context }}"}

To define custom storage groups, create custom device classes by adding a `device-classes` array to your logical volume manager storage (LVMS) configuration. With this configuration, you can enable {{ microshift_short }} to categorize devices based on your specific storage requirements. {._abstract}

Add the array to the `/etc/microshift/lvmd.yaml` configuration file. A single device class must be set as the default. You must restart {{ microshift_short }} for configuration changes to take effect.


:::warning

Removing a device class while there are still persistent volumes or `VolumeSnapshotContent` objects connected to that device class breaks both thick and thin provisioning.

:::


You can define multiple device classes in the `device-classes` array. These classes can be a mix of thick and thin volume configurations.

```terminal title="Example of a mixed device-class array"
socket-name: /run/topolvm/lvmd.sock
device-classes:
  - name: ssd
    volume-group: ssd-vg
    spare-gb: 0
    default: true
  - name: hdd
    volume-group: hdd-vg
    spare-gb: 0
  - name: thin
    spare-gb: 0
    thin-pool:
      name: thin
      overprovision-ratio: 10
    type: thin
    volume-group: ssd
  - name: striped
    volume-group: multi-pv-vg
    spare-gb: 0
    stripe: 2
    stripe-size: "64"
    lvcreate-options:
```
*   device-classes.spare-gb`: Specifies the spare capacity. When you set this value to anything other than `0`, more space can be allocated than expected.
*   `device-classes.lvcreate-options`: Specifies extra arguments to pass to the `lvcreate` command, such as `--type=<type>`. Neither {{ microshift_short }} nor the LVMS verifies `lvcreate-options` values. These optional values are passed as is to the `lvcreate` command. Ensure that the options specified here are correct.