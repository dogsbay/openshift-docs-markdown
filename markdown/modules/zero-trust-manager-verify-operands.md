{%- set _mod_docs_content_type = "CONCEPT" %}
# Verify the health of the operands {id="zero-trust-manager-verify-operands_{{ context }}"}

View the status fields to verify the operational health of managed components. This information helps you confirm that the SPIRE Server, SPIRE Agent, SPIFFE CSI driver, and the SPIRE OIDC discovery provider operands are ready and functioning correctly. {._abstract}

*   To verify the operands, run the following command:
    ```terminal
    oc get ZeroTrustWorkloadIdentityManager cluster -o yaml
    ```
    ```yaml title="Example output"
    status:
      conditions:
      - lastTransitionTime: "2025-12-16T10:59:06Z"
        message: All components are ready
        reason: Ready
        status: "True"
        type: Ready
      - lastTransitionTime: "2025-12-16T10:59:06Z"
        message: All operand CRs are ready
        reason: Ready
        status: "True"
        type: OperandsAvailable
      operands:
      - kind: SpireServer
        message: Ready
        name: cluster
        ready: "true"
      - kind: SpireAgent
        message: Ready
        name: cluster
        ready: "true"
      - kind: SpiffeCSIDriver
        message: Ready
        name: cluster
        ready: "true"
      - kind: SpireOIDCDiscoveryProvider
        message: Ready
        name: cluster
        ready: "true"
       # ...
    ```

This status is reflected when all operands are healthy and stable.


:::important

The Operator adds the owner reference for the `ZeroTrustWorkloadIdentityManager` CR on the other operands' CRs. This causes the operands' resources to be deleted once the `ZeroTrustWorkloadIdentityManager` CRs are deleted.

:::