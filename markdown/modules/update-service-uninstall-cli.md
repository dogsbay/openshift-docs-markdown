{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the OpenShift Update Service Operator by using the CLI {id="update-service-uninstall-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to uninstall the OpenShift Update Service Operator. {._abstract}

**Prerequisites**

*   All OpenShift Update Service applications have been deleted.

**Procedure**

1.  Change to the project containing the OpenShift Update Service Operator, for example, `openshift-update-service`:
    ```terminal
    $ oc project openshift-update-service
    ```
    ```terminal title="Example output"
    Now using project "openshift-update-service" on server "https://example.com:6443".
    ```
1.  Get the name of the OpenShift Update Service Operator operator group:
    ```terminal
    $ oc get operatorgroup
    ```
    ```terminal title="Example output"
    NAME                             AGE
    openshift-update-service-fprx2   4m41s
    ```
1.  Delete the operator group, for example, `openshift-update-service-fprx2`:
    ```terminal
    $ oc delete operatorgroup openshift-update-service-fprx2
    ```
    ```terminal title="Example output"
    operatorgroup.operators.coreos.com "openshift-update-service-fprx2" deleted
    ```
1.  Get the name of the OpenShift Update Service Operator subscription:
    ```terminal
    $ oc get subscription
    ```
    ```terminal title="Example output"
    NAME                      PACKAGE                   SOURCE                        CHANNEL
    update-service-operator   update-service-operator   updateservice-index-catalog   v1
    ```
1.  Using the `Name` value from the previous step, check the current version of the subscribed OpenShift Update Service Operator in the `currentCSV` field:
    ```terminal
    $ oc get subscription update-service-operator -o yaml | grep " currentCSV"
    ```
    ```terminal title="Example output"
      currentCSV: update-service-operator.v0.0.1
    ```
1.  Delete the subscription, for example, `update-service-operator`:
    ```terminal
    $ oc delete subscription update-service-operator
    ```
    ```terminal title="Example output"
    subscription.operators.coreos.com "update-service-operator" deleted
    ```
1.  Delete the CSV for the OpenShift Update Service Operator using the `currentCSV` value from the previous step:
    ```terminal
    $ oc delete clusterserviceversion update-service-operator.v0.0.1
    ```
    ```terminal title="Example output"
    clusterserviceversion.operators.coreos.com "update-service-operator.v0.0.1" deleted
    ```