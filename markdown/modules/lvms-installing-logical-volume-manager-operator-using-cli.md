{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ lvms }} by using the CLI {id="install-lvms-operator-cli_{{ context }}"}

You can install {{ lvms }} by using the OpenShift CLI (`oc`) to dynamically provision local storage on clusters with limited resources. {._abstract}


:::note

The default namespace for the {{ lvms }} Operator is `openshift-lvm-storage`.

:::


**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to {{ product_title }} as a user with `cluster-admin` and Operator installation permissions.

**Procedure**

1.  Create a YAML file with the configuration for creating a namespace:
    ```yaml title="Example YAML configuration for creating a namespace"
    apiVersion: v1
    kind: Namespace
    metadata:
      labels:
        openshift.io/cluster-monitoring: "true"
        pod-security.kubernetes.io/enforce: privileged
        pod-security.kubernetes.io/audit: privileged
        pod-security.kubernetes.io/warn: privileged
      name: openshift-lvm-storage
    ```
1.  Create the namespace by running the following command:
    ```terminal
    $ oc create -f <file_name>
    ```
1.  Create an `OperatorGroup` CR YAML file:
    ```yaml title="Example OperatorGroup CR"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-storage-operatorgroup
      namespace: openshift-lvm-storage
    spec:
      targetNamespaces:
      - openshift-storage
    ```
1.  Create the `OperatorGroup` CR by running the following command:
    ```terminal
    $ oc create -f <file_name> 
    ```
1.  Create a `Subscription` CR YAML file:
    ```yaml title="Example Subscription CR"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: lvms
      namespace: openshift-lvm-storage
    spec:
      installPlanApproval: Automatic
      name: lvms-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    ```
1.  Create the `Subscription` CR by running the following command:
    ```terminal
    $ oc create -f <file_name> 
    ```

**Verification**

1.  To verify that {{ lvms }} is installed, run the following command:
    ```terminal
    $ oc get csv -n openshift-lvm-storage -o custom-columns=Name:.metadata.name,Phase:.status.phase
    ```
    ```terminal title="Example output"
    Name                         Phase
    4.13.0-202301261535          Succeeded
    ```