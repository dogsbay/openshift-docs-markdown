{%- set _mod_docs_content_type = "REFERENCE" %}
# About the `HostFirmwareComponents` resource {id="bmo-about-the-hostfirmwarecomponents-resource_{{ context }}"}

You can use the `HostFirmwareComponents` resource to view and update Basic Input/Output System (BIOS), baseboard management controller (BMC), and network interface controller (NIC) firmware versions for bare-metal hosts. {._abstract}

To update NIC host firmware components, the server must support Redfish and must permit you to use Redfish to update NIC firmware. You can use Metal^3^ to update NIC host firmware components for the Intel Ethernet 800 Series (`ice` driver) and the NVIDIA Mellanox ConnectX-6 (CX6) and ConnectX-7 (CX7) (`mlx_5` driver). The updates are validated on Dell hardware. The following list outlines important considerations before you update the NICs:

*   If you have more than one network adapter with the same type of NIC, for example, Intel Ethernet 800 Series, when you update one NIC the update might be applied to multiple NICs. Redfish identifies all components that can benefit from the update and then applies the image to all these components.
*   You cannot necessarily update a listed network adapter. A machine might use Redfish to display their NIC and firmware information, but prevent you from updating the adapter through Redfish. For more information about checking if you can update a network adapter, see "Identifying the NICs `HostFirmwareComponents` resources you can update".

The `HostFirmwareComponents` resource contains two sections:

1.  The `HostFirmwareComponents` spec
1.  The `HostFirmwareComponents` status

## `HostFirmwareComponents` spec {id="_hostfirmwarecomponents_spec"}

The `spec` section of the `HostFirmwareComponents` resource defines the desired state of the BIOS and BMC versions of the host, and the NIC firmware components of the host if the information is available by using Redfish.

**HostFirmwareComponents spec**

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><pre>updates:&#10;  component:&#10;  url:</pre></td>
  <td>The <code>updates</code> configuration setting contains the components to update. The fields are:<br><br><ul><li><code>component</code>: The name of the component. The valid settings are <code>bios</code>, <code>bmc</code>, or <code>nic:&lt;ID&gt;</code>.</li><li><code>url</code>: The URL to the component's firmware specification and version.</li></ul></td>
</tr>
</tbody>
</table>

## `HostFirmwareComponents` status {id="_hostfirmwarecomponents_status"}

The `status` section of the `HostFirmwareComponents` resource returns the current status of the BIOS and BMC versions of the host, and the NIC firmware components of the host if the information is available by using Redfish.

**HostFirmwareComponents status**

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><pre>components:&#10;  component:&#10;  initialVersion:&#10;  currentVersion:&#10;  lastVersionFlashed:&#10;  updatedAt:</pre></td>
  <td>The <code>components</code> section contains the status of the components. The fields are:<br><br><ul><li><code>component</code>: The name of the firmware component. It returns <code>bios</code>, <code>bmc</code>, <code>nic:&lt;ID1&gt;</code>, or <code>nic:&lt;ID2&gt;</code>.</li><li><code>initialVersion</code>: The initial firmware version of the component. Ironic retrieves this information when creating the <code>BareMetalHost</code> resource. You cannot change it.</li><li><code>currentVersion</code>: The current firmware version of the component. Initially, the value matches the <code>initialVersion</code> value until Ironic updates the firmware on the bare-metal host.</li><li><code>lastVersionFlashed</code>: The last firmware version of the component flashed on the bare-metal host. This field returns <code>null</code> until Ironic updates the firmware.</li><li><code>updatedAt</code>: The timestamp when Ironic updated the bare-metal host's firmware.</li></ul></td>
</tr>
<tr>
  <td><pre>updates:&#10;  component:&#10;  url:</pre></td>
  <td>The <code>updates</code> configuration setting contains the updated components. The fields are:<br><br><ul><li><code>component</code>: The name of the component.</li><li><code>url</code>: The URL to the component's firmware specification and version.</li></ul></td>
</tr>
</tbody>
</table>