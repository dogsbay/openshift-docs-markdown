{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Verify Gateway infrastructure status {id="verifying-gateway-infrastructure-status"}
{%- set context = "verifying-gateway-infrastructure-status" %}

To ensure your gateway infrastructure is properly configured and functioning, review the `status` conditions of your `GatewayClass` and `Gateway` custom resources (CRs). Checking these conditions confirms that the controller has successfully programmed your underlying data plane without routing conflicts. {._abstract}

To verify that your gateway infrastructure is functioning correctly, complete the following tasks:

*   Understand `GatewayClass` status conditions to verify that the controller has claimed the class and that your installed API version is compatible.
*   Review `Gateway` CR and listener `status` conditions to pinpoint data plane failures, configuration errors, or negative polarity conflicts.
*   Query gateway infrastructure status using the CLI to quickly validate your deployment and retrieve assigned IP addresses.

{% leveloffset +1 %}{% include "./modules/gatewayclass-status-conditions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gateway-listener-status-conditions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/querying-gateway-status-cli.md" %}{% endleveloffset %}