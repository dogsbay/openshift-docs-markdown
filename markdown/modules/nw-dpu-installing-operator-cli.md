{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing the DPU Operator by using the CLI {id="nw-dpu-installing-operator-cli_{{ context }}"}

You can install the DPU Operator by using the CLI. You can use the DPU Operator to simplify the installation process when setting up DPU device management on host clusters. {._abstract}

As a cluster administrator, you can install the DPU Operator by using the CLI.


:::note

The CLI must be used to install the DPU Operator on the DPU cluster.

:::


**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   An account with `cluster-admin` privileges.

**Procedure**

1.  Create the `openshift-dpu-operator` namespace by entering the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-dpu-operator
      annotations:
        workload.openshift.io/allowed: management
    EOF
    ```
1.  Create an `OperatorGroup` custom resource (CR) by entering the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: dpu-operators
      namespace: openshift-dpu-operator
    spec:
      targetNamespaces:
      - openshift-dpu-operator
    EOF
    ```
1.  Create a `Subscription` CR for the DPU Operator by entering the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-dpu-operator-subscription
      namespace: openshift-dpu-operator
    spec:
      channel: stable
      name: dpu-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```

**Verification**

1.  To verify that the Operator is installed, enter the following command and then check that output shows `Succeeded` for the Operator:
    ```terminal
    $ oc get csv -n openshift-dpu-operator \
      -o custom-columns=Name:.metadata.name,Phase:.status.phase
    ```
1.  Change to the `openshift-dpu-operator` project:
    ```terminal
    $ oc project openshift-dpu-operator
    ```
1.  Verify the DPU Operator is running by entering the following command:
    ```terminal
    $ oc get pods -n openshift-dpu-operator
    ```
    ```terminal title="Example output"
    NAME                                               READY   STATUS    RESTARTS   AGE
    dpu-operator-controller-manager-6b7bbb5db8-7lvkj   2/2     Running   0          2m9s
    ```