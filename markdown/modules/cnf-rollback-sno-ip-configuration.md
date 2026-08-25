{%- set _mod_docs_content_type = "PROCEDURE" %}
# Roll back a network reconfiguration {id="cnf-rollback-sno-ip-configuration_{{ context }}"}

If you see issues after a network reconfiguration, you can roll back to an earlier network configuration. The rollback reboots the node into an earlier stateroot with the original network settings. {._abstract}

**Prerequisites**

*   You have completed a network reconfiguration that has not been finalized.
*   The `status.validNextStages` field in the `IPConfig` customer resource (CR) includes `Rollback`.
*   You have cluster administrator privileges.

**Procedure**

1.  Verify that rollback stage is available by checking the `IPConfig` CR. Run the following command:
    ```terminal
    $ oc get ipc ipconfig -o jsonpath='{.status.validNextStages}'
    ```

    Verify that the output includes `Rollback`.
1.  Check the rollback availability expiration timestamp by running the following command:
    ```terminal
    $ oc get ipc ipconfig -o jsonpath='{.status.rollbackAvailabilityExpiration}'
    ```

    :::note

    Plan your rollback before this timestamp. After this timestamp, rolling back requires manual recovery because of expired control plane or kubelet certificates in the rollback stateroot.
    
    :::

1.  Trigger the rollback by setting the stage to `Rollback` by running the following command:
    ```terminal
    $ oc patch ipc ipconfig --type merge -p '{"spec":{"stage":"Rollback"}}'
    ```

    The {{ lcao }} reboots the node into the earlier stateroot.
1.  After the node reboots, monitor the rollback progress by running the following command:
    ```terminal
    $ oc get ipc ipconfig -o yaml
    ```

    Wait for the `RollbackCompleted` condition to be set.
1.  Verify the node is using the original network configuration by running the following command:
    ```terminal
    $ oc get nodes -o wide
    ```
1.  Finalize the rollback by setting the stage to `Idle` by running the following command:
    ```terminal
    $ oc patch ipc ipconfig --type merge -p '{"spec":{"stage":"Idle"}}'
    ```