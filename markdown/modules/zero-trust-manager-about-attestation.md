{%- set _mod_docs_content_type = "CONCEPT" %}
# Attestation {id="zero-trust-manager-about-attestation_{{ context }}"}

The attestation process verifies the identity of nodes and workloads before issuing SPIFFE IDs. By comparing attributes against defined selectors, this process ensures that only legitimate entities within the trust domain receive cryptographic credentials. {._abstract}

The two main types of attestation in SPIFFE/SPIRE are:

*   Node attestation: verifies the identity of a machine or a node on a system, before a SPIRE Agent running on that node can be trusted to request identities for workloads.
*   Workload attestation: verifies the identity of an application or service running on an attested node before the SPIRE Agent on that node can provide it with a SPIFFE ID and SVID.

For more information, see [Attestation](https://spiffe.io/docs/latest/spire-about/spire-concepts/#attestation).