{%- set _mod_docs_content_type = "PROCEDURE" %}

# Resuming Operator reconciliation {id="zero-trust-manager-restart-reconciliation_{{ context }}"}

To resume Operator reconciliation after manual configuration or debugging, disable the `create-only` mode. This allows the controller to resume managing resources and applying the desired state. You can disable this mode by setting the environment variable in the subscription object. {._abstract}

**Prerequisites**

*   You have enabled `create-only` mode on the {{ zero_trust_full }}.
*   You have completed your manual configuration or debugging tasks.

**Procedure**

*   To restart reconciling the Operator-managed resources, add the environment variable `CREATE_ONLY_MODE`: `false` in the subscription object by running the following command:
    ```terminal
    $ oc -n $OPERATOR_NAMESPACE patch subscription openshift-zero-trust-workload-identity-manager --type='merge' -p '{"spec":{"config":{"env":[{"name":"CREATE_ONLY_MODE","value":"false"}]}}}'
    ```

**Verification**

*   Check the status of the `SpireServer` resource to confirm that `create-only` mode is disabled by running the following command:
    ```terminal
    $ oc get SpireServer cluster -o yaml
    ```
    ```yaml title="Example output"
    status:
     conditions:
     - lastTransitionTime: "2025-12-23T11:40:00Z"
       message: create-only mode disabled
       reason: CreateOnlyModeDisabled
       status: "False"
       type: CreateOnlyMode
    ```