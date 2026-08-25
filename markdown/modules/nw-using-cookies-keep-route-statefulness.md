{%- set _mod_docs_content_type = "CONCEPT" %}
# Use cookies to keep route statefulness {id="nw-using-cookies-keep-route-statefulness_{{ context }}"}

To maintain stateful application traffic during pod restarts or scaling events, configure sticky sessions by using cookies. By using this method, you ensure that all incoming traffic reaches the same endpoint, preventing state loss even if the specific endpoint pod changes. {._abstract}

{{ product_title }} can use cookies to configure session persistence. The Ingress Controller selects an endpoint to handle any user requests, and creates a cookie for the session. The cookie is passed back in the response to the request and the user sends the cookie back with the next request in the session. The cookie tells the Ingress Controller which endpoint is handling the session, ensuring that client requests use the cookie so that they are routed to the same pod.


:::note

Cookies cannot be set on passthrough routes, because the HTTP traffic cannot be seen. Instead, a number is calculated based on the source IP address, which determines the backend.

If backends change, the traffic can be directed to the wrong server, making it less sticky. If you are using a load balancer, which hides source IP, the same number is set for all connections and traffic is sent to the same pod.

:::