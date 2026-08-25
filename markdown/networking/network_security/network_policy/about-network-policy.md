---
title: Creating a network policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating a network policy {id="about-network-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "about-network-policy" %}

To restrict traffic between workloads and improve application security, configure `NetworkPolicy` objects for your cluster. Network policies define the allowed ingress and egress connections for selected pods and help isolate applications within namespaces.

As a developer, you can define network policies that restrict traffic to pods in your cluster.

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-optimize-ovn.md" %}{% endleveloffset %}

## Additional resources {id="about-network-policy-additional-resources"}

*   [Creating a network policy](/networking/network_security/network_policy/creating-network-policy#creating-network-policy)
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Defining a default network policy for projects](/networking/network_security/network_policy/default-network-policy#default-network-policy)
*   [Projects and namespaces](/authentication/using-rbac#rbac-projects-namespaces_using-rbac)
*   [Configuring multitenant isolation with network policy](/networking/network_security/network_policy/multitenant-network-policy#multitenant-network-policy)
*   [NetworkPolicy API](/rest_api/network_apis/networkpolicy-networking-k8s-io-v1#networkpolicy-networking-k8s-io-v1)
{% endif %}