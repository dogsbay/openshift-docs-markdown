---
title: Configure an external gateway on the default network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configure an external gateway on the default network {id="configuring-secondary-external-gateway"}
{%- set context = "configuring-secondary-external-gateway" %}

As a cluster administrator, you can configure an external gateway on the default network. {._abstract}

This feature offers the following benefits:

*   Granular control over egress traffic on a per-namespace basis
*   Flexible configuration of static and dynamic external gateway IP addresses
*   Support for both IPv4 and IPv6 address families

## Prerequisites {id="{{ context }}_prerequisites"}

*   Your cluster uses the OVN-Kubernetes network plugin.
*   Your infrastructure is configured to route traffic from the secondary external gateway.

{% leveloffset +1 %}{% include "./modules/nw-secondary-ext-gw-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-secondary-ext-gw-object.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Set-based requirement (Kubernetes)](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#set-based-requirement)

{% leveloffset +1 %}{% include "./modules/example-secondary-external-gateway-configurations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-secondary-ext-gw-configure.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Understanding multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)