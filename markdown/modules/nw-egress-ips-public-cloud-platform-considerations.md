{%- set _mod_docs_content_type = "CONCEPT" %}
# Public cloud platform considerations {id="nw-egress-ips-public-cloud-platform-considerations_{{ context }}"}

Typically, public cloud providers place a limit on egress IP addresses. You must understand the existence of a constraint on the absolute number of assignable IP addresses per node for clusters provisioned on public cloud infrastructure.  {._abstract}

The maximum number of assignable IP addresses per node, or the _IP capacity_, can be described in the following formula:

```text
IP capacity = public cloud default capacity - sum(current IP assignments)
```

While the Egress IP addresses capability manages the IP address capacity per node, ensure you plan for this constraint in your deployments. For example, if a public cloud provider limits IP address capacity to 10 IP addresses per node, and you have 8 nodes, the total number of assignable IP addresses is only 80. To achieve a higher IP address capacity, you would need to allocate additional nodes. For example, if you needed 150 assignable IP addresses, you would need to allocate 7 additional nodes.

To confirm the IP capacity and subnets for any node in your public cloud environment, you can enter the `oc get node <node_name> -o yaml` command. The `cloud.network.openshift.io/egress-ipconfig` annotation includes capacity and subnet information for the node.

The annotation value is an array with a single object with fields that provide the following information for the primary network interface:

*   `interface`: Specifies the interface ID on {{ aws_short }} and {{ azure_short }} and the interface name on {{ gcp_short }}.
*   `ifaddr`: Specifies the subnet mask for one or both IP address families.
*   `capacity`: Specifies the IP address capacity for the node. On {{ aws_short }}, the IP address capacity is provided per IP address family. On {{ azure_short }} and {{ gcp_short }}, the IP address capacity includes both IPv4 and IPv6 addresses.

Automatic attachment and detachment of egress IP addresses for traffic between nodes are available. Traffic from many pods in namespaces can have a consistent source IP address to locations outside of the cluster.


:::note

When an {{ rh_openstack }} cluster administrator assigns a floating IP to the reservation port, {{ product_title }} cannot delete the reservation port. The `CloudPrivateIPConfig` object cannot perform delete and move operations until an {{ rh_openstack }} cluster administrator unassigns the floating IP from the reservation port.

:::


The following examples illustrate the annotation from nodes on several public cloud providers. The annotations are indented for readability.

```yaml title="Example cloud.network.openshift.io/egress-ipconfig annotation on AWS"
cloud.network.openshift.io/egress-ipconfig: [
  {
    "interface":"eni-078d267045138e436",
    "ifaddr":{"ipv4":"10.0.128.0/18"},
    "capacity":{"ipv4":14,"ipv6":15}
  }
]
```

```yaml title="Example cloud.network.openshift.io/egress-ipconfig annotation on {{ gcp_short }}"
cloud.network.openshift.io/egress-ipconfig: [
  {
    "interface":"nic0",
    "ifaddr":{"ipv4":"10.0.128.0/18"},
    "capacity":{"ip":14}
  }
]
```