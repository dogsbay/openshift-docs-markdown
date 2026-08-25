---
title: OVN-Kubernetes architecture
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# OVN-Kubernetes architecture {id="ovn-kubernetes-architecture-assembly"}
{%- set context = "ovn-kubernetes-architecture" %}

The following sections describe the OVN-Kubernetes architecture, how OVN components map to cluster resources and databases, and how to install and run `network-tools` for debugging. {._abstract}

{% leveloffset +1 %}{% include "./modules/ovn-kubernetes-architecture-con.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-list-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-list-database-contents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-examine-nb-database-contents-ref.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-list-southbound-database-contents.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-examine-sb-database-contents-ref.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ovn-kubernetes-logical-architecture-con.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ovn-kubernetes-installing-network-tools.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ovn-kubernetes-running-network-tools.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_ovn-kubernetes-architecture" ._additional-resources}

*   [Tracing Openflow with ovnkube-trace](/networking/ovn_kubernetes_network_provider/ovn-kubernetes-tracing-using-ovntrace#ovn-kubernetes-tracing-using-ovntrace)
*   [OVN architecture](https://www.ovn.org/support/dist-docs/ovn-architecture.7.html)
*   [ovn-nbctl Linux manual page](https://man7.org/linux/man-pages/man8/ovn-nbctl.8.html)
*   [ovn-sbctl Linux manual page](https://man7.org/linux/man-pages/man8/ovn-sbctl.8.html)