---
title: Connecting a virtual machine to the default pod network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Connecting a virtual machine to the default pod network {id="virt-connecting-vm-to-default-pod-network"}
{%- set context = "virt-connecting-vm-to-default-pod-network" %}

You can connect a virtual machine to the default internal pod network by configuring its network interface to use the `masquerade` binding mode. {._abstract}


:::note

Traffic passing through network interfaces to the default pod network is interrupted during live migration.

:::


{% leveloffset +1 %}{% include "./modules/virt-configuring-masquerade-mode-cli.md" %}{% endleveloffset %}

{%- if not openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/virt-configuring-masquerade-mode-dual-stack.md" %}{% endleveloffset %}
{%- endif %}

{% leveloffset +1 %}{% include "./modules/virt-jumbo-frames-vm-pod-nw.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Changing the MTU for the cluster network](/networking/advanced_networking/changing-cluster-network-mtu#changing-cluster-network-mtu)
*   [Optimizing the MTU for your network](/scalability_and_performance/optimization/optimizing-networking#optimizing-mtu_optimizing-networking)
{%- endif %}