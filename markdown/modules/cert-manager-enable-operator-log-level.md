{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a log level for the {{ cert_manager_operator }} {id="cert-manager-enable-operator-log-level_{{ context }}"}

To troubleshoot issues and control log volume, set the log level for the {{ cert_manager_operator }}. You can configure the verbosity of the Operator log messages to capture the specific details required for your environment. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed version 1.11.1 or later of the {{ cert_manager_operator }}.

**Procedure**

*   Update the subscription object for {{ cert_manager_operator }} to provide the verbosity level for the operator logs by running the following command:
    ```terminal
    $ oc -n cert-manager-operator patch subscription openshift-cert-manager-operator --type='merge' -p '{"spec":{"config":{"env":[{"name":"OPERATOR_LOG_LEVEL","value":"v"}]}}}'
    ```

    Replace `v` with the desired log level number. The valid values for `v` can range from `1`to `10`. The default value is `2`.

**Verification**

1.  The cert-manager Operator pod is redeployed. Verify that the log level of the {{ cert_manager_operator }} is updated by running the following command:
    ```terminal
    $ oc set env deploy/cert-manager-operator-controller-manager -n cert-manager-operator --list | grep -e OPERATOR_LOG_LEVEL -e container
    ```
    ```terminal title="Example output"
    # deployments/cert-manager-operator-controller-manager, container kube-rbac-proxy
    OPERATOR_LOG_LEVEL=9
    # deployments/cert-manager-operator-controller-manager, container cert-manager-operator
    OPERATOR_LOG_LEVEL=9
    ```
1.  Verify that the log level of the {{ cert_manager_operator }} is updated by running the `oc logs` command:
    ```terminal
    $ oc logs deploy/cert-manager-operator-controller-manager -n cert-manager-operator
    ```