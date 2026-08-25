{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the PTP Operator using the CLI {id="install-ptp-operator-cli_{{ context }}"}

As a cluster administrator, you can install the Operator by using the CLI. {._abstract}

**Prerequisites**

*   A cluster installed on bare-metal hardware with nodes that have hardware that supports PTP.
*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a namespace for the PTP Operator.
    1.  Save the following YAML in the `ptp-namespace.yaml` file:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: openshift-ptp
          annotations:
            workload.openshift.io/allowed: management
          labels:
            name: openshift-ptp
            openshift.io/cluster-monitoring: "true"
        ```
    1.  Create the `Namespace` CR:
        ```terminal
        $ oc create -f ptp-namespace.yaml
        ```
1.  Create an Operator group for the PTP Operator.
    1.  Save the following YAML in the `ptp-operatorgroup.yaml` file:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: ptp-operators
          namespace: openshift-ptp
        spec:
          targetNamespaces:
          - openshift-ptp
        ```
    1.  Create the `OperatorGroup` CR:
        ```terminal
        $ oc create -f ptp-operatorgroup.yaml
        ```
1.  Subscribe to the PTP Operator.
    1.  Save the following YAML in the `ptp-sub.yaml` file:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: ptp-operator-subscription
          namespace: openshift-ptp
        spec:
          channel: "stable"
          name: ptp-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        ```
    1.  Create the `Subscription` CR:
        ```terminal
        $ oc create -f ptp-sub.yaml
        ```
1.  To verify that the Operator is installed, enter the following command:
    ```terminal
    $ oc get csv -n openshift-ptp -o custom-columns=Name:.metadata.name,Phase:.status.phase
    ```
    ```terminal title="Example output"
    Name                         Phase
    {{ product_version }}.0-202301261535          Succeeded
    ```