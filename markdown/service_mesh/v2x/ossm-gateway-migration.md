---
title: Gateway migration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Gateway migration {id="ossm-gateway-migration"}
{%- set context = "gateway-migration" %}

As a network administrator, the preferred method for deploying ingress and egress gateways is with a `Deployment` resource using gateway injection.

{% leveloffset +1 %}{% include "./modules/ossm-about-gateway-migration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-migrating-from-smcp-defined-gateways-to-gateway-injection.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Enabling gateway injection](/service_mesh/v2x/ossm-traffic-manage#ossm-automatic-gateway-injection_traffic-management)
*   [Deploying automatic gateway injection](/service_mesh/v2x/ossm-traffic-manage#ossm-deploying-automatic-gateway-injection_traffic-management)