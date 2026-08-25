---
title: Using route-based deployment strategies
---

# Using route-based deployment strategies {#route-based-deployment-strategies}

To roll out application changes to selected traffic in OpenShift Container Platform, you can use route-based deployment strategies with the router and `Deployment` objects.

These advanced strategies, including blue-green, A/B, and canary, affect specific routes rather than every route that resolves to the application.

The most common route-based strategy is to use a *blue-green deployment*. The new version (the green version) is brought up for testing and evaluation, while the users still use the stable version (the blue version). When ready, the users are switched to the green version. If a problem arises, you can switch back to the blue version.

Alternatively, you can use an *A/B versions* strategy in which both versions are active at the same time. With this strategy, some users can use *version A*, and other users can use *version B*. You can use this strategy to experiment with user interface changes or other features in order to get user feedback. You can also use it to verify proper operation in a production context where problems impact a limited number of users.

A canary deployment tests the new version but when a problem is detected it quickly falls back to the previous version. This can be done with both of the above strategies.

The route-based deployment strategies do not scale the number of pods in the services. To maintain desired performance characteristics the deployment configurations might have to be scaled.

## Additional resources {#additional-resources_route-based-deployment-strategies}

- [Route-specific annotations](/openshift-docs-markdown/networking/ingress_load_balancing/routes/nw-configuring-routes#nw-route-specific-annotations)
