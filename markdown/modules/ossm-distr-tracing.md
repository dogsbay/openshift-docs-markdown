# Distributed tracing {id="ossm-overview-distr-tracing_{{ context }}"}

Distributed tracing is the process of tracking the performance of individual services in an application by tracing the path of the service calls in the application. Each time a user takes action in an application, a request is executed that might require many services to interact to produce a response. The path of this request is called a distributed transaction.

{{ SMProductName }} uses {{ DTProductName }} to allow developers to view call flows in a microservice application.