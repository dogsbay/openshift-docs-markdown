{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Local Storage Operator by using the CLI {id="local-storage-install-cli_{{ context }}"}

Install the Local Storage Operator (LSO) to provision and manage local persistent storage volumes in your cluster using the command-line interface (CLI). {._abstract}

The LSO is not installed in {{ product_title }} by default. Use the following procedure to install and configure this Operator to enable local volumes in your cluster.

**Prerequisites**

*   Access to an `openshift-local-storage` project.
*   Access to the {{ product_title }} command-line interface (CLI).

**Procedure**

1.  Create an object YAML file to define an Operator group and subscription for the LSO, such as `openshift-local-storage.yaml`:
    ```yaml title="Example openshift-local-storage.yaml"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: local-operator-group
      namespace: openshift-local-storage
    spec:
      targetNamespaces:
        - openshift-local-storage
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: local-storage-operator
      namespace: openshift-local-storage
    spec:
      channel: stable
      installPlanApproval: Automatic
      name: local-storage-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```

    `spec.installPlanApproval` is the user approval policy for an install plan.
1.  Create the LSO object by running the following command:
    ```terminal
    $ oc apply -f openshift-local-storage.yaml
    ```

    The Operator Lifecycle Manager (OLM) is now aware of the LSO. A ClusterServiceVersion (CSV) for the Operator appears in the target namespace, and APIs provided by the Operator should be available for creation.
1.  Verify local storage installation by checking that all pods and the LSO have been created:
    1.  Check that all the required pods have been created by running the following command:
        ```terminal
        $ oc -n openshift-local-storage get pods
        ```
        ```terminal title="Example output"
        NAME                                      READY   STATUS    RESTARTS   AGE
        local-storage-operator-746bf599c9-vlt5t   1/1     Running   0          19m
        ```
    1.  Check the ClusterServiceVersion (CSV) YAML manifest to see that the LSO is available in the `openshift-local-storage` project:
        ```terminal
        $ oc get csvs -n openshift-local-storage
        ```
        ```terminal title="Example output"
        NAME                                         DISPLAY         VERSION               REPLACES   PHASE
        local-storage-operator.4.2.26-202003230335   Local Storage   4.2.26-202003230335              Succeeded
        ```

**Result**

After all checks have passed, the LSO is installed successfully.