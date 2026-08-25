{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a log level for the {{ external_secrets_operator }} {id="external-secrets-enable-operator-log-level_{{ context }}"}

You can configure the log verbosity for the lifecycle manager. You must adjust this setting to troubleshoot issues related to the installation, upgrade, or configuration of the operator itself, rather than secret synchronization. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have created the `ExternalSecretsConfig` custom resource.

**Procedure**

*   Update the subscription object for the {{ external_secrets_operator }} to provide the verbosity level for the operator logs by running the following command:
    ```terminal
    $ oc -n <external_secrets_operator_namespace> patch subscription openshift-external-secrets-operator --type='merge' -p '{"spec":{"config":{"env":[{"name":"OPERATOR_LOG_LEVEL","value":"<log_level>"}]}}}'
    ```

    where:

    external_secrets_operator_namespace
    :   Specifies the namespace where the Operator is installed.


log_level
:   Specifies the level of log detail. Values range from 1-5. The default is 2.

**Verification**

1.  The External Secrets Operator pod is redeployed. Verify that the log level of the {{ external_secrets_operator }} is updated by running the following command:
    ```terminal
    $ oc set env deploy/external-secrets-operator-controller-manager -n external-secrets-operator --list | grep -e OPERATOR_LOG_LEVEL -e container
    ```

    The following example verifies that the log level of the {{ external_secrets_operator }} is updated.
    ```terminal
    # deployments/external-secrets-operator-controller-manager, container manager
    OPERATOR_LOG_LEVEL=2
    ```
1.  Verify that the log level of the {{ external_secrets_operator }} is updated by running the `oc logs` command:
    ```terminal
    $ oc logs -n external-secrets-operator -f deployments/external-secrets-operator-controller-manager -c manager
    ```