{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuration of IP address assignment for a network attachment {id="nw-multus-ipam-object_{{ context }}"}

For secondary networks, you can assign IP addresses by using an IP Address Management (IPAM) CNI plugin, which supports various assignment methods, including Dynamic Host Configuration Protocol (DHCP) and static assignment. {._abstract}

The DHCP IPAM CNI plugin responsible for dynamic assignment of IP addresses operates with two distinct components:

*   CNI Plugin: Responsible for integrating with the Kubernetes networking stack to request and release IP addresses.
*   DHCP IPAM CNI Daemon: A listener for DHCP events that coordinates with existing DHCP servers in the environment to handle IP address assignment requests. This daemon is not a DHCP server itself.

For networks requiring `type: dhcp` in their IPAM configuration, ensure the DHCP server meets the following conditions:

*   A DHCP server is available and running in the environment.
*   The DHCP server is external to the cluster and you expect the server to form part of the existing network infrastructure for the customer.
*   The DHCP server is appropriately configured to serve IP addresses to the nodes.

In cases where a DHCP server is unavailable in the environment, consider using the Whereabouts IPAM CNI plugin. The Whereabouts CNI provides similar IP address management capabilities without the need for an external DHCP server.


:::note

Use the Whereabouts CNI plugin when no external DHCP server exists or where static IP address management is preferred. The Whereabouts plugin includes a reconciler daemon to manage stale IP address allocations.

:::


Ensure the periodic renewal of a DHCP lease throughout the lifetime of a container by including a separate daemon, the DHCP IPAM CNI Daemon. To deploy the DHCP IPAM CNI daemon, change the Cluster Network Operator (CNO) configuration to trigger the deployment of this daemon as part of the secondary network setup.

## Static IP address assignment configuration {id="nw-multus-static_{{ context }}"}

The following table describes the configuration for static IP address assignment:

**`ipam` static configuration object**

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | The IPAM address type. The value `static` is required. |
| `addresses` | `array` | An array of objects specifying IP addresses to assign to the virtual interface. Both IPv4 and IPv6 IP addresses are supported. |
| `routes` | `array` | An array of objects specifying routes to configure inside the pod. |
| `dns` | `array` | Optional: An array of objects specifying the DNS configuration. |

The `addresses` array requires objects with the following fields:

**`ipam.addresses[]` array**

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | An IP address and network prefix that you specify. For example, if you specify `10.10.21.10/24`, the secondary network gets assigned an IP address of `10.10.21.10` and the subnet mask of `255.255.255.0`. |
| `gateway` | `string` | The default gateway to route egress network traffic to. |

**`ipam.routes[]` array**

| Field | Type | Description |
| --- | --- | --- |
| `dst` | `string` | The IP address range in CIDR format, such as `192.168.17.0/24` or `0.0.0.0/0` for the default route. |
| `gw` | `string` | The gateway that routes network traffic. |

**`ipam.dns` object**

| Field | Type | Description |
| --- | --- | --- |
| `nameservers` | `array` | An array of one or more IP addresses where DNS queries get sent. |
| `domain` | `array` | The default domain to append to a hostname. For example, if the domain is set to `example.com`, a DNS lookup query for `example-host` is rewritten as `example-host.example.com`. |
| `search` | `array` | An array of domain names to append to an unqualified hostname, such as `example-host`, during a DNS lookup query. |

```json title="Static IP address assignment configuration example"
{
  "ipam": {
    "type": "static",
      "addresses": [
        {
          "address": "191.168.1.7/24"
        }
      ]
  }
}
```

## Dynamic IP address (DHCP) assignment configuration {id="nw-multus-dhcp_{{ context }}"}

A pod obtains its original DHCP lease when the pod gets created. The lease must be periodically renewed by a minimal DHCP server deployment running on the cluster.


:::important

For an Ethernet network attachment, the SR-IOV Network Operator does not create a DHCP server deployment; the Cluster Network Operator is responsible for creating the minimal DHCP server deployment.

:::


To trigger the deployment of the DHCP server, you must create a shim network attachment by editing the Cluster Network Operator configuration, as in the following example:

```yaml title="Example shim network attachment definition"
apiVersion: operator.openshift.io/v1
kind: Network
metadata:
  name: cluster
spec:
  additionalNetworks:
  - name: dhcp-shim
    namespace: default
    type: Raw
    rawCNIConfig: |-
      {
        "name": "dhcp-shim",
        "cniVersion": "0.3.1",
        "type": "bridge",
        "ipam": {
          "type": "dhcp"
        }
      }
  # ...
```

where:


`type`
:   Specifies dynamic IP address assignment for the cluster.