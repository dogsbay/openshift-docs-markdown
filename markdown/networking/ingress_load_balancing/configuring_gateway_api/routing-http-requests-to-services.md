---
title: Routing HTTP requests to services
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Routing HTTP requests to services {id="routing-http-requests-to-services"}
{%- set context = "routing-http-requests-to-services" %}

When you expose your applications through a gateway, you must configure an `HTTPRoute` custom resource (CR) to accurately direct incoming HTTP requests from your network listener to the appropriate backend services. A Gateway API `HTTPRoute` CR specifies the exact routing behavior for these requests by evaluating a set of rules. {._abstract}

The core configuration element of an `HTTPRoute` CR is a rule. You can configure up to 16 rules for a single route. Within each rule, you can establish the following routing behaviors:

*   `Matches`: Define the conditions an HTTP request must meet based on paths, headers, query parameters, or methods.
*   `Filters`: Apply processing directions to the request, such as header modifications, mirrors, or redirects.
*   `BackendRefs`: Designate the backend services where matching and filtered requests are delivered, including traffic weight distribution.
*   `Timeouts`: Establish strict time limits for the entire request or the backend hop.

{% leveloffset +1 %}{% include "./modules/creating-httproute.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-http-request-matching-conditions.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/supported-httproute-match-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/applying-processing-filters-http-requests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/supported-httproute-filters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-routing-destinations-weights.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/httproute-backendref-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/setting-timeouts-http-requests.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/httproute-timeout-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/comparing-openshift-routes-and-httproutes.md" %}{% endleveloffset %}