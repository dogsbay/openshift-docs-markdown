---
title: Ingress Node Firewall Operator in OpenShift Container Platform
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Ingress Node Firewall Operator in {{ product_title }} {id="ingress-node-firewall-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ingress-node-firewall-operator" %}

The Ingress Node Firewall Operator provides a stateless, eBPF-based firewall for managing node-level ingress traffic in {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/nw-infw-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-infw-operator-installing-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-infw-operator-installing-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-infw-operator-deploying.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-infw-operator-config-object.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-infw-operator-rules-object.md" %}{% endleveloffset %}

{%- set FeatureName = "eBPF Manager Operator integration" %}
{% include "./snippets/technology-preview.md" %}

{% leveloffset +1 %}{% include "./modules/nw-bpfman-infw-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-bpfman-infw-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-infw-operator-viewing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-infw-operator-troubleshooting.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
## Additional resources {id="additional-resources_{{ context }}"}

*   [About the eBPF Manager Operator](/networking/networking_operators/ebpf_manager/ebpf-manager-operator-about#bpfman-operator-about)
{% endif %}