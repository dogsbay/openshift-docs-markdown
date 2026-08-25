{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ lvms }} by using the CLI {id="ztp-lvms-installing-using-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to install {{ lvms }}.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Install the latest version of the {{ rh_rhacm }} Operator.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create the `openshift-storage` namespace by running the following command:
    ```terminal
    $ oc create ns openshift-storage
    ```
1.  Create an `OperatorGroup` CR.
    1.  Define the `OperatorGroup` CR and save the YAML file, for example, `lmvs-operatorgroup.yaml`:
        ```yaml title="Example OperatorGroup CR"
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: lvms-operator-operatorgroup
          namespace: openshift-storage
          annotations:
            ran.openshift.io/ztp-deploy-wave: "2"
        spec:
          targetNamespaces:
          - openshift-storage
        ```
    1.  Create the `OperatorGroup` CR by running the following command:
        ```terminal
        $ oc create -f lmvs-operatorgroup.yaml
        ```
1.  Create a `Subscription` CR.
    1.  Define the `Subscription` CR and save the YAML file, for example, `lvms-subscription.yaml`:
        ```yaml title="Example Subscription CR" {minja}
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: lvms-operator
          namespace: openshift-storage
          annotations:
            ran.openshift.io/ztp-deploy-wave: "2"
        spec:
          channel: "stable-{{ product_version }}"
          name: lvms-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
          installPlanApproval: Manual
        ```
    1.  Create the `Subscription` CR by running the following command:
        ```terminal
        $ oc create -f lvms-subscription.yaml
        ```

**Verification**

1.  Verify that the installation succeeded by inspecting the CSV resource:
    ```terminal
    $ oc get csv -n openshift-storage
    ```
    ```terminal title="Example output" {minja}
    NAME                                                   DISPLAY                            VERSION               REPLACES                           PHASE
    lvms-operator.{{ product_version }}.x                                   LVM Storage                        {{ product_version }}x                                                   Succeeded
    ```
1.  Verify that {{ lvms }} is up and running:
    ```terminal
    $ oc get deploy -n openshift-storage
    ```
    ```terminal title="Example output"
    NAMESPACE                                          NAME                                             READY   UP-TO-DATE   AVAILABLE   AGE
    openshift-storage                                  lvms-operator                                    1/1     1            1           14s
    ```