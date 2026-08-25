---
title: Tracing Openflow with ovnkube-trace
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Tracing Openflow with ovnkube-trace {id="ovn-kubernetes-tracing-using-ovntrace"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ovn-kubernetes-tracing-with-ovnkube" %}

To trace Open vSwitch and OVN traffic flows in {{ product_title }}, you can use the `ovnkube-trace` utility, which runs `ovn-trace`, `ovs-appctl ofproto/trace`, and `ovn-detrace` in a single correlated output.

You can execute the `ovnkube-trace` binary from a dedicated container. For releases after {{ product_title }} 4.7, you can also copy the binary to a local host and execute it from that host.

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-install-ovnkube-trace-local.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-running-ovnkube-trace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-ovnkube-trace-default-deny.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Tracing Openflow with ovnkube-trace utility](https://access.redhat.com/solutions/5887511)
*   [ovnkube-trace](https://github.com/ovn-kubernetes/ovn-kubernetes/blob/master/docs/troubleshooting/ovnkube-trace.md)