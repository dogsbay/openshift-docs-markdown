---
title: Zero Trust Workload Identity Manager SPIRE federation
---

# Zero Trust Workload Identity Manager SPIRE federation {#zero-trust-manager-spire-federation_{{ context }}}

Configure SPIRE federation to enable workloads in different trust domains to securely authenticate each other across clusters, cloud providers, and organizational boundaries. By establishing trust relationships between separate SPIRE deployments, you can build a zero-trust architecture that spans multiple environments without compromising security or sharing secrets.

Federation works by securely sharing trust bundles between SPIRE servers through dedicated federation endpoints. Each SPIRE deployment maintains its own trust domain and cryptographic identity, while being able to verify identities from federated trust domains. This approach enables cross-cluster communication, multi-cloud deployments, and secure integration with external partners.

Setting up SPIRE federation involves the following high-level steps:

1. Choose an authentication profile: Select either `https_spiffe` or `https_web`.
2. Configure the bundle endpoints: Each cluster exposes its trust bundle through a federation endpoint secured by the chosen authentication profile.
3. Bootstrap the initial trust: Manually fetch and configure the initial trust bundle from each remote cluster.
4. Establish federation relationships: Create `ClusterFederatedTrustDomain` resources to define which clusters trust each other.
5. Configure automatic synchronization: The SPIRE Controller Manager automatically keeps trust bundles synchronized after initial setup.
