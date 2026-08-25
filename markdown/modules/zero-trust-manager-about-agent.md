{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIRE Agent {id="zero-trust-manager-about-agent_{{ context }}"}

The SPIRE Agent performs workload attestation to ensure that workloads receive a verified identity when requesting authentication through the SPIFFE Workload API. The agent uses configured workload attestor plugins to verify these identities. {._abstract}

SPIRE and the SPIRE Agent perform node attestation via node plugins. The plugins are used to verify the identity of the node on which the agent is running. For more information, see [About the SPIRE Agent](https://spiffe.io/docs/latest/spire-about/spire-concepts/#all-about-the-agent).