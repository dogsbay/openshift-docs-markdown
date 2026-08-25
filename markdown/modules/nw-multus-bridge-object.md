{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuration for a bridge secondary network {id="nw-multus-bridge-object_{{ context }}"}

The Bridge CNI plugin JSON configuration object describes the configuration parameters for the Bridge CNI plugin. {._abstract}

The following table details the configuration parameters:

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
  {% if not microshift %}<td><code>cniVersion</code></td>{% endif %}
  {% if not microshift %}<td><code>string</code></td>{% endif %}
  {% if not microshift %}<td>The CNI specification version. A minimum version of <code>0.3.1</code> is required.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>name</code></td>{% endif %}
  {% if not microshift %}<td><code>string</code></td>{% endif %}
  {% if not microshift %}<td>The mandatory, unique identifier assigned to this CNI network attachment definition. It is used by the container runtime to select the correct network configuration and serves as the key for persistent resource state management, such as IP address allocations.</td>{% endif %}
</tr>
<tr>
  {% if microshift %}<td><code>cniVersion</code></td>{% endif %}
  {% if microshift %}<td><code>string</code></td>{% endif %}
  {% if microshift %}<td>The CNI specification version. The <code>0.4.0</code> value is required.</td>{% endif %}
</tr>
<tr>
  <td><code>type</code></td>
  <td><code>string</code></td>
  <td>The name of the CNI plugin to configure: <code>bridge</code>.</td>
</tr>
<tr>
  <td><code>ipam</code></td>
  <td><code>object</code></td>
  <td>The configuration object for the IPAM CNI plugin. The plugin manages IP address assignment for the attachment definition.</td>
</tr>
<tr>
  <td><code>bridge</code></td>
  <td><code>string</code></td>
  <td>Optional: Specify the name of the virtual bridge to use. If the bridge interface does not exist on the host, the bridge interface gets created. The default value is <code>cni0</code>.</td>
</tr>
<tr>
  <td><code>ipMasq</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Set to <code>true</code> to enable IP masquerading for traffic that leaves the virtual network. The source IP address for all traffic is rewritten to the bridge's IP address. If the bridge does not have an IP address, this setting has no effect. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>disableContainerInterface</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Controls the container interface (<code>veth</code> peer inside the <code>netns</code> container). When set to <code>true</code>, the container interface link-state is set to <code>down</code>, you cannot use the IPAM CNI plugin. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>isGateway</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Set to <code>true</code> to assign an IP address to the bridge. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>isDefaultGateway</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Set to <code>true</code> to configure the bridge as the default gateway for the virtual network. The assigned IP address of the bridge is used as the default route. If <code>isDefaultGateway</code> is set to <code>true</code>, <code>isGateway</code> is also set to <code>true</code> automatically. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>forceAddress</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Set to <code>true</code> to allow assignment of a previously assigned IP address to the virtual bridge. When set to <code>false</code>, if an IPv4 address or an IPv6 address from overlapping subsets is assigned to the virtual bridge, an error occurs. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>hairpinMode</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Set to <code>true</code> to allow the virtual bridge to send an Ethernet frame back through the virtual port it was received on. This mode is also known as <em>reflective relay</em>. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>promiscMode</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Set to <code>true</code> to enable promiscuous mode on the bridge. The default value is <code>false</code>.</td>
</tr>
<tr>
  {% if not microshift %}<td><code>vlan</code></td>{% endif %}
  {% if not microshift %}<td><code>integer</code></td>{% endif %}
  {% if not microshift %}<td>Optional: Specify a virtual LAN (VLAN) tag as an integer value. By default, no VLAN tag is assigned.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>preserveDefaultVlan</code></td>{% endif %}
  {% if not microshift %}<td><code>boolean</code></td>{% endif %}
  {% if not microshift %}<td>Optional: Indicates whether the default VLAN must be preserved on the <code>veth</code> end connected to the bridge. Defaults to <code>false</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>portIsolation</code></td>{% endif %}
  {% if not microshift %}<td><code>boolean</code></td>{% endif %}
  {% if not microshift %}<td>Optional: If <code>true</code>, prevents containers on the same bridge from communicating with each other. A container can still reach non-isolated ports. For example, a bridge interface that allows access to the host or an optional uplink that allows access outside the host. The default value is <code>false</code>.</td>{% endif %}
</tr>
<tr>
  {% if not microshift %}<td><code>vlanTrunk</code></td>{% endif %}
  {% if not microshift %}<td><code>list</code></td>{% endif %}
  {% if not microshift %}<td>Optional: Assign a VLAN trunk tag. The default value is <code>none</code>.</td>{% endif %}
</tr>
<tr>
  <td><code>mtu</code></td>
  <td><code>integer</code></td>
  <td>Optional: Set the maximum transmission unit (MTU) to the specified value. The default value is automatically set by the kernel.</td>
</tr>
<tr>
  <td><code>enabledad</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Enables duplicate address detection for the container side <code>veth</code>. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>macspoofchk</code></td>
  <td><code>boolean</code></td>
  <td>Optional: Enables mac spoof check, limiting the traffic originating from the container to the mac address of the interface. The default value is <code>false</code>.</td>
</tr>
</tbody>
</table>

{% if not microshift %}

:::note

The VLAN parameter configures the VLAN tag on the host end of the `veth` and also enables the `vlan_filtering` feature on the bridge interface.

:::



:::note

To configure an uplink for an L2 network, you must allow the VLAN on the uplink interface by using the following command:

```terminal
$  bridge vlan add vid VLAN_ID dev DEV
```

:::


## Bridge CNI plugin configuration example {id="nw-multus-bridge-config-example_{{ context }}"}

The following example configures a secondary network named `bridge-net`:

```json
{
  "cniVersion": "0.3.1",
  "name": "bridge-net",
  "type": "bridge",
  "isGateway": true,
  "vlan": 2,
  "ipam": {
    "type": "dhcp"
    }
}
```
{% endif %}

{% if microshift %}
## Bridge CNI plugin configuration example {id="microshift-nw-multus-bridge-config-example_{{ context }}"}

The following example configures a secondary network named `bridge-conf` for use with the {{ microshift_short }} Multus CNI:

```json
apiVersion: "k8s.cni.cncf.io/v1"
kind: NetworkAttachmentDefinition
metadata:
  name: bridge-conf
spec:
  config: '{
      "cniVersion": "0.4.0",
      "type": "bridge",
      "bridge": "test-bridge",
      "mode": "bridge",
      "ipam": {
        "type": "host-local",
        "ranges": [
          [
            {
              "subnet": "10.10.0.0/16",
              "rangeStart": "10.10.1.20",
              "rangeEnd": "10.10.3.50",
              "gateway": "10.10.0.254"
            }
          ]
        ],
        "dataDir": "/var/lib/cni/test-bridge"
      }
    }'
```
{% endif %}