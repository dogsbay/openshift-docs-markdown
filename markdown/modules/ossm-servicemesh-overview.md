# Introduction to {{ SMProductName }} {id="ossm-servicemesh-overview_{{ context }}"}

{{ SMProductName }} addresses a variety of problems in a microservice architecture by creating a centralized point of control in an application. It adds a transparent layer on existing distributed applications without requiring any changes to the application code.

Microservice architectures split the work of enterprise applications into modular services, which can make scaling and maintenance easier. However, as an enterprise application built on a microservice architecture grows in size and complexity, it becomes difficult to understand and manage. {{ SMProductShortName }} can address those architecture problems by capturing or intercepting traffic between services and can modify, redirect, or create new requests to other services.

{{ SMProductShortName }}, which is based on the open source [Istio project](https://istio.io/), provides an easy way to create a network of deployed services that provides discovery, load balancing, service-to-service authentication, failure recovery, metrics, and monitoring. A service mesh also provides more complex operational functionality, including A/B testing, canary releases, access control, and end-to-end authentication.


:::note

{{ SMProductName }} 3 is generally available. For more information, see [{{ SMProductName }} 3.0](https://docs.redhat.com/en/documentation/red_hat_openshift_service_mesh/).

:::