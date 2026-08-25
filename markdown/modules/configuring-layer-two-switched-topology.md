{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuration for a layer 2 switched topology {id="configuration-layer-two-switched-topology_{{ context }}"}

The switched (layer 2) topology networks interconnect the workloads through a cluster-wide logical switch. This configuration can be used for IPv6 and dual-stack deployments. {._abstract}


:::note

Layer 2 switched topology networks only allow for the transfer of data packets between pods within a cluster.

:::


The following JSON example configures a switched secondary network:

```json
{
  "cniVersion": "0.3.1",
  "name": "l2-network",
  "type": "ovn-k8s-cni-overlay",
  "topology":"layer2",
  "subnets": "10.100.200.0/24",
  "mtu": 1300,
  "netAttachDefName": "ns1/l2-network",
  "excludeSubnets": "10.100.200.0/29"
}
```