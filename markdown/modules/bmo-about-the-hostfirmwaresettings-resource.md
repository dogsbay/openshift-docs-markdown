{%- set _mod_docs_content_type = "REFERENCE" %}
# About the `HostFirmwareSettings` resource {id="bmo-about-the-hostfirmwaresettings-resource_{{ context }}"}

You can use the `HostFirmwareSettings` resource to retrieve and manage BIOS settings for a host, providing vendor-specific configuration beyond the basic firmware fields in the `BareMetalHost` resource. {._abstract}

When a host moves to the `Available` state, Ironic reads the host’s BIOS settings and creates the `HostFirmwareSettings` resource. The resource contains the complete BIOS configuration returned from the baseboard management controller (BMC). Whereas, the `firmware` field in the `BareMetalHost` resource returns three vendor-independent fields, the `HostFirmwareSettings` resource typically comprises many BIOS settings of vendor-specific fields per host.

The `HostFirmwareSettings` resource contains two sections:

1.  The `HostFirmwareSettings` spec.
1.  The `HostFirmwareSettings` status.


:::note

Reading and modifying firmware settings is only supported for drivers based on the vendor-independent Redfish protocol, Fujitsu iRMC or HP iLO.

:::


## The `HostFirmwareSettings` spec {id="_the_hostfirmwaresettings_spec"}

The `spec` section of the `HostFirmwareSettings` resource defines the desired state of the host’s BIOS, and it is empty by default. Ironic uses the settings in the `spec.settings` section to update the baseboard management controller (BMC) when the host is in the `Preparing` state. Use the `FirmwareSchema` resource to ensure that you do not send invalid name/value pairs to hosts. See "About the `FirmwareSchema` resource" for additional details.

```terminal title="Example"
spec:
  settings:
    ProcTurboMode: Disabled
```
where:

`spec.settings.ProcTurboMode: Disabled`
:   Specifies a name/value pair that sets the `ProcTurboMode` BIOS setting to `Disabled`.


:::note

Integer parameters listed in the `status` section appear as strings. For example, `"1"`. When setting integers in the `spec.settings` section, the values should be set as integers without quotes. For example, `1`.

:::


## The `HostFirmwareSettings` status {id="_the_hostfirmwaresettings_status"}

The `status` represents the current state of the host’s BIOS.

**HostFirmwareSettings**

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><pre>status:&#10;  conditions:&#10;  - lastTransitionTime:&#10;    message:&#10;    observedGeneration:&#10;    reason:&#10;    status:&#10;    type:</pre></td>
  <td>The <code>conditions</code> field contains a list of state changes. The sub-fields include:<br><br><ul><li><code>lastTransitionTime</code>: The last time the state changed.</li><li><code>message</code>: A description of the state change.</li><li><code>observedGeneration</code>: The current generation of the <code>status</code>. If <code>metadata.generation</code> and this field are not the same, the <code>status.conditions</code> might be out of date.</li><li><code>reason</code>: The reason for the state change.</li><li><code>status</code>: The status of the state change. The status can be <code>True</code>, <code>False</code> or <code>Unknown</code>.</li><li><code>type</code>: The type of state change. The types are <code>Valid</code> and <code>ChangeDetected</code>.</li></ul></td>
</tr>
<tr>
  <td><pre>status:&#10;  schema:&#10;    name:&#10;    namespace:&#10;    lastUpdated:</pre></td>
  <td>The <code>FirmwareSchema</code> for the firmware settings. The fields include:<br><br><ul><li><code>name</code>: The name or unique identifier referencing the schema.</li><li><code>namespace</code>: The namespace where the schema is stored.</li><li><code>lastUpdated</code>: The last time the resource was updated.</li></ul></td>
</tr>
<tr>
  <td><pre>status:&#10;  settings:</pre></td>
  <td>The <code>settings</code> field contains a list of name/value pairs of a host's current BIOS settings.</td>
</tr>
</tbody>
</table>