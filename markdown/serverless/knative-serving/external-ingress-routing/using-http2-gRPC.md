{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using HTTP2 and gRPC {id="using-http2-gRPC_{{ context }}"}
{%- set context = "using-http2-gRPC" %}

{{ ServerlessProductName }} supports only insecure or edge-terminated routes. Insecure or edge-terminated routes do not support HTTP2 on {{ product_title }}. These routes also do not support gRPC because gRPC is transported by HTTP2. If you use these protocols in your application, you must call the application using the ingress gateway directly. To do this you must find the ingress gateway’s public address and the application’s specific host.

{% leveloffset +1 %}{% include "./modules/interacting-serverless-apps-http2-gRPC.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

[Enabling HTTP/2 Ingress connectivity](/networking/networking_operators/ingress-operator#nw-http2-haproxy_configuring-ingress) {._additional-resources}

{% leveloffset +1 %}{% include "./modules/interacting-serverless-apps-http2-gRPC-up-to-4-9.md" %}{% endleveloffset %}