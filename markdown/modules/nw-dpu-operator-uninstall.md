{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the DPU Operator {id="nw-dpu-operator-uninstall_{{ context }}"}

You can uninstall the DPU Operator from your cluster when you no longer need DPU device management, ensuring all workloads are deleted first. {._abstract}

To uninstall the DPU Operator, you must first delete any running DPU workloads. Follow this procedure to uninstall the DPU Operator.

**Prerequisites**

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have the DPU Operator installed.

**Procedure**

1.  Delete the `DpuOperatorConfig` CR by running the following command:
    ```terminal
    $ oc delete DpuOperatorConfig dpu-operator-config
    ```
1.  Delete the subscription that was used to install the DPU Operator by running the following command:
    ```terminal
    $ oc delete Subscription openshift-dpu-operator-subscription -n openshift-dpu-operator
    ```
1.  Remove the `OperatorGroup` resource that was created by running the following command:
    ```terminal
    $ oc delete OperatorGroup dpu-operators -n openshift-dpu-operator
    ```
1.  Uninstall the DPU Operator as follows:
    1.  Check the installed Operators by running the following command:
        ```terminal
        $ oc get csv -n openshift-dpu-operator
        ```

        The following example shows the output:
        ```terminal
        NAME                                DISPLAY        VERSION               REPLACES   PHASE
        dpu-operator.v4.22.0-202503130333   DPU Operator   4.22.0-202503130333              Failed
        ```
    1.  Delete the DPU Operator by running the following command:
        ```terminal
        $ oc delete csv dpu-operator.v4.22.0-202503130333 -n openshift-dpu-operator
        ```
1.  Delete the namespace that was created for the DPU Operator by running the following command:
    ```terminal
    $ oc delete namespace openshift-dpu-operator
    ```

**Verification**

1.  Verify that the DPU Operator is uninstalled by running the following command. An example of successful command output is `No resources found in openshift-dpu-operator namespace`.
    ```terminal
    $ oc get csv -n openshift-dpu-operator
    ```