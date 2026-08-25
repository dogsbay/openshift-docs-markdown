{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ zero_trust_full }} features {id="ztwim_features_{{ context }}"}

## SPIRE Server and Agent telemetry {id="spire-telemetry_{{ context }}"}

SPIRE Server and Agent telemetry provide insight into the health of the SPIRE deployment. The metrics are in the format provided by the Prometheus Operator. The metrics exposed help in understanding server health & lifecycle, SPIRE component performance, attestation and SVID issuance, and plugin statistics.