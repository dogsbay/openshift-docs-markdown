{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIRE Controller Manager {id="zero-trust-manager-about-controller-manager_{{ context }}"}

Use the SPIRE Controller Manager to automate workload registration with custom resource definitions (CRDs). The manager monitors pods and CRDs to create, update, or delete entries on the SPIRE Server. This process helps ensure that your SPIRE entries accurately reflect your active resources. {._abstract}

The SPIRE Controller Manager is designed to be deployed on the same pod as the SPIRE Server. The manager communicates with the SPIRE Server API using a private UNIX Domain Socket within a shared volume.