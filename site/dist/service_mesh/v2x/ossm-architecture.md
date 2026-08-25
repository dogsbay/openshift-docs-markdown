---
title: Understanding Service Mesh
---

# Understanding Service Mesh {#ossm-architecture}

{{ SMProductName }} provides a platform for behavioral insight and operational control over your networked microservices in a service mesh. With {{ SMProductName }}, you can connect, secure, and monitor microservices in your OpenShift Container Platform environment.

For information about how to install the 3scale adapter, refer to the [3scale Istio adapter documentation](/service_mesh/v2x/threescale-adapter#threescale-adapter)

## Understanding Kiali {#_understanding_kiali}

Kiali provides visibility into your service mesh by showing you the microservices in your service mesh, and how they are connected.

## Understanding distributed tracing {#_understanding_distributed_tracing}

Every time a user takes an action in an application, a request is executed by the architecture that may require dozens of different services to participate to produce a response. The path of this request is a distributed transaction. The {{ DTProductName }} lets you perform distributed tracing, which follows the path of a request through various microservices that make up an application.

**Distributed tracing** is a technique that is used to tie the information about different units of work together—usually executed in different processes or hosts—to understand a whole chain of events in a distributed transaction. Distributed tracing lets developers visualize call flows in large service oriented architectures. It can be invaluable in understanding serialization, parallelism, and sources of latency.

The {{ DTProductName }} records the execution of individual requests across the whole stack of microservices, and presents them as traces. A **trace** is a data/execution path through the system. An end-to-end trace comprises one or more spans.

A **span** represents a logical unit of work that has an operation name, the start time of the operation, and the duration. Spans may be nested and ordered to model causal relationships.

## Next steps {#_next_steps}

- [Prepare to install {{ SMProductName }}](/service_mesh/v2x/preparing-ossm-installation#preparing-ossm-installation) in your OpenShift Container Platform environment.
