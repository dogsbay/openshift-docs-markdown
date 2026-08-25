{%- set _mod_docs_content_type = "REFERENCE" %}
# eBPF flow data filtering examples {id="network-observability-ebpf-flow-data-filtering-examples_{{ context }}"}

Use these `FlowCollector` custom resource examples to filter eBPF flows using multiple rules to control the flow of packets cached in the eBPF flow table. {._abstract}

## Example YAML to sample all North-South traffic, and 1:50 East-West traffic {id="example-yaml-sample-all-north-south-traffic_{{ context }}"}

By default, all other flows are rejected.

```yaml
apiVersion: flows.netobserv.io/v1beta2
kind: FlowCollector
metadata:
  name: cluster
spec:
  namespace: netobserv
  deploymentModel: Service
  agent:
    type: eBPF
    ebpf:
      flowFilter:
        enable: true
        rules:
         - action: Accept
           cidr: 0.0.0.0/0
           sampling: 1
         - action: Accept
           cidr: 10.128.0.0/14
           peerCIDR: 10.128.0.0/14
         - action: Accept
           cidr: 172.30.0.0/16
           peerCIDR: 10.128.0.0/14
           sampling: 50
```

where:


`spec.agent.ebpf.flowFilter.enable`
:   Specifies whether to enable `eBPF` flow filtering. Set to `true` to enable flow filtering.

`spec.agent.ebpf.flowFilter.rules.action`
:   Specifies the action for the flow filter rule. Valid values are `Accept` or `Reject`.

`spec.agent.ebpf.flowFilter.rules.cidr`
:   Specifies the IP address and `CIDR` mask for the flow filter rule. This parameter supports both `IPv4` and `IPv6` address formats. Use `0.0.0.0/0` for `IPv4` or `::/0` for `IPv6` to match any IP address.

`spec.agent.ebpf.flowFilter.rules.peerCIDR`
:   Specifies the Peer IP `CIDR` used to filter flows.

`spec.agent.ebpf.flowFilter.rules.sampling`
:   Specifies the sampling interval for matched flows. This value overrides the global sampling setting defined in `spec.agent.ebpf.sampling`.

## Example YAML to filter flows with packet drops {id="example-yaml-filter-flows-with-packet-drops_{{ context }}"}

By default, all other flows are rejected.

```yaml
apiVersion: flows.netobserv.io/v1beta2
kind: FlowCollector
metadata:
  name: cluster
spec:
  namespace: netobserv
  deploymentModel: Service
  agent:
    type: eBPF
    ebpf:
      privileged: true
      features:
        - PacketDrop
      flowFilter:
        enable: true
        rules:
        - action: Accept
          cidr: 172.30.0.0/16
          pktDrops: true
```

where:


`spec.agent.ebpf.privileged`
:   Specifies whether to enable privileged mode, which is required for reporting packet drops.

`spec.agent.ebpf.features`
:   Specifies the list of eBPF features to enable. Adding the `PacketDrop` value to this list reports packet drops for each network flow.

`spec.agent.ebpf.flowFilter.enable`
:   Specifies whether to enable `eBPF` flow filtering.

`spec.agent.ebpf.flowFilter.rules.action`
:   Specifies the action for the flow filter rule. Valid values are `Accept` or `Reject`.

`spec.agent.ebpf.flowFilter.rules.pktDrops`
:   Specifies whether to filter for flows that contain packet drops.