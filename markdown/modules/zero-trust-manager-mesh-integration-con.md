{%- set _mod_docs_content_type = "CONCEPT" %}
# Integrating Red Hat OpenShift Service Mesh with Zero Trust Workload Identity Manager in a single-cluster {id="zero-trust-manager-mesh-integration-con_{{ context }}"}

Deploy and configure {{ spire_full }} as the certificate authority (CA) for {{ SMProductName }} workloads, replacing the Istio built-in CA with SPIFFE-compliant identities and automatically rotated short-lived certificates.