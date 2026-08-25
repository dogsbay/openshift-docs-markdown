---
title: Configuring multitenant isolation with network policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring multitenant isolation with network policy {id="multitenant-network-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "multitenant-network-policy" %}

You can configure network policies to isolate network traffic between projects in a multitenant cluster. This isolation helps prevent unauthorized communication between workloads in different namespaces.

As a cluster administrator, you can configure your network policies to provide multitenant network isolation.


:::note

Configuring network policies as described in this section provides network isolation similar to the multitenant mode of OpenShift SDN in previous versions of {{ product_title }}.

:::


{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-multitenant-isolation.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="multitenant-network-policy-additional-resources"}

*   [Defining a default network policy for a project](/networking/network_security/network_policy/default-network-policy#default-network-policy)
{% endif %}