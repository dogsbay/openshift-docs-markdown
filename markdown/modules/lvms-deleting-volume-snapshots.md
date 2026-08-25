{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting volume snapshots {id="lvms-deleting-volume-snapshots_{{ context }}"}

You can delete the volume snapshots of the persistent volume claims (PVCs).

:::important

When you delete a persistent volume claim (PVC), {{ lvms }} deletes only the PVC, but not the snapshots of the PVC.

:::


**Prerequisites**

*   You have access to {{ product_title }} as a user with `cluster-admin` permissions.
*   You have ensured that the volume snpashot that you want to delete is not in use.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Delete the volume snapshot by running the following command:
    ```terminal
    $ oc delete volumesnapshot <volume_snapshot_name> -n <namespace>
    ```

**Verification**

*   To verify that the volume snapshot is deleted, run the following command:
    ```terminal
    $ oc get volumesnapshot -n <namespace>
    ```

    The deleted volume snapshot must not be present in the output of this command.