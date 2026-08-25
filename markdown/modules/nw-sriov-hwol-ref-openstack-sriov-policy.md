{%- set _mod_docs_content_type = "REFERENCE" %}
# An example SR-IOV network node policy for OpenStack {id="nw-sriov-hwol-ref-openstack-sriov-policy_{{ context }}"}

The following example describes an SR-IOV interface for a network interface controller (NIC) with hardware offloading on {{ rh_openstack_first }}. {._abstract}

The following example shows an SR-IOV interface for a NIC with hardware offloading on {{ rh_openstack }}:

```yaml
apiVersion: sriovnetwork.openshift.io/v1
kind: SriovNetworkNodePolicy
metadata:
  name: ${name}
  namespace: openshift-sriov-network-operator
spec:
  deviceType: switchdev
  isRdma: true
  nicSelector:
    netFilter: openstack/NetworkID:${net_id}
  nodeSelector:
    feature.node.kubernetes.io/network-sriov.capable: 'true'
  numVfs: 1
  priority: 99
  resourceName: ${name}
```