{%- set _mod_docs_content_type = "CONCEPT" %}
# HTTP Strict Transport Security {id="nw-enabling-hsts_{{ context }}"}

To enhance security and optimize website performance, use the HTTP Strict Transport Security (HSTS) policy. This mechanism signals browsers to use only HTTPS traffic on the route host, eliminating the need for HTTP redirects and speeding up user interactions. {._abstract}

When HSTS policy is enforced, HSTS adds a Strict Transport Security header to HTTP and HTTPS responses from the site. You can use the `insecureEdgeTerminationPolicy` value in a route to redirect HTTP to HTTPS. When HSTS is enforced, the client changes all requests from the HTTP URL to HTTPS before the request is sent, eliminating the need for a redirect.

Cluster administrators can configure HSTS to do the following:

*   Enable HSTS per-route
*   Disable HSTS per-route
*   Enforce HSTS per-domain, for a set of domains, or use namespace labels in combination with domains


:::important

HSTS works only with secure routes, either edge-terminated or re-encrypt. The configuration is ineffective on HTTP or passthrough routes.

:::