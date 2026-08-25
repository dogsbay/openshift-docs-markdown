{%- set _mod_docs_content_type = "PROCEDURE" %}
# Grant access to LokiStack secrets {id="network-observability-grant-access-lokistack-secrets_{{ context }}"}

Grant the Network Observability Operator permission to access the `LokiStack` secret when `LokiStack` is installed in a namespace other than `netobserv`. {._abstract}

**Prerequisites**

*   The Network Observability Operator is installed.
*   You have `cluster-admin` privileges.
*   You use the {{ loki_op }} with `LokiStack` installed in a namespace other than `netobserv`.

**Procedure**

1.  Replace `<lokistack_namespace>` with the namespace where `LokiStack` is installed and `<namespace>` with the namespace configured in `spec.namespace` of the `FlowCollector` resource.
    1.  Create the `secret-watcher` role binding in the LokiStack namespace by running the following command:
        ```terminal
        $ oc create rolebinding secret-watcher \
          -n <lokistack_namespace> \
          --clusterrole=netobserv-secret-watcher \
          --serviceaccount=openshift-netobserv-operator:netobserv-controller-manager
        ```
    1.  Create the `secret-creator` role binding by running the following command:
        ```terminal
        $ oc create rolebinding secret-creator \
          -n <namespace> \
          --clusterrole=netobserv-secret-creator \
          --serviceaccount=openshift-netobserv-operator:netobserv-controller-manager
        ```

**Verification**

1.  Check the `FlowCollector` status for errors by running the following command:
    ```terminal
    $ oc get flowcollector cluster -o jsonpath='{.status.conditions}'
    ```
1.  Verify that no conditions report permission-related errors.

    :::note

    If the `FlowCollector` status continues to show permission errors after you grant the required permissions, restart the Network Observability Operator pod for faster reconciliation:

    ```terminal
    $ oc delete pods -n openshift-netobserv-operator -l app=netobserv-operator
    ```
    
    :::