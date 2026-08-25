{%- set _mod_docs_content_type = "PROCEDURE" %}
# Performing a forced clean-up {id="performing-a-forced-cleanup_{{ context }}"}

Perform a forced clean-up by removing all {{ lvms_first }} custom resources (CRs) when disk or node-related problems continue after standard troubleshooting, to restore proper storage functioning. {._abstract}

If the disk or node-related problems persist even after you have completed the troubleshooting procedures, you must perform a forced clean-up. A forced clean-up is used to address persistent issues and ensure the proper functioning of {{ lvms }}.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to the {{ oc_first }} as a user with `cluster-admin` permissions.
*   You have deleted all the persistent volume claims (PVCs) that were created by using {{ lvms }}.
*   You have stopped the pods that are using the PVCs that were created by using {{ lvms }}.

**Procedure**

1.  Switch to the namespace where you have installed the {{ lvms }} Operator by running the following command:
    ```terminal
    $ oc project <namespace>
    ```
1.  Check if the `LogicalVolume` custom resources are present by running the following command:
    ```terminal
    $ oc get logicalvolume
    ```
    1.  If the `LogicalVolume` CRs are present, delete them by running the following command:
        ```terminal
        $ oc delete logicalvolume <name>
        ```

        Replace `<name>` with the name of the `LogicalVolume` CR.
    1.  After deleting the `LogicalVolume` CRs, remove their finalizers by running the following command:
        ```terminal
        $ oc patch logicalvolume <name> -p '{"metadata":{"finalizers":[]}}' --type=merge
        ```

        Replace `<name>` with the name of the `LogicalVolume` CR.
1.  Check if the `LVMVolumeGroup` CRs are present by running the following command:
    ```terminal
    $ oc get lvmvolumegroup
    ```
    1.  If the `LVMVolumeGroup` CRs are present, delete them by running the following command:
        ```terminal
        $ oc delete lvmvolumegroup <name>
        ```

        Replace `<name>` with the name of the `LVMVolumeGroup` CR.
    1.  After deleting the `LVMVolumeGroup` CRs, remove their finalizers by running the following command:
        ```terminal
        $ oc patch lvmvolumegroup <name> -p '{"metadata":{"finalizers":[]}}' --type=merge
        ```

        Replace `<name>` with the name of the `LVMVolumeGroup` CR. 
1.  Delete any `LVMVolumeGroupNodeStatus` CRs by running the following command:
    ```terminal
    $ oc delete lvmvolumegroupnodestatus --all
    ```
1.  Delete the `LVMCluster` CR by running the following command:
    ```terminal
    $ oc delete lvmcluster --all
    ```
    1.  After deleting the `LVMCluster` CR, remove its finalizer by running the following command:
        ```terminal
        $ oc patch lvmcluster <name> -p '{"metadata":{"finalizers":[]}}' --type=merge
        ```

        Replace `<name>` with the name of the `LVMCluster` CR.