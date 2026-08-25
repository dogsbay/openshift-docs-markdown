{%- set _mod_docs_content_type = "REFERENCE" %}
# Dynamic IP address assignment configuration with Whereabouts {id="nw-multus-whereabouts_{{ context }}"}

The Whereabouts CNI plugin helps the dynamic assignment of an IP address to a secondary network without the use of a DHCP server. {._abstract}

The Whereabouts CNI plugin also supports overlapping IP address ranges and configuration of the same CIDR range multiple times within separate `NetworkAttachmentDefinition` CRDs. This provides greater flexibility and management capabilities in multitenant environments.

## Dynamic IP address configuration parameters {id="dynamic-ip-address-assignment-objects_{{ context }}"}

The following table describes the configuration objects for dynamic IP address assignment with Whereabouts:

**`ipam` whereabouts configuration parameters**

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | The IPAM address type. The value `whereabouts` is required. |
| `range` | `string` | An IP address and range in CIDR notation. IP addresses are assigned from within this range of addresses. |
| `exclude` | `array` | Optional: A list of zero or more IP addresses and ranges in CIDR notation. IP addresses within an excluded address range are not assigned. |
| `network_name` | `string` | Optional: Helps ensure that each group or domain of pods gets its own set of IP addresses, even if they share the same range of IP addresses. Setting this field is important for keeping networks separate and organized, notably in multitenant environments. |

## Dynamic IP address assignment configuration with Whereabouts that excludes IP address ranges {id="dynamic-ip-address-assignment-whereabouts_{{ context }}"}

The following example shows a dynamic address assignment configuration in a NAD file that uses Whereabouts:

```json title="Whereabouts dynamic IP address assignment that excludes specific IP address ranges"
{
  "ipam": {
    "type": "whereabouts",
    "range": "192.0.2.192/27",
    "exclude": [
       "192.0.2.192/30",
       "192.0.2.196/32"
    ]
  }
}
```

## Dynamic IP address assignment that uses Whereabouts with overlapping IP address ranges {id="dynamic-ip-address-assignment-whereabouts-overlapping-ip-ranges_{{ context }}"}

The following example shows a dynamic IP address assignment that uses overlapping IP address ranges for multitenant networks. 

```json title="NetworkAttachmentDefinition 1"
{
  "ipam": {
    "type": "whereabouts",
    "range": "192.0.2.192/29",
    "network_name": "example_net_common",
  }
}
```

where:


`network_name`
:   Optional parameter. If set, must match the `network_name` of `NetworkAttachmentDefinition 2`.

```json title="NetworkAttachmentDefinition 2"
{
  "ipam": {
    "type": "whereabouts",
    "range": "192.0.2.192/24",
    "network_name": "example_net_common",
  }
}
```

where:


`network_name`
:   Optional parameter. If set, must match the `network_name` of `NetworkAttachmentDefinition 1`.