{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIRE integration architecture components {id="zero-trust-manager-mesh-architecture_{{ context }}"}

Learn about the key components in the SPIRE integration architecture and how they work together to enable zero-trust workload identity and automated certificate management for secure mTLS connections in {{ SMProductName }}. {._abstract}


{{ zero_trust_full }}
:   Manages the SPIRE deployment lifecycle on {{ product_title }}, including custom resources for SPIRE Server, SPIRE Agent, and related components.


SPIRE Server
:   Acts as the certificate authority that issues SPIFFE Verifiable Identity Documents (SVIDs) to authenticated workloads.


SPIRE Agent
:   Runs as a DaemonSet on each cluster node, providing the Envoy Secret Discovery Service (SDS) API to workloads on that node.


SPIFFE CSI Driver
:   Mounts the SPIRE Agent UNIX domain socket into pods, enabling secure communication between Envoy sidecars and the SPIRE Agent.


{{ SMProductName }}
:   Manages the Istio deployment through the `servicemeshoperator3` Operator.


Istiod
:   The Istio control plane that configures Envoy proxies but delegates certificate issuance to SPIRE.


Envoy sidecar
:   The proxy injected into each workload pod that uses SPIRE-issued certificates for mTLS connections.