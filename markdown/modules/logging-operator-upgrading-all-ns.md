{%- set _mod_docs_content_type = "PROCEDURE" %}
# Upgrading the {{ clo }} to watch all namespaces {id="logging-operator-upgrading-all-ns_{{ context }}"}

In logging 5.7 and older versions, the {{ clo }} only watches the `openshift-logging` namespace.
If you want the {{ clo }} to watch all namespaces on your cluster, you must redeploy the Operator. You can complete the following procedure to redeploy the Operator without deleting your logging components.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have administrator permissions.

**Procedure**

1.  Delete the subscription by running the following command:
    ```terminal
    $ oc -n openshift-logging delete subscription <subscription>
    ```
1.  Delete the Operator group by running the following command:
    ```terminal
    $ oc -n openshift-logging delete operatorgroup <operator_group_name>
    ```
1.  Delete the cluster service version (CSV) by running the following command:
    ```terminal
    $ oc delete clusterserviceversion cluster-logging.<version>
    ```
1.  Redeploy the {{ clo }} by following the "Installing Logging" documentation.

**Verification**

*   Check that the `targetNamespaces` field in the `OperatorGroup` resource is not present or is set to an empty string.

    To do this, run the following command and inspect the output:
    ```terminal
    $ oc get operatorgroup <operator_group_name> -o yaml
    ```
    ```yaml title="Example output"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-logging-f52cn
      namespace: openshift-logging
    spec:
      upgradeStrategy: Default
    status:
      namespaces:
      - ""
    # ...
    ```