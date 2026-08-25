{%- set _mod_docs_content_type = "CONCEPT" %}
# User-provisioned API server certificates {id="troubleshooting-certs-manual-user-provisioned_{{ context }}"}

The API server is accessible by clients that are external to the cluster at `api.<cluster_name>.<base_domain>`.
You might want clients to access the API server at a different hostname or without the need to distribute the cluster-managed certificate authority (CA) certificates to the clients.
You must set a custom default certificate to be used by the API server when serving content. {._abstract}

For more information, see "User-provided certificates for the API server" in _Security and compliance_