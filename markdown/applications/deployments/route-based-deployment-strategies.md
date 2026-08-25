---
title: Using route-based deployment strategies
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using route-based deployment strategies {id="route-based-deployment-strategies"}
{%- set context = "route-based-deployment-strategies" %}

To roll out application changes to selected traffic in {{ product_title }}, you can use route-based deployment strategies with the router and `Deployment` objects.  {._abstract}

These advanced strategies, including blue-green, A/B, and canary, affect specific routes rather than every route that resolves to the application.

The most common route-based strategy is to use a _blue-green deployment_. The new version (the green version) is brought up for testing and evaluation, while the users still use the stable version (the blue version). When ready, the users are switched to the green version. If a problem arises, you can switch back to the blue version.

Alternatively, you can use an _A/B versions_ strategy in which both versions are active at the same time. With this strategy, some users can use _version A_, and other users can use _version B_. You can use this strategy to experiment with user interface changes or other features in order to get user feedback. You can also use it to verify proper operation in a production context where problems impact a limited number of users.

A canary deployment tests the new version but when a problem is detected it quickly falls back to the previous version. This can be done with both of the above strategies.

The route-based deployment strategies do not scale the number of pods in the services. To maintain desired performance characteristics the deployment configurations might have to be scaled.

{% leveloffset +1 %}{% include "./modules/deployments-proxy-shards.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-n1-compatibility.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-graceful-termination.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-blue-green.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-ab-testing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-ab-testing-lb.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-ab-testing-lb-web.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-ab-testing-lb-web-new-route.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-ab-testing-lb-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/deployments-ab-one-service-multi-dc.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Route-specific annotations](/networking/ingress_load_balancing/routes/nw-configuring-routes#nw-route-specific-annotations)