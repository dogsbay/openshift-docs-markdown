{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Self Node Remediation Operator by using the CLI {id="installing-self-node-remediation-operator-using-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to install the Self Node Remediation Operator.

You can install the Self Node Remediation Operator in your own namespace or in the `openshift-operators` namespace.

To install the Operator in your own namespace, follow the steps in the procedure.

To install the Operator in the `openshift-operators` namespace, skip to step 3 of the procedure because the steps to create a new `Namespace` custom resource (CR) and an `OperatorGroup` CR are not required.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a `Namespace` custom resource (CR) for the Self Node Remediation Operator:
    1.  Define the `Namespace` CR and save the YAML file, for example, `self-node-remediation-namespace.yaml`:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: self-node-remediation
        ```
    1.  To create the `Namespace` CR, run the following command:
        ```terminal
        $ oc create -f self-node-remediation-namespace.yaml
        ```
1.  Create an `OperatorGroup` CR:
    1.  Define the `OperatorGroup` CR and save the YAML file, for example, `self-node-remediation-operator-group.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: self-node-remediation-operator
          namespace: self-node-remediation
        ```
    1.  To create the `OperatorGroup` CR, run the following command:
        ```terminal
        $ oc create -f self-node-remediation-operator-group.yaml
        ```
1.  Create a `Subscription` CR:
    1.  Define the `Subscription` CR and save the YAML file, for example, `self-node-remediation-subscription.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
            name: self-node-remediation-operator
            namespace: self-node-remediation (1)
        spec:
            channel: stable
            installPlanApproval: Manual (2)
            name: self-node-remediation-operator
            source: redhat-operators
            sourceNamespace: openshift-marketplace
            package: self-node-remediation
        ```
        1.  Specify the `Namespace` where you want to install the Self Node Remediation Operator. To install the Self Node Remediation Operator in the `openshift-operators` namespace, specify `openshift-operators` in the `Subscription` CR.
        1.  Set the approval strategy to Manual in case your specified version is superseded by a later version in the catalog. This plan prevents an automatic upgrade to a later version and requires manual approval before the starting CSV can complete the installation.
    1.  To create the `Subscription` CR, run the following command:
        ```terminal
        $ oc create -f self-node-remediation-subscription.yaml
        ```

**Verification**

1.  Verify that the installation succeeded by inspecting the CSV resource:
    ```terminal
    $ oc get csv -n self-node-remediation
    ```
    ```terminal title="Example output"
    NAME                               DISPLAY                          VERSION   REPLACES   PHASE
    self-node-remediation.v.0.4.0      Self Node Remediation Operator   v.0.4.0              Succeeded
    ```
1.  Verify that the Self Node Remediation Operator is up and running:
    ```terminal
    $ oc get deploy -n self-node-remediation
    ```
    ```terminal title="Example output"
    NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
    self-node-remediation-controller-manager    1/1     1            1           28h
    ```
1.  Verify that the Self Node Remediation Operator created the `SelfNodeRemediationConfig` CR:
    ```terminal
    $ oc get selfnoderemediationconfig -n self-node-remediation
    ```
    ```terminal title="Example output"
    NAME                           AGE
    self-node-remediation-config   28h
    ```
1.  Verify that each self node remediation pod is scheduled and running on each worker node:
    ```terminal
    $ oc get daemonset -n self-node-remediation
    ```
    ```terminal title="Example output"
    NAME                      DESIRED  CURRENT  READY  UP-TO-DATE  AVAILABLE  NODE SELECTOR  AGE
    self-node-remediation-ds  3        3        3      3           3          <none>         28h
    ```

    :::note

    This command is unsupported for the control plane nodes.
    
    :::