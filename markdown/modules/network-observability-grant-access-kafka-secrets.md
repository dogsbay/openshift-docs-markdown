{%- set _mod_docs_content_type = "PROCEDURE" %}
# Grant access to Kafka secrets {id="network-observability-grant-access-kafka-secrets_{{ context }}"}

Grant the Network Observability Operator permission to access Kafka secrets when you use the Kafka deployment model with TLS or mTLS enabled. {._abstract}

**Prerequisites**

*   The Network Observability Operator is installed.
*   You have `cluster-admin` privileges.
*   You configured the `FlowCollector` resource with `spec.deploymentModel: Kafka` and TLS or mTLS enabled.

**Procedure**

1.  Replace `<namespace>` with the namespace configured in `spec.namespace` of the `FlowCollector` resource. The default value is `netobserv`.
    1.  If Kafka is installed in the same namespace as the Network Observability components, create the secret watcher role binding by running the following command:
        ```terminal
        $ oc create rolebinding secret-watcher \
          -n <namespace> \
          --clusterrole=netobserv-secret-watcher \
          --serviceaccount=openshift-netobserv-operator:netobserv-controller-manager
        ```
    1.  Create the secret creator role binding in the privileged namespace by running the following command:
        ```terminal
        $ oc create rolebinding secret-creator \
          -n <namespace>-privileged \
          --clusterrole=netobserv-secret-creator \
          --serviceaccount=openshift-netobserv-operator:netobserv-controller-manager
        ```
1.  If Kafka is installed in a different namespace, create the secret watcher role binding in the Kafka namespace.
    1.  Replace `<kafka_namespace>` with the namespace where Kafka is installed by running the following command:
        ```terminal
        $ oc create rolebinding secret-watcher \
          -n <kafka_namespace> \
          --clusterrole=netobserv-secret-watcher \
          --serviceaccount=openshift-netobserv-operator:netobserv-controller-manager
        ```
    1.  Create the secret creator role binding by running the following command:
        ```terminal
        $ oc create rolebinding secret-creator \
          -n <namespace> \
          --clusterrole=netobserv-secret-creator \
          --serviceaccount=openshift-netobserv-operator:netobserv-controller-manager
        ```
    1.  Create the secret creator role binding in the privileged namespace by running the following command:
        ```terminal
        $ oc create rolebinding secret-creator \
          -n <namespace>-privileged \
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