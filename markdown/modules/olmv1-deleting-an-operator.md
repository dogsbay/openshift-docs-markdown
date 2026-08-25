{%- set _mod_docs_content_type = "PROCEDURE" %}

# Deleting an Operator {id="olmv1-deleting-an-operator_{{ context }}"}

You can delete an Operator and its custom resource definitions (CRDs) by deleting the `ClusterExtension` custom resource (CR). {._abstract}

**Prerequisites**

*   You have a catalog installed.
*   You have an Operator installed.

**Procedure**

*   Delete an Operator and its CRDs by running the following command:
    ```terminal
    $ oc delete clusterextension <operator_name>
    ```
    ```text title="Example output"
    clusterextension.olm.operatorframework.io "<operator_name>" deleted
    ```

**Verification**

*   Run the following commands to verify that your Operator and its resources were deleted:
    *   Verify the Operator is deleted by running the following command:
        ```terminal
        $ oc get clusterextensions
        ```
        ```text title="Example output"
        No resources found
        ```
    *   Verify that the Operator’s system namespace is deleted by running the following command:
        ```terminal
        $ oc get ns <operator_name>-system
        ```
        ```text title="Example output"
        Error from server (NotFound): namespaces "<operator_name>-system" not found
        ```