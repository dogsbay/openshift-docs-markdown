{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the CLI to install the SR-IOV Network Operator {id="install-operator-cli_{{ context }}"}

You can use the CLI to install the SR-IOV Network Operator. By using the CLI, you can deploy the Operator directly from your terminal to manage SR-IOV network devices and attachments without navigating the web console. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You have an account with `cluster-admin` privileges.
*   You installed a cluster on bare-metal hardware, and you ensured that cluster nodes have hardware that supports SR-IOV.

**Procedure**

1.  Create the `openshift-sriov-network-operator` namespace by entering the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-sriov-network-operator
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
      name: sriov-network-operators
      namespace: openshift-sriov-network-operator
    spec:
      targetNamespaces:
      - openshift-sriov-network-operator
    EOF
    ```
1.  Create a `Subscription` CR for the SR-IOV Network Operator by entering the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: sriov-network-operator-subscription
      namespace: openshift-sriov-network-operator
    spec:
      channel: stable
      name: sriov-network-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```
1.  Create an `SriovoperatorConfig` resource by entering the following command:
    ```terminal
    $ cat <<EOF | oc create -f -
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovOperatorConfig
    metadata:
      name: default
      namespace: openshift-sriov-network-operator
    spec:
      enableInjector: true
      enableOperatorWebhook: true
      logLevel: 2
      disableDrain: false
    EOF
    ```

**Verification**

*   To verify that the Operator is installed, enter the following command and then check that the output shows `Succeeded` for the Operator:
    ```terminal
    $ oc get csv -n openshift-sriov-network-operator \
      -o custom-columns=Name:.metadata.name,Phase:.status.phase
    ```