---
title: Audit logging for network security
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Audit logging for network security {id="logging-network-security"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "logging-network-security" %}

The OVN-Kubernetes network plugin uses Open Virtual Network (OVN) access control lists (ACLs) to manage `AdminNetworkPolicy`, `BaselineAdminNetworkPolicy`, `NetworkPolicy`, and `EgressFirewall` objects. Audit logging exposes `Allow` and `Deny` ACL events for `NetworkPolicy`, `EgressFirewall` and `BaselineAdminNetworkPolicy` custom resources (CR). Logging also exposes `Allow`, `Deny`, and `Pass` ACL events for `AdminNetworkPolicy` (ANP) CR.


:::note

Audit logging is available for only the [OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes).

:::


{% leveloffset +1 %}{% include "./modules/nw-audit-configuration.md" %}{% endleveloffset %}

{% include "./modules/nw-operator-cr.md" %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-concept.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding network policy APIs](/networking/network_security/network-policy-apis#network-policy-apis)

{% leveloffset +1 %}{% include "./modules/nw-anp-audit-logging-concept.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-banp-audit-logging-concept.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-enable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-disable.md" %}{% endleveloffset %}

{% if not openshift_rosa_hcp %}
## Additional resources {id="{{ context }}-additional-resources"}

{% if openshift_rosa or openshift_enterprise %}
*   [About network policy](/networking/network_security/network_policy/about-network-policy#about-network-policy)
{% endif %}
{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring an egress firewall for a project](/networking/network_security/egress_firewall/configuring-egress-firewall-ovn#configuring-egress-firewall-ovn)
{% endif %}
{% endif %}