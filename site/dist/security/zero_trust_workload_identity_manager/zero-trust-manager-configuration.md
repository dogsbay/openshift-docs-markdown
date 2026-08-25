---
title: Deploying Zero Trust Workload Identity Manager operands
---

# Deploying Zero Trust Workload Identity Manager operands {#zero-trust-manager-configuration_{{ context }}}

Deploy the {{ zero_trust_full }} operands by creating their custom resources in a specific order. Adhering to the sequence ensures the successful installation of components, such as the Security Production Identity Framework for Everyone (SPIRE) Server, SPIRE Agent, and Secure Production Identity Framework For Everyone (SPIFFE) CSI driver.

You must deploy the operands in the following sequence to ensure successful installation:

- `ZeroTrustWorkloadIdentityManager` CR
- SPIRE Server
- SPIRE Agent
- SPIFFE CSI driver
- SPIRE OIDC discovery provider
