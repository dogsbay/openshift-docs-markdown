---
title: Configure DNS for gateways
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configure DNS for gateways {id="configure-dns-for-gateways"}
{%- set context = "configure-dns-for-gateways" %}

Configure automatic or manual DNS record management for Gateway API resources to provide predictable network addresses for incoming traffic. {._abstract}

{% leveloffset +1 %}{% include "./modules/gateway-api-dns-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gateway-automatic-dns-management.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-dns-on-premise-gateways.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Gateway listener configuration reference](/networking/ingress_load_balancing/configuring_gateway_api/controlling-incoming-traffic-gateway-listeners#gateway-listener-configuration-reference_controlling-incoming-traffic-gateway-listeners)
*   [Provisioning your own DNS records](/installing/installing_gcp/installing-gcp-customizations#installation-gcp-provisioning-own-dns-records_installing-gcp-customizations)
*   [Verifying Gateway infrastructure status](/networking/ingress_load_balancing/configuring_gateway_api/verifying-gateway-infrastructure-status#verifying-gateway-infrastructure-status)