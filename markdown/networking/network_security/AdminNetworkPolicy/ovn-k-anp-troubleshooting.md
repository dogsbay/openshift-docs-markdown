---
title: Troubleshooting AdminNetworkPolicy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting AdminNetworkPolicy {id="ovn-k-anp-troubleshooting"}
{%- set context = "ovn-k-anp" %}

To troubleshoot `AdminNetworkPolicy` and `BaselineAdminNetworkPolicy` resources in {{ product_title }}, you can review status conditions with `oc describe` and inspect OVN northbound database objects with `ovn-nbctl` commands. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-ovn-k-anp-troubeshooting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-k-anp-nbctl.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Tracing Openflow with ovnkube-trace](/networking/ovn_kubernetes_network_provider/ovn-kubernetes-tracing-using-ovntrace#ovn-kubernetes-tracing-using-ovntrace)
*   [Troubleshooting OVN-Kubernetes](/networking/ovn_kubernetes_network_provider/ovn-kubernetes-troubleshooting-sources#ovn-kubernetes-troubleshooting-sources)