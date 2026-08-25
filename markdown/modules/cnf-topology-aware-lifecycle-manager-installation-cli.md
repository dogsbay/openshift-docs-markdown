{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ cgu_operator_full }} by using the CLI {id="installing-topology-aware-lifecycle-manager-using-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to install the {{ cgu_operator_first }}. {._abstract}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Install the latest version of the {{ rh_rhacm }} Operator.
*   {{ cgu_operator }} requires {{ rh_rhacm }} 2.9 or later.
*   Set up a hub cluster with disconnected registry.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a `Subscription` CR:
    1.  Define the `Subscription` CR and save the YAML file, for example, `talm-subscription.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: openshift-topology-aware-lifecycle-manager-subscription
          namespace: openshift-operators
        spec:
          channel: "stable"
          name: topology-aware-lifecycle-manager
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        ```
    1.  Create the `Subscription` CR by running the following command:
        ```terminal
        $ oc create -f talm-subscription.yaml
        ```

**Verification**

1.  Verify that the installation succeeded by inspecting the CSV resource:
    ```terminal
    $ oc get csv -n openshift-operators
    ```
    ```terminal title="Example output" {minja}
    NAME                                                   DISPLAY                            VERSION               REPLACES                           PHASE
    topology-aware-lifecycle-manager.{{ product_version }}.x   Topology Aware Lifecycle Manager   {{ product_version }}.x                                      Succeeded
    ```
1.  Verify that the {{ cgu_operator }} is up and running:
    ```terminal
    $ oc get deploy -n openshift-operators
    ```
    ```terminal title="Example output"
    NAMESPACE                                          NAME                                             READY   UP-TO-DATE   AVAILABLE   AGE
    openshift-operators                                cluster-group-upgrades-controller-manager        1/1     1            1           14s
    ```