---
title: User-provided certificates for the API server
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# User-provided certificates for the API server {id="cert-types-user-provided-certificates-for-the-api-server"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-types-user-provided-certificates-for-the-api-server" %}

Review user-provided TLS certificates for the API server in {{ product_title }} to understand their purpose, location, management, and expiration for external client access.

## Purpose {id="user-provided-certificates-for-api-server-purpose_{{ context }}"}

The API server is accessible by clients external to the cluster at `api.<cluster_name>.<base_domain>`. You might want clients to access the API server at a different hostname or without the need to distribute the cluster-managed certificate authority (CA) certificates to the clients. The administrator must set a custom default certificate to be used by the API server when serving content.

## Location {id="user-provided-certificates-for-api-server-location_{{ context }}"}

The user-provided certificates must be provided in a `kubernetes.io/tls` type `Secret` in the `openshift-config` namespace. Update the API server cluster configuration, the `apiserver/cluster` resource, to enable the use of the user-provided certificate.

## Management {id="user-provided-certificates-for-api-server-management_{{ context }}"}

User-provided certificates are managed by the user.

## Expiration {id="user-provided-certificates-for-api-server-expiration_{{ context }}"}

API server client certificate expiration is less than five minutes.

## Customization {id="user-provided-certificates-for-api-server-customization_{{ context }}"}

Update the secret containing the user-managed certificate as needed.

## Additional resources {id="_additional_resources"}

*   [Adding API server certificates](/security/certificates/api-server#api-server-certificates)