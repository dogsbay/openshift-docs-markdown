---
title: Tracing Openflow with ovnkube-trace
---

# Tracing Openflow with ovnkube-trace {#ovn-kubernetes-tracing-using-ovntrace}

To trace Open vSwitch and OVN traffic flows in OpenShift Container Platform, you can use the `ovnkube-trace` utility, which runs `ovn-trace`, `ovs-appctl ofproto/trace`, and `ovn-detrace` in a single correlated output.

You can execute the `ovnkube-trace` binary from a dedicated container. For releases after OpenShift Container Platform 4.7, you can also copy the binary to a local host and execute it from that host.

## Additional resources {#additional-resources_ovn-kubernetes-tracing-with-ovnkube}

- [Tracing Openflow with ovnkube-trace utility](https://access.redhat.com/solutions/5887511)
- [ovnkube-trace](https://github.com/ovn-kubernetes/ovn-kubernetes/blob/master/docs/troubleshooting/ovnkube-trace.md)
