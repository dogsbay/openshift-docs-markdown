{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ zero_trust_full }} workflow {id="zero-trust-manager-how-it-works_{{ context }}"}

Understand the high-level workflow of {{ zero_trust_full }} to help you manage secure identities. This process relies on SPIRE components and custom resource definitions (CRDs) to validate nodes and workloads. {._abstract}

The following is a high-level workflow of the {{ zero_trust_full }} within the Red&#160;Hat OpenShift cluster.

1.  The SPIRE, SPIRE Agent, SPIFFE CSI Driver, and the SPIRE OIDC Discovery Provider operands are deployed and managed by {{ zero_trust_full }} via associated customer resource definitions (CRDs).
1.  Watches are then registered for relevant Kubernetes resources and the necessary SPIRE CRDs are applied to the cluster.
1.  The CR for the ZeroTrustWorkloadIdentityManager resource named `cluster` is deployed and managed by a controller.
1.  To deploy the SPIRE Server, SPIRE Agent, SPIFFE CSI Driver, and SPIRE OIDC Discovery Provider, you need to create a custom resource of a each certain type and name it `cluster`. The custom resource types are as follows:
    *   SPIRE Server - `SpireServer`
    *   SPIRE Agent - `SpireAgent`
    *   SPIFFE CSI Driver - `SpiffeCSIDriver`
    *   SPIRE OIDC discovery provider - `SpireOIDCDiscoveryProvider`
1.  When a node starts, the SPIRE Agent initializes, and connects to the SPIRE Server.
1.  The SPIRE Agent begins the node attestation process. The agent collects information on the node’s identity such as label name and namespace. The agent securely provides the information it gathered through the attestation to the SPIRE Server.
1.  The SPIRE Server then evaluates this information against its configured attestation policies and registration entries. If successful, the server generates an agent SVID and the Trust Bundle (CA Certificate) and securely sends this back to the SPIRE Agent.
1.  A workload starts on the node and needs a secure identity. The workload connects to the agent’s Workload API and requests a SVID.
1.  The SPIRE Agent receives the request and begins a workload attestation to gather information about the workload.
1.  After the SPIRE Agent gathers the information, the information is sent to the SPIRE Server and the server checks its configured registration entries.
1.  The SPIRE Agent receives the workload SVID and Trust Bundle and passes it on to the workload. The workload can now present their SVIDs to other SPIFFE-aware devices to communicate with them.

**Additional resources**
{._additional-resources}

*   [Registering workloads](https://spiffe.io/docs/latest/deploying/registering/)
*   [SPIFFE Concepts](https://spiffe.io/docs/latest/spiffe-about/spiffe-concepts/)
*   [SPIRE Use Cases](https://spiffe.io/docs/latest/spire-about/use-cases/)