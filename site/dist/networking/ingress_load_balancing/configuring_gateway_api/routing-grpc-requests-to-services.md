---
title: Route gRPC requests to services
---

# Route gRPC requests to services {#routing-grpc-requests-to-services}

When you expose your gRPC APIs through a gateway, you must configure a `GRPCRoute` resource to accurately direct incoming gRPC requests from a Gateway listener to an API object. A `GRPCRoute` specifies the exact routing behavior for these requests by evaluating a set of defined rules.

Within each `GRPCRoute` rule, you can establish the following routing behaviors:

- `matches`: Define the conditions a gRPC request must meet based on specific gRPC methods and headers.
- `filters`: Apply processing directions to the request, such as header modifications, before the traffic reaches the backend.
- `backendRefs`: Designate the backend services where matching and filtered requests are delivered, including traffic weight distribution.

While standard `GRPCRoute` configurations share many similarities with `HTTPRoute` resources, the OpenShift Container Platform implementation of `GRPCRoute` adheres to the standard-channel Gateway API specification, which excludes upstream experimental fields and features.

To successfully configure your gRPC routing behavior, complete the following tasks:

- Configure gRPC request matching conditions
- Apply processing filters to gRPC requests
- Configure routing destinations and traffic weights for gRPC
- Understand `GRPCRoute` implementation details
