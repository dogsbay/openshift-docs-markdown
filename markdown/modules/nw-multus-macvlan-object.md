{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuration for a MACVLAN secondary network {id="nw-multus-macvlan-object_{{ context }}"}

The MACVLAN CNI plugin JSON configuration object describes the configuration parameters for the MAC Virtual LAN (MACVLAN) Container Network Interface (CNI) plugin. The following table describes these parameters: {._abstract}

| Field | Type | Description |
| --- | --- | --- |
| `cniVersion` | `string` | The CNI specification version. A minimum version of `0.3.1` is required. |
| `name` | `string` | The mandatory, unique identifier assigned to this CNI network attachment definition. It is used by the container runtime to select the correct network configuration and serves as the key for persistent resource state management, such as IP address allocations. |
| `type` | `string` | The name of the CNI plugin to configure: `macvlan`. |
| `ipam` | `object` | The configuration object for the IPAM CNI plugin. The plugin manages IP address assignment for the attachment definition. |
| `mode` | `string` | Optional: Configures traffic visibility on the virtual network. Must be either `bridge`, `passthru`, `private`, or `vepa`. If a value is not provided, the default value is `bridge`. |
| `master` | `string` | Optional: The host network interface to associate with the newly created macvlan interface. If a value is not specified, then the default route interface is used. |
| `mtu` | `integer` | Optional: The maximum transmission unit (MTU) to the specified value. The default value is automatically set by the kernel. |
| `linkInContainer` | `boolean` | Optional: Specifies whether the `master` interface is in the container network namespace or the main network namespace. Set the value to `true` to request the use of a container namespace `master` interface. |


:::note

If you specify the `master` key for the plugin configuration, use a different physical network interface than the one that is associated with your primary network plugin to avoid possible conflicts.

:::


## MACVLAN CNI plugin configuration example {id="nw-multus-macvlan-config-example_{{ context }}"}

The following example configures a secondary network named `macvlan-net`:

```json
{
  "cniVersion": "0.3.1",
  "name": "macvlan-net",
  "type": "macvlan",
  "master": "eth1",
  "linkInContainer": false,
  "mode": "bridge",
  "ipam": {
    "type": "dhcp"
    }
}
```