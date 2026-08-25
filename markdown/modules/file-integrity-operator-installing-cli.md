{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the File Integrity Operator using the CLI {id="installing-file-integrity-operator-using-cli_{{ context }}"}

Install the File Integrity Operator from the {{ oc_first }} by creating `Namespace`, `OperatorGroup`, and `Subscription` objects. {._abstract}

**Prerequisites**

*   You must have `admin` privileges.

**Procedure**

1.  Create a `Namespace` object YAML file by running:
    ```terminal
    $ oc create -f <file_name>.yaml
    ```
    ```yaml title="Example output"
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        openshift.io/cluster-monitoring: "true"
        pod-security.kubernetes.io/enforce: privileged
      name: openshift-file-integrity
    ```

    :::note

    In {{ product_title }} {{ product_version }}, the pod security label must be set to `privileged` at the namespace level.
    
    :::

1.  Create the `OperatorGroup` object YAML file:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```
    ```yaml title="Example output"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: file-integrity-operator
      namespace: openshift-file-integrity
    spec:
      targetNamespaces:
      - openshift-file-integrity
    ```
1.  Create the `Subscription` object YAML file:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```
    ```yaml title="Example output"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: file-integrity-operator
      namespace: openshift-file-integrity
    spec:
      channel: "stable"
      installPlanApproval: Automatic
      name: file-integrity-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```

**Verification**

1.  Verify the installation succeeded by inspecting the CSV file:
    ```terminal
    $ oc get csv -n openshift-file-integrity
    ```
1.  Verify that the File Integrity Operator is up and running:
    ```terminal
    $ oc get deploy -n openshift-file-integrity
    ```