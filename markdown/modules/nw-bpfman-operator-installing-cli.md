{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the eBPF Manager Operator using the CLI {id="nw-bpfman-operator-installing-cli_{{ context }}"}

To manage eBPF programs across your cluster nodes, you can install the eBPF Manager Operator by using the {{ product_title }} CLI. This process involves creating a dedicated namespace and subscribing to the Operator to enable node-level networking and observability tools. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have an account with administrator privileges.

**Procedure**

1.  To create the `bpfman` namespace, enter the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        pod-security.kubernetes.io/enforce: privileged
        pod-security.kubernetes.io/enforce-version: v1.24
      name: bpfman
    EOF
    ```
1.  To create an `OperatorGroup` CR, enter the following command:
    ```terminal
    $ cat << EOF| oc create -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: bpfman-operators
      namespace: bpfman
    EOF
    ```
1.  Subscribe to the eBPF Manager Operator.
    1.  To create a `Subscription` CR for the eBPF Manager Operator, enter the following command:
        ```terminal
        $ cat << EOF| oc create -f -
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: bpfman-operator
          namespace: bpfman
        spec:
          name: bpfman-operator
          channel: alpha
          source: community-operators
          sourceNamespace: openshift-marketplace
        EOF
        ```
1.  To verify that the Operator is installed, enter the following command:
    ```terminal
    $ oc get ip -n bpfman
    ```
    ```terminal title="Example output"
    NAME            CSV                                 APPROVAL    APPROVED
    install-ppjxl   security-profiles-operator.v0.8.5   Automatic   true
    ```
1.  To verify the version of the Operator, enter the following command:

    ```terminal
    $ oc get csv -n bpfman
    ```
    ```terminal title="Example output"
    NAME                                DISPLAY                      VERSION   REPLACES                            PHASE
    bpfman-operator.v0.5.0              eBPF Manager Operator              0.5.0     bpfman-operator.v0.4.2              Succeeded
    ```