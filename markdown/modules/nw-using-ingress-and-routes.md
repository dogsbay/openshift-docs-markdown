{%- set _mod_docs_content_type = "CONCEPT" %}
# Using Ingress Controllers and routes {id="nw-using-ingress-and-routes_{{ context }}"}

You can use the Ingress Controller to allow external access to an {{ product_title }} cluster. The Ingress Operator manages Ingress Controllers and wildcard DNS. {._abstract}

An Ingress Controller is configured to accept external requests and proxy them based on the configured routes. This is limited to HTTP, HTTPS using SNI, and TLS using SNI, which is sufficient for web applications and services that work over TLS with SNI.

Work with your administrator to configure an Ingress Controller to accept external requests and proxy them based on the configured routes.

The administrator can create a wildcard DNS entry and then set up an Ingress Controller. Then, you can work with the edge Ingress Controller without having to contact the administrators.

By default, every Ingress Controller in the cluster can admit any route created in any project in the cluster. The Ingress Controller has the following characteristics:

*   Has two replicas by default, which means it should be running on two compute nodes.
*   Can be scaled up to have more replicas on more nodes.