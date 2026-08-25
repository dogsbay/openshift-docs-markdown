{%- set _mod_docs_content_type = "REFERENCE" %}
# SR-IOV network node configuration examples {id="nw-sr-iov-network-node-configuration-examples_{{ context }}"}

The following example describes the configuration for an InfiniBand device: {._abstract}

```yaml title="Example configuration for an InfiniBand device"
apiVersion: sriovnetwork.openshift.io/v1
kind: SriovNetworkNodePolicy
metadata:
  name: <name>
  namespace: openshift-sriov-network-operator
spec:
  resourceName: <sriov_resource_name>
  nodeSelector:
    feature.node.kubernetes.io/network-sriov.capable: "true"
  numVfs: <num>
  nicSelector:
    vendor: "<vendor_code>"
    deviceID: "<device_id>"
    rootDevices:
      - "<pci_bus_id>"
  linkType: <link_type>
  isRdma: true
# ...
```

The following example describes the configuration for an SR-IOV network device in a {{ rh_openstack }} virtual machine:

```yaml title="Example configuration for an SR-IOV device in a virtual machine"
apiVersion: sriovnetwork.openshift.io/v1
kind: SriovNetworkNodePolicy
metadata:
  name: <name>
  namespace: openshift-sriov-network-operator
spec:
  resourceName: <sriov_resource_name>
  nodeSelector:
    feature.node.kubernetes.io/network-sriov.capable: "true"
  numVfs: 1
  nicSelector:
    vendor: "<vendor_code>"
    deviceID: "<device_id>"
    netFilter: "openstack/NetworkID:ea24bd04-8674-4f69-b0ee-fa0b3bd20509"
# ...
```

*   When configuring the node network policy for a virtual machine, the `numVfs` parameter is always set to `1`.
*   When the virtual machine is deployed on {{ rh_openstack }}, the `netFilter` parameter must refer to a network ID. Valid values for `netFilter` are available from an `SriovNetworkNodeState` object.