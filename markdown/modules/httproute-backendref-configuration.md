{%- set _mod_docs_content_type = "REFERENCE" %}
# HTTPRoute backendRef configuration {id="httproute-backendref-configuration_{{ context }}"}

BackendRefs are the service destinations of requests that meet your matches rules, and are composed of group, kind, name, namespace, port, and weight. Name and port are the only required fields and refer to the service name and the service port number Weight is relevant when there is more than one backendRef, and specifies the proportion of requests forwarded to that specific backendRef. Without a backendRef, the rule doesn’t do any request forwarding and may return an error. {._abstract}

## Example: Single backend destination {id="_example_single_backend_destination"}

This example shows a BackendRef where there is a single backend destination, a service named `<service_v1>`:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: <backend_route_example>
  namespace: <example_application>
spec:
  parentRefs:
  - name: <example_gateway>
    namespace: openshift-ingress
  rules:
  - backendRefs:
    - name: <service_v1>
      port: 8080
```
*   `backendRefs` defines the destination services for the traffic.
*   `name` specifies the name of the Kubernetes service.
*   `port` specifies the port on which the service is listening.

## Example: Weighted backend delivery {id="_example_weighted_backend_delivery"}

This example shows two backendRefs where there is weighted delivery of 15 and 25 for the backends. This means `<service_v1>` gets 15/40 (3/8ths) of the traffic, and `<service_v2>` gets 25/40 (5/8ths) of the traffic. Though not required, it is recommended to have the weights add up to 100 whenever possible for clarity.

```yaml
spec:
  rules:
  - backendRefs:
    - name: <service_v1>
      port: 8080
      weight: 15
    - name: <service_v2>
      port: 8080
      weight: 25
```