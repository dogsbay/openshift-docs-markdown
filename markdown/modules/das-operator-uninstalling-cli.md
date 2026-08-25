{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Dynamic Accelerator Slicer Operator using the CLI {id="das-operator-uninstalling-cli_{{ context }}"}

You can uninstall the Dynamic Accelerator Slicer (DAS) Operator using the OpenShift CLI.

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have installed the OpenShift CLI (`oc`).
*   The DAS Operator is installed in your cluster.

**Procedure**

1.  List the installed operators to find the DAS Operator subscription by running the following command:
    ```terminal
    $ oc get subscriptions -n das-operator
    ```
    ```terminal title="Example output"
    NAME           PACKAGE        SOURCE             CHANNEL
    das-operator   das-operator   redhat-operators   stable
    ```
1.  Delete the subscription by running the following command:
    ```terminal
    $ oc delete subscription das-operator -n das-operator
    ```
1.  List and delete the cluster service version (CSV) by running the following commands:
    ```terminal
    $ oc get csv -n das-operator
    ```
    ```terminal
    $ oc delete csv <csv-name> -n das-operator
    ```
1.  Remove the operator group by running the following command:
    ```terminal
    $ oc delete operatorgroup das-operator -n das-operator
    ```
1.  Delete any remaining `AllocationClaim` resources by running the following command:
    ```terminal
    $ oc delete allocationclaims --all -n das-operator
    ```
1.  Remove the DAS Operator namespace by running the following command:
    ```terminal
    $ oc delete namespace das-operator
    ```

**Verification**

1.  Verify that the DAS Operator resources have been removed by running the following command:
    ```terminal
    $ oc get namespace das-operator
    ```

    The command should return an error indicating that the namespace is not found.
1.  Verify that no `AllocationClaim` custom resource definitions remain by running the following command:
    ```terminal
    $ oc get crd | grep allocationclaim
    ```

    The command should return an error indicating that no custom resource definitions are found.


    :::warning

    Uninstalling the DAS Operator removes all GPU slice allocations and might cause running workloads that depend on GPU slices to fail. Ensure that no critical workloads are using GPU slices before proceeding with the uninstallation.
    
    :::