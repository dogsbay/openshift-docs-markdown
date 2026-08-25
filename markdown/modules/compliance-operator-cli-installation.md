{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Compliance Operator using the CLI {id="installing-compliance-operator-cli_{{ context }}"}

You can install the Compliance Operator by using the OpenShift CLI by creating the required namespace, Operator group, and subscription objects. {._abstract}

**Prerequisites**

*   You must have `admin` privileges.
*   You must have a `StorageClass` resource configured.

**Procedure**

1.  Define a `Namespace` object:
    ```yaml title="Example namespace-object.yaml"
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        openshift.io/cluster-monitoring: "true"
        pod-security.kubernetes.io/enforce: privileged
      name: openshift-compliance
    ```

    where:

    `metadata.labels.pod-security.kubernetes.io/enforce`
    :   Specifies the pod security label that must be set to `privileged` at the namespace level in {{ product_title }} {{ product_version }}.

1.  Create the `Namespace` object:
    ```terminal
    $ oc create -f namespace-object.yaml
    ```
1.  Define an `OperatorGroup` object:
    ```yaml title="Example operator-group-object.yaml"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: compliance-operator
      namespace: openshift-compliance
    spec:
      targetNamespaces:
      - openshift-compliance
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
      name: compliance-operator-sub
      namespace: openshift-compliance
    spec:
      channel: "stable"
      installPlanApproval: Automatic
      name: compliance-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```
1.  Create the `Subscription` object:
    ```terminal
    $ oc create -f subscription-object.yaml
    ```

    :::note

    If you are setting the global scheduler feature and enable `defaultNodeSelector`, you must create the namespace manually and update the annotations of the `openshift-compliance` namespace, or the namespace where the Compliance Operator was installed, with `openshift.io/node-selector: “”`. This removes the default node selector and prevents deployment failures.
    
    :::


**Verification**

1.  Verify the installation succeeded by inspecting the CSV file:
    ```terminal
    $ oc get csv -n openshift-compliance
    ```
1.  Verify that the Compliance Operator is up and running:
    ```terminal
    $ oc get deploy -n openshift-compliance
    ```