{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ lvms }} by using the CLI {id="lvms-unstalling-lvms-using-cli_{{ context }}"}

Uninstall {{ lvms }} when it is no longer needed or before upgrading to a different storage solution by using the OpenShift CLI (`oc`) after removing all provisioned storage resources. {._abstract}

**Prerequisites**

*   You have logged in to `oc` as a user with `cluster-admin` permissions.
*   You deleted the persistent volume claims (PVCs), volume snapshots, and volume clones provisioned by {{ lvms }}. You have also deleted the applications that are using these resources.
*   You deleted the `LVMCluster` custom resource (CR).

**Procedure**

1.  Get the `currentCSV` value for the {{ lvms }} Operator by running the following command:
    ```terminal
    $ oc get subscription.operators.coreos.com lvms-operator -n <namespace> -o yaml | grep currentCSV
    ```
    ```terminal title="Example output"
    currentCSV: lvms-operator.v4.15.3
    ```
1.  Delete the subscription by running the following command:
    ```terminal
    $ oc delete subscription.operators.coreos.com lvms-operator -n <namespace>
    ```
    ```terminal title="Example output"
    subscription.operators.coreos.com "lvms-operator" deleted
    ```
1.  Delete the CSV for the {{ lvms }} Operator in the target namespace by running the following command:
    ```terminal
    $ oc delete clusterserviceversion <currentCSV> -n <namespace>
    ```

    Replace `<currentCSV>` with the `currentCSV` value for the {{ lvms }} Operator.
    ```terminal title="Example output"
    clusterserviceversion.operators.coreos.com "lvms-operator.v4.15.3" deleted
    ```

**Verification**

*   To verify that the {{ lvms }} Operator is uninstalled, run the following command:
    ```terminal
    $ oc get csv -n <namespace>
    ```

    If the {{ lvms }} Operator was successfully uninstalled, it does not appear in the output of this command.