{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Node Maintenance Operator by using the CLI {id="installing-maintenance-operator-using-cli_{{ context }}"}
You can use the OpenShift CLI (`oc`) to install the Node Maintenance Operator.

You can install the Node Maintenance Operator in your own namespace or in the `openshift-operators` namespace.

To install the Operator in your own namespace, follow the steps in the procedure.

To install the Operator in the `openshift-operators` namespace, skip to step 3 of the procedure because the steps to create a new `Namespace` custom resource (CR) and an `OperatorGroup` CR are not required.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a `Namespace` CR for the Node Maintenance Operator:
    1.  Define the `Namespace` CR and save the YAML file, for example, `node-maintenance-namespace.yaml`:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: nmo-test
        ```
    1.  To create the `Namespace` CR, run the following command:
        ```terminal
        $ oc create -f node-maintenance-namespace.yaml
        ```
1.  Create an `OperatorGroup` CR:
    1.  Define the `OperatorGroup` CR and save the YAML file, for example, `node-maintenance-operator-group.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: node-maintenance-operator
          namespace: nmo-test
        ```
    1.  To create the `OperatorGroup` CR, run the following command:
        ```terminal
        $ oc create -f node-maintenance-operator-group.yaml
        ```
1.  Create a `Subscription` CR:
    1.  Define the `Subscription` CR and save the YAML file, for example, `node-maintenance-subscription.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: node-maintenance-operator
          namespace: nmo-test (1)
        spec:
          channel: stable
          InstallPlaneApproval: Automatic
          name: node-maintenance-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
          StartingCSV: node-maintenance-operator.v{{ product_version }}.0
        ```
        1.  Specify the `Namespace` where you want to install the Node Maintenance Operator.

            :::important

            To install the Node Maintenance Operator in the `openshift-operators` namespace, specify `openshift-operators` in the `Subscription` CR.
            
            :::

    1.  To create the `Subscription` CR, run the following command:
        ```terminal
        $ oc create -f node-maintenance-subscription.yaml
        ```

**Verification**

1.  Verify that the installation succeeded by inspecting the CSV resource:
    ```terminal
    $ oc get csv -n openshift-operators
    ```

```terminal title="Example output"
NAME                               DISPLAY                     VERSION   REPLACES  PHASE
node-maintenance-operator.v{{ product_version }}    Node Maintenance Operator   {{ product_version }}                Succeeded
```
1.  Verify that the Node Maintenance Operator is running:
    ```terminal
    $ oc get deploy -n openshift-operators
    ```

```terminal title="Example output"
NAME                                           READY   UP-TO-DATE   AVAILABLE   AGE
node-maintenance-operator-controller-manager   1/1     1            1           10d
```