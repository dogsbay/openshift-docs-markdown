{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ secrets_store_driver }} by using the CLI {id="persistent-storage-csi-secrets-store-driver-install-cli_{{ context }}"}

The {{ secrets_store_driver }} is typically installed in the namespace `openshift-cluster-csi-drivers`. This namespace is present in the cluster as part of the installation of the Cluster Storage Operator. {._abstract}

**Procedure**

1.  Create an `OperatorGroup` object by running the following command:
    ```terminal
    $ oc apply -f - <<EOF
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-cluster-csi-drivers
      namespace: openshift-cluster-csi-drivers
    spec: {}
    EOF
    ```
1.  Create a `Subscription` object by running the following command:
    ```terminal
    $ oc apply -f - <<EOF
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: secrets-store-csi-driver-operator
      namespace: openshift-cluster-csi-drivers
    spec:
      channel: stable
      installPlanApproval: Automatic
      name: secrets-store-csi-driver-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```
1.  Wait for the Operator to be up and running. You can check the Operator status by running the following command:
    ```terminal
    $ oc get csv -n openshift-cluster-csi-drivers
    ```
    ```terminal title="Example output"
    NAME    DISPLAY     VERSION         RELEASE   REPLACES   PHASE
    secrets-store-csi-driver-operator.v4.22.0-202607151755   Secrets Store CSI Driver Operator   4.22.0-202607151755                        Succeeded
    ```
1.  Create the Cluster CSI driver by running the following command:
    ```terminal
    $ oc apply -f - <<EOF
    apiVersion: operator.openshift.io/v1
    kind: ClusterCSIDriver
    metadata:
      name: secrets-store.csi.k8s.io
    spec:
      managementState: Managed
    EOF
    ```

**Verification**

*   Verify that the Operator is running:
    ```terminal
    $ oc get operator -n openshift-cluster-csi-drivers
    ```
    ```terminal title="Example output"
    NAME                                                             AGE
    secrets-store-csi-driver-operator.openshift-cluster-csi-drivers   7m55s
    ```
*   Verify that the pods are running:
    ```terminal
    $ oc get pods -n openshift-cluster-csi-drivers
    ```
    ```terminal title="Example output"
    NAME                                                 READY   STATUS    RESTARTS   AGE
    ....
    ....
    secrets-store-csi-driver-node-bhp2d                  3/3     Running   0          45s
    secrets-store-csi-driver-operator-74696fc7bc-qjrl8   1/1     Running   0          7m40s
    ```