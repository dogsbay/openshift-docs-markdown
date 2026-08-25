{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting a persistent volume claim {id="lvms-deleting-pvc_{{ context }}"}

You can delete a persistent volume claim (PVC) when it is no longer needed to free up storage resources or when decommissioning an application by using the OpenShift CLI (`oc`). {._abstract}

**Prerequisites**

*   You have access to {{ product_title }} as a user with `cluster-admin` permissions.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Delete the PVC by running the following command:
    ```terminal
    $ oc delete pvc <pvc_name> -n <namespace>
    ```

**Verification**

*   To verify that the PVC is deleted, run the following command:
    ```terminal
    $ oc get pvc -n <namespace>
    ```

    The deleted PVC must not be present in the output of this command.