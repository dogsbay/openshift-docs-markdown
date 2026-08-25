---
title: Troubleshooting node network configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting node network configuration {id="k8s-nmstate-troubleshooting-node-network"}
{%- set VirtProductName = "OpenShift Container Platform" -%}
{%- set context = "k8s-nmstate-troubleshooting-node-network" %}

If the node network configuration encounters an issue, the policy is automatically rolled back and the enactments report failure. This includes issues such as: {._abstract}

*   The configuration fails to be applied on the host.
*   The host loses connection to the default gateway.
*   The host loses connection to the API server.

{% leveloffset +1 %}{% include "./modules/virt-troubleshooting-incorrect-policy-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/k8s-nmstate-troubleshooting-dns-disconnected-env.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/k8s-nmstate-troubleshooting-dns-disconnected-bind9-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/k8s-nmstate-troubleshooting-dns-disconnected-env-dnsmasq.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/k8s-nmstate-troubleshooting-dns-disconnected-env-resolv.md" %}{% endleveloffset %}