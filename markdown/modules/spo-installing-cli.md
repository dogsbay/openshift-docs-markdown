{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Security Profiles Operator using the CLI {id="spo-installing-cli_{{ context }}"}

You can install the {{ product_title }} Security Profiles Operator by using the command line interface.  {._abstract}

**Prerequisites**

*   You must have `cluster-admin` privileges.

**Procedure**

1.  Define a `Namespace` object:
    ```yaml title="Example namespace-object.yaml"
    apiVersion: v1
    kind: Namespace
    metadata:
        name: openshift-security-profiles
    labels:
      openshift.io/cluster-monitoring: "true"
    ```
1.  Create the `Namespace` object:
    ```terminal
    $ oc create -f namespace-object.yaml
    ```
1.  Define an `OperatorGroup` object:
    ```yaml title="Example operator-group-object.yaml"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: security-profiles-operator
      namespace: openshift-security-profiles
    ```
1.  Create the `OperatorGroup` object:
    ```terminal
    $ oc create -f operator-group-object.yaml
    ```
1.  Define a `Subscription` object:
    ```yaml title="Example subscription-object.yaml"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: security-profiles-operator-sub
      namespace: openshift-security-profiles
    spec:
      channel: release-alpha-rhel-8
      installPlanApproval: Automatic
      name: security-profiles-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```
1.  Create the `Subscription` object:
    ```terminal
    $ oc create -f subscription-object.yaml
    ```

    :::note

    If you are setting the global scheduler feature and enable `defaultNodeSelector`, you must create the namespace manually and update the annotations of the `openshift-security-profiles` namespace, or the namespace where the Security Profiles Operator was installed, with `openshift.io/node-selector: “”`. This removes the default node selector and prevents deployment failures.
    
    :::


**Verification**

1.  Verify the installation succeeded by inspecting the following CSV file:
    ```terminal
    $ oc get csv -n openshift-security-profiles
    ```
1.  Verify that the Security Profiles Operator is operational by running the following command:
    ```terminal
    $ oc get deploy -n openshift-security-profiles
    ```