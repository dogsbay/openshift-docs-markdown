{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create cluster role bindings for a custom namespace {id="network-observability-create-cluster-role-bindings-custom-namespace_{{ context }}"}

Create cluster role bindings for the Network Observability Operator service accounts when you deploy in a namespace other than the default `netobserv` namespace. {._abstract}


:::important

Do not modify the existing default bindings. They are overwritten during Operator upgrades. Create new bindings as shown.

:::


**Prerequisites**

*   The Network Observability Operator is installed.
*   You have `cluster-admin` privileges.
*   You configured `spec.namespace` in the `FlowCollector` resource to a namespace other than `netobserv`.

**Procedure**

1.  Replace `<namespace>` with the namespace you configured in `spec.namespace` of the `FlowCollector` resource.
    1.  Create the `netobserv-informers-custom` cluster role binding by running the following command:
        ```terminal
        $ oc create clusterrolebinding netobserv-informers-custom \
          --clusterrole=netobserv-informers \
          --serviceaccount=<namespace>:flowlogs-pipeline \
          --serviceaccount=<namespace>:flowlogs-pipeline-transformer
        ```
    1.  Create the `netobserv-lokiwriter-custom` cluster role binding by running the following command:
        ```terminal
        $ oc create clusterrolebinding netobserv-lokiwriter-custom \
          --clusterrole=netobserv-loki-writer \
          --serviceaccount=<namespace>:flowlogs-pipeline \
          --serviceaccount=<namespace>:flowlogs-pipeline-transformer
        ```
    1.  Create the `netobserv-hostnetwork-custom` cluster role binding by running the following command:
        ```terminal
        $ oc create clusterrolebinding netobserv-hostnetwork-custom \
          --clusterrole=netobserv-hostnetwork \
          --serviceaccount=<namespace>:flowlogs-pipeline
        ```
    1.  Create the token review cluster role binding by running the following command:
        ```terminal
        $ oc create clusterrolebinding netobserv-tokenreview-custom \
          --clusterrole=netobserv-token-review \
          --serviceaccount=<namespace>:netobserv-plugin
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