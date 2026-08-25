{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting volume clones {id="lvms-deleting-cloned-volumes_{{ context }}"}

You can delete volume clones.

:::important

When you delete a persistent volume claim (PVC), {{ lvms }} deletes only the source persistent volume claim (PVC) but not the clones of the PVC.

:::


**Prerequisites**

*   You have access to {{ product_title }} as a user with `cluster-admin` permissions.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Delete the cloned PVC by running the following command:
    ```terminal
    # oc delete pvc <clone_pvc_name> -n <namespace>
    ```

**Verification**

*   To verify that the volume clone is deleted, run the following command:
    ```terminal
    $ oc get pvc -n <namespace>
    ```

    The deleted volume clone must not be present in the output of this command.