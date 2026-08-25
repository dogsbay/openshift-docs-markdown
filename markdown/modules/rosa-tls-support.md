{%- set _mod_docs_content_type = "CONCEPT" %}
# TLS support for your clusters  {id="rosa-tls-support_{{ context }}"}

With {{ product_title }}, you can use the Modern Transport Layer Security (TLS) 1.3 security profile for managed endpoints, giving you authority over the API server and OAuth endpoints. Even when Red&#160;Hat manages the underlying control plane infrastructure, you still have control. By using this TLS 1.3profile, you ensure that administrative and automation tools, such as the `oc` command line tool and the CI/CD integration, use TLS 1.3 for all communications.