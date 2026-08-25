{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Multiarch Tuning Operator by using the CLI {id="multi-architecture-uninstalling-using-cli_{{ context }}"}

You can uninstall the Multiarch Tuning Operator by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to `oc` as a user with `cluster-admin` privileges.
*   You have deleted the `ClusterPodPlacementConfig` object.

    :::important

    You must delete the `ClusterPodPlacementConfig` object before uninstalling the Multiarch Tuning Operator. Uninstalling the Operator without deleting the `ClusterPodPlacementConfig` object leads to unexpected behavior.
    
    :::


**Procedure**

1.  Get the `Subscription` object name for the Multiarch Tuning Operator by running the following command: 
    ```terminal
    $ oc get subscription.operators.coreos.com -n <namespace>
    ```

    Replace `<namespace>` with the name of the namespace where you want to uninstall the Multiarch Tuning Operator.
    ```terminal title="Example output"
    NAME                                  PACKAGE                     SOURCE             CHANNEL
    openshift-multiarch-tuning-operator   multiarch-tuning-operator   redhat-operators   stable
    ```
1.  Get the `currentCSV` value for the Multiarch Tuning Operator by running the following command:
    ```terminal
    $ oc get subscription.operators.coreos.com <subscription_name> -n <namespace> -o yaml | grep currentCSV
    ```
    *   Replace `<subscription_name>` with the `Subscription` object name. For example, `openshift-multiarch-tuning-operator`. 
    *   Replace `<namespace>` with the name of the namespace where you want to uninstall the Multiarch Tuning Operator.
        ```terminal title="Example output"
        currentCSV: multiarch-tuning-operator.<version>
        ```
1.  Delete the `Subscription` object by running the following command:
    ```terminal
    $ oc delete subscription.operators.coreos.com <subscription_name> -n <namespace>
    ```
    *   Replace `<subscription_name>` with the `Subscription` object name. 
    *   Replace `<namespace>` with the name of the namespace where you want to uninstall the Multiarch Tuning Operator.
        ```terminal title="Example output"
        subscription.operators.coreos.com "openshift-multiarch-tuning-operator" deleted
        ```
1.  Delete the CSV for the Multiarch Tuning Operator in the target namespace by using the `currentCSV` value by running the following command:
    ```terminal
    $ oc delete clusterserviceversion <currentCSV_value> -n <namespace>
    ```
    *   Replace `<currentCSV_value>` with the `currentCSV` value for the Multiarch Tuning Operator. For example: `multiarch-tuning-operator.<version>`.
    *   Replace `<namespace>` with the name of the namespace where you want to uninstall the Multiarch Tuning Operator.
        ```terminal title="Example output"
        clusterserviceversion.operators.coreos.com "multiarch-tuning-operator.<version>" deleted
        ```

**Verification**

*   To verify that the Multiarch Tuning Operator is uninstalled, run the following command:
    ```terminal
    $ oc get csv -n <namespace>
    ```

    Replace `<namespace>` with the name of the namespace where you have uninstalled the Multiarch Tuning Operator.
    ```terminal title="Example output"
    No resources found in openshift-multiarch-tuning-operator namespace.
    ```