{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuration for a TAP secondary network {id="nw-multus-tap-object_{{ context }}"}

The TAP CNI plugin JSON configuration object describes the configuration parameters for the TAP CNI plugin.  {._abstract}

The following table describes these  configuration parameters:

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>cniVersion</code></td>
  <td><code>string</code></td>
  <td>The CNI specification version. A minimum version of <code>0.3.1</code> is required.</td>
</tr>
<tr>
  <td><code>name</code></td>
  <td><code>string</code></td>
  <td>The mandatory, unique identifier assigned to this CNI network attachment definition. It is used by the container runtime to select the correct network configuration and serves as the key for persistent resource state management, such as IP address allocations.</td>
</tr>
<tr>
  <td><code>type</code></td>
  <td><code>string</code></td>
  <td>The name of the CNI plugin to configure: <code>tap</code>.</td>
</tr>
<tr>
  <td><code>mac</code></td>
  <td><code>string</code></td>
  <td>Optional: Request the specified MAC address for the interface.</td>
</tr>
<tr>
  <td><code>mtu</code></td>
  <td><code>integer</code></td>
  <td>Optional: Set the maximum transmission unit (MTU) to the specified value. The default value is automatically set by the kernel.</td>
</tr>
<tr>
  <td><code>selinuxcontext</code></td>
  <td><code>string</code></td>
  <td>Optional: The SELinux context to associate with the tap device.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>The value <code>system_u:system_r:container_t:s0</code> is required for {{ product_title }}.</dd></dl></td>
</tr>
<tr>
  <td><code>multiQueue</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Set to <code>true</code> to enable multi-queue.</td>
</tr>
<tr>
  <td><code>owner</code></td>
  <td><code>integer</code></td>
  <td>Optional: The user owning the tap device.</td>
</tr>
<tr>
  <td><code>group</code></td>
  <td><code>integer</code></td>
  <td>Optional: The group owning the tap device.</td>
</tr>
<tr>
  <td><code>bridge</code></td>
  <td><code>string</code></td>
  <td>Optional: Set the tap device as a port of an already existing bridge.</td>
</tr>
</tbody>
</table>

## Tap configuration example {id="nw-multus-tap-config-example_{{ context }}"}

The following example configures a secondary network named `mynet`:

```json
{
 "name": "mynet",
 "cniVersion": "0.3.1",
 "type": "tap",
 "mac": "00:11:22:33:44:55",
 "mtu": 1500,
 "selinuxcontext": "system_u:system_r:container_t:s0",
 "multiQueue": true,
 "owner": 0,
 "group": 0
 "bridge": "br1"
}
```