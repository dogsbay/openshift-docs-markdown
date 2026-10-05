{%- set _mod_docs_content_type = "CONCEPT" %}
# Example use cases for X-Forwarded headers {id="nw-using-ingress-forwarded-example-use-cases_{{ context }}"}

You can use X-Forwarded header policies on an Ingress Controller or route in {{ product_title }} to preserve headers from an external proxy or to set headers for internal cluster requests. {._abstract}

**As a cluster administrator, you can:**

*   Configure an external proxy that injects the `X-Forwarded-For` header into each request before forwarding it to an Ingress Controller.

    To configure the Ingress Controller to pass the header through unmodified, you specify the `never` policy. The Ingress Controller then never sets the headers, and applications receive only the headers that the external proxy provides.
*   Configure the Ingress Controller to pass the `X-Forwarded-For` header that your external proxy sets on external cluster requests through unmodified.

    To configure the Ingress Controller to set the `X-Forwarded-For` header on internal cluster requests, which do not go through the external proxy, specify the `if-none` policy. If an HTTP request already has the header set through the external proxy, then the Ingress Controller preserves it. If the header is absent because the request did not come through the proxy, then the Ingress Controller adds the header.

**As an application developer, you can:**

*   Configure an application-specific external proxy that injects the `X-Forwarded-For` header.

    To configure an Ingress Controller to pass the header through unmodified for an application’s Route, without affecting the policy for other Routes, add an annotation `haproxy.router.openshift.io/set-forwarded-headers: if-none` or `haproxy.router.openshift.io/set-forwarded-headers: never` on the Route for the application.

    :::note

    You can set the `haproxy.router.openshift.io/set-forwarded-headers` annotation on a per route basis, independent from the globally set value for the Ingress Controller.
    
    :::