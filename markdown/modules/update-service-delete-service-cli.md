{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an OpenShift Update Service application by using the CLI {id="update-service-delete-service-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to delete an OpenShift Update Service application. {._abstract}

**Procedure**

1.  Get the OpenShift Update Service application name using the namespace the OpenShift Update Service application was created in, for example, `openshift-update-service`:
    ```terminal
    $ oc get updateservice -n openshift-update-service
    ```
    ```terminal title="Example output"
    NAME      AGE
    service   6s
    ```
1.  Delete the OpenShift Update Service application using the `NAME` value from the previous step and the namespace the OpenShift Update Service application was created in, for example, `openshift-update-service`:
    ```terminal
    $ oc delete updateservice service -n openshift-update-service
    ```
    ```terminal title="Example output"
    updateservice.updateservice.operator.openshift.io "service" deleted
    ```