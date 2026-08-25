{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Node Observability Operator using the CLI {id="install-node-observability-using-cli_{{ context }}"}

You can install the Node Observability Operator by using the OpenShift CLI (oc). {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (oc).
*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Confirm that the Node Observability Operator is available by running the following command:
    ```terminal
    $ oc get packagemanifests -n openshift-marketplace node-observability-operator
    ```

    ```terminal title="Example output"
    NAME                            CATALOG                AGE
    node-observability-operator     Red Hat Operators      9h
    ```
1.  Create the `node-observability-operator` namespace by running the following command:
    ```terminal
    $ oc new-project node-observability-operator
    ```
1.  Create an `OperatorGroup` object YAML file:
    ```yaml
    cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: node-observability-operator
      namespace: node-observability-operator
    spec:
      targetNamespaces: []
    EOF
    ```
1.  Create a `Subscription` object YAML file to subscribe a namespace to an Operator:
    ```yaml
    cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: node-observability-operator
      namespace: node-observability-operator
    spec:
      channel: alpha
      name: node-observability-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```

**Verification**

1.  View the install plan name by running the following command:
    ```terminal
    $ oc -n node-observability-operator get sub node-observability-operator -o yaml | yq '.status.installplan.name'
    ```

    ```terminal title="Example output"
    install-dt54w
    ```
1.  Verify the install plan status by running the following command:
    ```terminal
    $ oc -n node-observability-operator get ip <install_plan_name> -o yaml | yq '.status.phase'
    ```

    `<install_plan_name>` is the install plan name that you obtained from the output of the previous command.

    ```terminal title="Example output"
    COMPLETE
    ```
1.  Verify that the Node Observability Operator is up and running:
    ```terminal
    $ oc get deploy -n node-observability-operator
    ```

    ```terminal title="Example output"
    NAME                                            READY   UP-TO-DATE  AVAILABLE   AGE
    node-observability-operator-controller-manager  1/1     1           1           40h
    ```