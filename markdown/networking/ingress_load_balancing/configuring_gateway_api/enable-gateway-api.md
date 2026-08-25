---
title: Enable Gateway API
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Enable Gateway API {id="enable-gateway-api_{{ context }}"}
{%- set context = "enable-gateway-api" %}

To route traffic using Gateway API, you must first enable the feature on your cluster. You can enable Gateway API by creating a `GatewayClass` custom resource, which triggers the Ingress Operator to provision the necessary controller and components.  {._abstract}

After you successfully enable Gateway API, you can begin deploying gateways, assigning network addresses, and configuring listeners to control your network traffic flow.

{% leveloffset +1 %}{% include "./modules/enable-gateway-api-ingress-operator.md" %}{% endleveloffset %}