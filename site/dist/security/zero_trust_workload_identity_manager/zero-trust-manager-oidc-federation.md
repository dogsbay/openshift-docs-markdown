---
title: Zero Trust Workload Identity Manager OIDC federation
---

# Zero Trust Workload Identity Manager OIDC federation {#zero-trust-manager-oidc-federation}

Ensure that your workloads can receive verifiable JSON Web Tokens (JWT-SVIDs) and allow external systems, such as cloud providers, to retrieve public keys from the discovery endpoint. Configure {{ zero_trust_full }} to act as an OpenID Connect (OIDC) provider through the SPIRE server.

The following providers are verified to work with SPIRE OIDC federation:

- Azure Entra ID
- Vault
