{%- set _mod_docs_content_type = "CONCEPT" %}
# HTTPRoute Transport Layer Security (TLS) configuration {id="httproute-tls-options_{{ context }}"}

To balance security compliance and application performance, you can configure edge or re-encrypt TLS termination on your gateway listeners. {._abstract}


Edge termination
:   Edge termination encrypts client traffic to the gateway but allows unencrypted traffic to pass to your internal services. This configuration is ideal for encrypting user logins while trading internal encryption for faster application performance.


Re-encrypt termination
:   Re-encrypt termination encrypts traffic from the client to the gateway, and then re-encrypts it to the destination service. This mode allows the gateway to inspect payloads to efficiently route traffic or block unauthorized access without eliminating backend encryption.


:::important

{{ product_title }} does not support passthrough termination for Gateway API. Passthrough termination provides direct traffic encryption from the client to the service, and is only supported in traditional {{ product_title }} routes.

:::