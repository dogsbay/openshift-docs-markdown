---
title: Verifying Gateway infrastructure status
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Verifying Gateway infrastructure status {id="verifying-gateway-infrastructure-status"}
{%- set context = "verifying-gateway-infrastructure-status" %}

To ensure your gateway infrastructure is properly configured and functioning, review the `status` conditions of your `GatewayClass` and `Gateway` custom resources (CRs). Checking these conditions confirms that the controller has successfully programmed your underlying data plane without routing conflicts. {._abstract}

{% leveloffset +1 %}{% include "./modules/gatewayclass-status-conditions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gateway-listener-status-conditions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/querying-gateway-status-cli.md" %}{% endleveloffset %}

## Additional resources {id="verifying-gateway-infrastructure-status-additional-resources" ._additional-resources}

*   [Installing a cluster on {{ gcp_short }} with customizations](/installing/installing_gcp/installing-gcp-customizations#installation-gcp-provisioning-dns-records_installing-gcp-customizations)