{%- set _mod_docs_content_type = "CONCEPT" %}
# Architectural diagram of an egress IP address configuration {id="nw-egress-ips-node-architecture_{{ context }}"}

To better understand egress IP address configuration, reference the architectural diagram. {._abstract}

The following diagram shows an egress IP address configuration. The diagram describes four pods in two different namespaces running on three nodes in a cluster. The nodes are assigned IP addresses from the `192.168.126.0/18` CIDR block on the host network.

![Architectural diagram for the egress IP feature](/_assets/images/nw-egress-ips-diagram.svg)

Both Node 1 and Node 3 are labeled with `k8s.ovn.org/egress-assignable: ""` and thus available for the assignment of egress IP addresses.

The dashed lines in the diagram depict the traffic flow from pod1, pod2, and pod3 traveling through the pod network to egress the cluster from Node 1 and Node 3. When an external service receives traffic from any of the pods selected by the example `EgressIP` object, the source IP address is either `192.168.126.10` or `192.168.126.102`. The traffic is balanced roughly equally between these two nodes.

Based on the diagram, the following manifest file defines namespaces:

```yaml title="Namespace objects"
apiVersion: v1
kind: Namespace
metadata:
  name: namespace1
  labels:
    env: prod
---
apiVersion: v1
kind: Namespace
metadata:
  name: namespace2
  labels:
    env: prod
```

Based on the diagram, the following `EgressIP` object describes a configuration that selects all pods in any namespace with the `env` label set to `prod`. The egress IP addresses for the selected pods are `192.168.126.10` and `192.168.126.102`.

```yaml title="EgressIP object"
apiVersion: k8s.ovn.org/v1
kind: EgressIP
metadata:
  name: egressips-prod
spec:
  egressIPs:
  - 192.168.126.10
  - 192.168.126.102
  namespaceSelector:
    matchLabels:
      env: prod
status:
  items:
  - node: node1
    egressIP: 192.168.126.10
  - node: node3
    egressIP: 192.168.126.102
```

For the configuration in the previous example, {{ product_title }} assigns both egress IP addresses to the available nodes. The `status` field reflects whether and where the egress IP addresses are assigned.