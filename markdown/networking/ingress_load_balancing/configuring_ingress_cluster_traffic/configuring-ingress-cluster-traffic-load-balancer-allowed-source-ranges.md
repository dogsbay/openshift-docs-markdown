---
title: Configuring ingress cluster traffic using load balancer allowed source ranges
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring ingress cluster traffic using load balancer allowed source ranges {id="configuring-ingress-cluster-traffic-lb-allowed-source-ranges"}
{%- set context = "configuring-ingress-cluster-traffic-lb-allowed-source-ranges" %}

You can specify a list of IP address ranges for the Ingress Controller. This action restricts access to the load balancer service when you specify the `LoadBalancerService` value for the `endpointPublishingStrategy` parameter. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-configuring-lb-allowed-source-ranges.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-configuring-lb-allowed-source-ranges-migration.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Introduction to OpenShift updates](/updating/understanding_updates/intro-to-updates#understanding-openshift-updates)