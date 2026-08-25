---
title: Creating a network policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating a network policy {id="creating-network-policy"}
{% include "./_attributes/common-attributes.md" %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "creating-network-policy" %}

As a cluster administrator, you can create a network policy for a namespace.

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-create-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-deny-all-allowed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-allow-external-clients.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-allow-application-all-namespaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-allow-application-particular-namespace.md" %}{% endleveloffset %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-create-ocm.md" %}{% endleveloffset %}

{% endif %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
## Additional resources {id="_additional_resources"}

*   [Accessing the web console](/web_console/web-console#web-console)
*   [Logging for egress firewall and network policy rules](/networking/network_security/logging-network-security#logging-network-security)
{% endif %}