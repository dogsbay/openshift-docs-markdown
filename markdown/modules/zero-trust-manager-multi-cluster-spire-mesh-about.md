{%- set _mod_docs_content_type = "CONCEPT" %}
# Multi-cluster {{ spire_full }} integration with {{ SMProductName }} {id="zero-trust-manager-multi-cluster-spire-mesh-about_{{ context }}"}

Understand how {{ spire_full }} (SPIRE) federation integrates with multi-cluster {{ SMProductName }}. Cross-cluster mutual TLS (mTLS) lets workloads on separate clusters authenticate each other under a unified zero-trust identity framework. {._abstract}

Multi-cluster SPIRE integration extends single-cluster SPIRE capabilities to enable workloads in different clusters to authenticate each other using {{ spiffe_full }} identities. This eliminates the need for separate certificate authorities per cluster and enables true cross-cluster zero-trust architecture.

## What gets federated {id="what-gets-federated_{{ context }}"}

Federation happens at two layers, and both are required:

| Layer | What | How |
| --- | --- | --- |
| SPIRE Federation | Trust bundles | SPIRE Servers exchange bundles via `https_spiffe` profile |
| Istio Federation | Service discovery and routing | `Istiod` discovers remote endpoints via remote secrets, routes traffic through east-west gateways |