---
title: Routing HTTP requests to services
---

# Routing HTTP requests to services {#routing-http-requests-to-services}

When you expose your applications through a gateway, you must configure an `HTTPRoute` custom resource (CR) to accurately direct incoming HTTP requests from your network listener to the appropriate backend services. A Gateway API `HTTPRoute` CR specifies the exact routing behavior for these requests by evaluating a set of rules.

The core configuration element of an `HTTPRoute` CR is a rule. You can configure up to 16 rules for a single route. Within each rule, you can establish the following routing behaviors:

- `Matches`: Define the conditions an HTTP request must meet based on paths, headers, query parameters, or methods.
- `Filters`: Apply processing directions to the request, such as header modifications, mirrors, or redirects.
- `BackendRefs`: Designate the backend services where matching and filtered requests are delivered, including traffic weight distribution.
- `Timeouts`: Establish strict time limits for the entire request or the backend hop.
