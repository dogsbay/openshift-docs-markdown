{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuration for a host device secondary network {id="nw-multus-host-device-object_{{ context }}"}

The host device CNI plugin JSON configuration object describes the configuration parameters for the host-device CNI plugin. {._abstract}


:::note

Specify your network device by setting only one of the following parameters: `device`,`hwaddr`, `kernelpath`, or `pciBusID`.

:::


The following table details the configuration parameters:

| Field | Type | Description |
| --- | --- | --- |
| `cniVersion` | `string` | The CNI specification version. A minimum version of `0.3.1` is required. |
| `name` | `string` | The mandatory, unique identifier assigned to this CNI network attachment definition. It is used by the container runtime to select the correct network configuration and serves as the key for persistent resource state management, such as IP address allocations. |
| `type` | `string` | The name of the CNI plugin to configure: `host-device`. |
| `device` | `string` | Optional: The name of the device, such as `eth0`. |
| `hwaddr` | `string` | Optional: The device hardware MAC address. |
| `kernelpath` | `string` | Optional: The Linux kernel device path, such as `/sys/devices/pci0000:00/0000:00:1f.6`. |
| `pciBusID` | `string` | Optional: The PCI address of the network device, such as `0000:00:1f.6`. |

## host-device configuration example {id="nw-multus-hostdev-config-example_{{ context }}"}

The following example configures a secondary network named `hostdev-net`:

```json
{
  "cniVersion": "0.3.1",
  "name": "hostdev-net",
  "type": "host-device",
  "device": "eth1"
}
```