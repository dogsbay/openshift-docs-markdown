{%- set _mod_docs_content_type = "PROCEDURE" %}
# Investigating a PVC stuck in the Pending state {id="investigating-a-pvc-stuck-in-the-pending-state_{{ context }}"}

Investigate persistent volume claims (PVCs) stuck in a `Pending` state to determine whether the cause is insufficient resources, network problems, mismatched storage classes, or unavailable persistent volumes (PVs). {._abstract}

A persistent volume claim (PVC) can get stuck in the `Pending` state for the following reasons:

*   Insufficient computing resources.
*   Network problems.
*   Mismatched storage class or node selector.
*   No available persistent volumes (PVs).
*   The node with the PV is in the `Not Ready` state.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the {{ oc_first }} as a user with `cluster-admin` permissions.

**Procedure**

1.  Retrieve the list of PVCs by running the following command:
    ```terminal
    $ oc get pvc
    ```
    ```terminal title="Example output"
    NAME        STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    lvms-test   Pending                                      lvms-vg1       11s
    ```
1.  Inspect the events associated with a PVC stuck in the `Pending` state by running the following command:
    ```terminal
    $ oc describe pvc <pvc_name>
    ```

    Replace `<pvc_name>` with the name of the PVC. For example, `lvms-vg1`.
    ```terminal title="Example output"
    Type     Reason              Age               From                         Message
    ----     ------              ----              ----                         -------
    Warning  ProvisioningFailed  4s (x2 over 17s)  persistentvolume-controller  storageclass.storage.k8s.io "lvms-vg1" not found
    ```