{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIFFE {id="zero-trust-manager-about-spiffe_{{ context }}"}

Establish trust between software workloads in distributed systems with {{ spiffe_full }}. SPIFFE assigns unique IDs to workloads, allowing workloads to verify identities and communicate securely. This ensures secure authentication across dynamic environments. {._abstract}

The SPIFFE IDs are contained in the {{ svid_full }}. SVIDs are used by workloads to verify their identity to other workloads so that the workloads can communicate with each other. The two main SVID formats are:

*   X.509-SVIDs: X.509 certificates where the SPIFFE ID is embedded in the Subject Alternative Name (SAN) field.
*   JWT-SVIDs: JSON Web Tokens (JWTs) where the SPIFFE ID is included as the `sub` claim.

For more information, see [SPIFFE Overview](https://spiffe.io/docs/latest/spiffe-about/overview/).