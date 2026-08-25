{%- set _mod_docs_content_type = "CONCEPT" %}
# 3scale Istio Adapter APIcast emulation {id="threescale-istio-adapter-apicast_{{ context }}"}

The 3scale Istio Adapter performs as APIcast would when the following conditions occur:

*   When a request cannot match any mapping rule defined, the returned HTTP code is 404 Not Found. This was previously 403 Forbidden.
*   When a request is denied because it goes over limits, the returned HTTP code is 429 Too Many Requests. This was previously 403 Forbidden.
*   When generating default templates via the CLI, it will use underscores rather than dashes for the headers, for example: `user_key` rather than `user-key`.