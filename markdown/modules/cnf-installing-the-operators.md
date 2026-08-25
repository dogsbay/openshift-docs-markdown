{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Operators {id="cnf-installing-the-operators_{{ context }}"}

## Installing the Performance Addon Operator {id="cnf-installing-the-performnce-addon-operator_{{ context }}"}

Install the Performance Addon Operator using the {{ product_title }} CLI.

**Procedure**

1.  Create the Performance Addon Operator namespace:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        openshift.io/cluster-monitoring: "true"
      name: openshift-performance-addon-operator
      annotations:
        workload.openshift.io/allowed: management
    spec: {}

    EOF
    ```
1.  Apply the Operator group:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: performance-addon-operator
      namespace: openshift-performance-addon-operator

    EOF
    ```
1.  Run the following command to get the `channel` value required for the next step.
    ```terminal
    $ oc get packagemanifest performance-addon-operator -n openshift-marketplace -o jsonpath='{.status.defaultChannel}'
    ```
    ```text title="Example output"
    4.6
    ```
1.  Apply the Subscription CR:
    ```terminal title="Example subscription"
    cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-performance-addon-operator-subscription
      namespace: openshift-performance-addon-operator
    spec:
      channel: "<channel>" (1)
      name: performance-addon-operator
      source: redhat-operators (2)
      sourceNamespace: openshift-marketplace
    EOF
    ```
    1.  Specify the value you obtained in the previous step for the `status.defaultChannel` parameter.
    1.  You must specify the `redhat-operators` value.

## Installing the Precision Time Protocol (PTP) Operator {id="cnf-installing-the-precision-time-protocol-operator_{{ context }}"}

Install the PTP Operator using the {{ product_title }} CLI or the web console.

**Procedure**

1.  Apply the Operator namespace:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-ptp
      annotations:
        workload.openshift.io/allowed: management
      labels:
        openshift.io/cluster-monitoring: "true"
    EOF
    ```
1.  Apply the Operator group:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: ptp-operators
      namespace: openshift-ptp
    spec:
      targetNamespaces:
        - openshift-ptp

    EOF
    ```
1.  Apply the subscription:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: ptp-operator-subscription
      namespace: openshift-ptp
    spec:
      channel: "${OC_VERSION}"
      name: ptp-operator
      source: "redhat-operators"
      sourceNamespace: openshift-marketplace
    EOF
    ```

## Applying the Stream Control Transmission Protocol (SCTP) patch {id="cnf-applying-the-stream-control-transmission-protocol-patch_{{ context }}"}

Load and enable the SCTP kernel module on worker nodes in your cluster.

**Procedure**

1.  Apply the SCTP machine config patch:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      name: load-sctp-module
      labels:
        machineconfiguration.openshift.io/role: worker-cnf
    spec:
      config:
        ignition:
          version: 3.2.0
        storage:
          files:
            - path: /etc/modprobe.d/sctp-blacklist.conf
              mode: 0644
              overwrite: true
              contents:
                source: data:,
            - path: /etc/modules-load.d/sctp-load.conf
              mode: 0644
              overwrite: true
              contents:
                source: data:,sctp
    EOF
    ```

## Installing the SR-IOV Network Operator {id="cnf-installing-the-sriov-network-operator_{{ context }}"}

Install the SR-IOV Network Operator by using the {{ product_title }} CLI or the web console.

1.  Apply the SR-IOV Operator namespace:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-sriov-network-operator
      annotations:
        workload.openshift.io/allowed: management
    EOF
    ```
1.  Apply the SR-IOV Operator group:
    ```terminal
    cat <<EOF | oc apply -f -
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
1.  Apply the SR-IOV Operator subscription:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: sriov-network-operator-subscription
      namespace: openshift-sriov-network-operator
    spec:
      channel: "${OC_VERSION}"
      name: sriov-network-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```

## Verifying your changes {id="cnf-installing-the-operators-verifying-your-changes_{{ context }}"}

Use the following command to verify the changes have been applied to the cluster:

```terminal
$ oc wait mcp/worker-cnf --for condition="updated"
```