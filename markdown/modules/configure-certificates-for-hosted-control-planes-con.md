{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure certificates for hosted control planes {id="configure-certificates-for-hosted-control-planes-con_{{ context }}"}

To establish encrypted communication between clients and a hosted control plane, you configure server certificates for the hosted cluster. You can supply a custom API server certificate and custom OAuth server certificates so that users reach the cluster over a trusted, named endpoint.