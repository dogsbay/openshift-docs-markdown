{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIRE integration with {{ SMProductName }} {id="zero-trust-manager-about-spire-integration_{{ context }}"}

{{ SMProductName }} integrates with {{ zero_trust_full }} so Envoy sidecars obtain mTLS certificates from {{ spiffe_full }} instead of Istio’s built-in CA, enabling cryptographically verified workload identities. {._abstract}

SPIRE provides cryptographic workload identities based on the {{ spiffe_full }} standard. This integration enables a zero-trust security model where workload identities are cryptographically verified rather than relying on network-based authentication.

## Component overview {id="multi-mesh-component-overview_{{ context }}"}

The following table summarizes the main components in a single-cluster SPIFFE and {{ SMProductName }} integration and what each one does.

| Component | Purpose |
| --- | --- |
| **{{ zero_trust_full }}** | Manages SPIRE deployment on {{ product_title }} |
| **SPIRE Server** | Certificate Authority; issues SVIDs |
| **SPIRE Agent** | Runs on each node; provides SDS API to workloads |
| **SPIFFE CSI Driver** | Mounts SPIRE socket into pods |
| **ClusterSPIFFEID** | Registers which pods get which identities |
| **{{ SMProductName }} Operator** | Manages Istio deployment |
| **Istiod** | Istio control plane |
| **Envoy Sidecar** | Proxy in each pod; uses SPIRE for certificates |