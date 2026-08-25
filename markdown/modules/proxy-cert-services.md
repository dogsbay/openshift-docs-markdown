{%- set _mod_docs_content_type = "REFERENCE" %}
# Services using proxy certificates {id="proxy-cert-services_{{ context }}"}

Platform components and services running on {{ op_system }} nodes can use proxy certificates to establish trusted egress HTTPS connections. {._abstract}

By default, all platform components that make egress HTTPS calls use the {{ op_system }} trust bundle. If `trustedCA` is defined, the trust certificate is also used.

Any service that is running on the {{ op_system }} node is able to use the trust bundle of the node.