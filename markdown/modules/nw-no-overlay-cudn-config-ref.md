{%- set _mod_docs_content_type = "REFERENCE" %}
# Reference for underlay routing settings on a ClusterUserDefinedNetwork custom resource (CR) {id="nw-no-overlay-cudn-config-ref_{{ context }}"}

Review the full `spec` paths on a `ClusterUserDefinedNetwork` custom resource (CR) when you use no-overlay transport on a primary layer 3 cluster user-defined network. {._abstract}

```yaml title="Example ClusterUserDefinedNetwork CR for no-overlay mode (unmanaged routing)"
apiVersion: k8s.ovn.org/v1
kind: ClusterUserDefinedNetwork
metadata:
  name: high-perf-network
  labels:
    network: high-perf-network
spec:
  namespaceSelector:
    matchLabels:
      app: performance-sensitive
  network:
    topology: Layer3
    layer3:
      role: Primary
      subnets:
      - cidr: 10.200.0.0/16
        hostSubnet: 24
    transport: "NoOverlay"
    noOverlayOptions:
      outboundSNAT: "Disabled"
      routing: "Unmanaged"
```
where:


`spec.namespaceSelector`
:   Specifies label selectors for namespaces that can attach workloads to the primary network.


`spec.network.topology`
:   Specifies the network topology. Must be `Layer3`.


`spec.network.layer3.role`
:   Specifies the role of the network. For a primary CUDN, set to `Primary`.


`spec.network.layer3.subnets`
:   Specifies a list of objects with `cidr` and `hostSubnet` fields that define the pod address space and per-node prefix size.


`spec.network.transport`
:   Specifies the transport protocol. Set to `NoOverlay` to disable the default encapsulation for this CUDN and use underlay routing for pod traffic.


`spec.network.noOverlayOptions`
:   Specifies routing mode and SNAT behavior for this network. Required when transport is set to `NoOverlay`.


`spec.network.noOverlayOptions.routing`
:   Specifies the routing mode for the network. For a CUDN, set to `Unmanaged` only. You manage external BGP peers and `RouteAdvertisements` CR for this network. No-overlay managed routing mode is only supported on the default cluster network. You must configure no-overlay managed routing on the Cluster Network Operator (CNO) CR, not on a CUDN.


`spec.network.noOverlayOptions.outboundSNAT`
:   Specifies outbound SNAT for this network. For a primary `ClusterUserDefinedNetwork` CR with `NoOverlay` transport, set to `Disabled` when the underlay routes pod IPs directly. A value of `Enabled` is not supported on this CR type. To use `Enabled` or `Disabled` with no-overlay on the default cluster network, configure `spec.defaultNetwork.ovnKubernetesConfig.noOverlayConfig.outboundSNAT` on the CNO CR instead.