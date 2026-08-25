{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pausing Operator reconciliation {id="zero-trust-manager-pause-reconciliation_{{ context }}"}

Pause reconciliation of the operands by enabling `create-only` mode. This setting prevents the Operator from automatically reverting your manual changes to the desired state. You can enable this mode by updating the Operator’s subscription object. {._abstract}


:::important

When `create-only` mode is disabled, the Operator overwrites the resources if any conflicts exist.

:::


**Prerequisites**

*   You have installed {{ zero_trust_full }} on your machine.
*   You have installed the SPIRE Servers, Agents, SPIFFE Container Storage Interface (CSI), and an OpenID Connect (OIDC) Discovery Provider and are in running status.

**Procedure**

*   To pause reconciling the operands resources managed by the Operator, add the environment variable `CREATE_ONLY_MODE`: `true` in the subscription object by running the following command:
    ```terminal
    $ oc -n $OPERATOR_NAMESPACE patch subscription openshift-zero-trust-workload-identity-manager --type='merge' -p '{"spec":{"config":{"env":[{"name":"CREATE_ONLY_MODE","value":"true"}]}}}'
    ```

**Verification**

*   Check the status of the `SpireServer` resource to confirm that the `create-only` mode is active. The `status` must be `true` and the `reason` must be `CreateOnlyModeEnabled`.
    ```terminal
    $ oc get SpireServer cluster -o yaml
    ```

    The following is an example that confirms that the 'create-only' mode is active.
    ```yaml
    status:
      conditions:
      - lastTransitionTime: "2025-12-23T11:36:58Z"
        message: All components are ready
        reason: Ready
        status: "True"
        type: Ready
      - lastTransitionTime: "2025-12-23T11:36:58Z"
        message: All operand CRs are ready
        reason: Ready
        status: "True"
        type: OperandsAvailable
      - lastTransitionTime: "2025-12-23T11:36:58Z"
        message: create-only mode enabled
        reason: CreateOnlyModeEnabled
        status: "True"
        type: CreateOnlyMode
    ```


:::important

The Operator updates the upgradeable condition to `false` in the `operatorCondition` resource. You might not be able to upgrade the Operator when in `create-only` mode.

:::