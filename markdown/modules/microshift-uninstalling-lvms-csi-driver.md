{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the CSI driver implementation {id="microshift-uninstalling-lvms-csi-driver_{{ context }}"}

To remove the Container Storage Interface (CSI) integration from your cluster, uninstall the CSI driver implementation.  {._abstract}

**Prerequisites**

*   {{ microshift_short }} is installed and running.
*   The CSI driver implementation is deployed on the {{ microshift_short }} node.

**Procedure**

1.  Delete the `lvmclusters` object by running the following command:
    ```terminal
    $ oc delete -n openshift-storage lvmclusters.lvm.topolvm.io/lvms
    ```
    ```terminal title="Example output"
    lvmcluster.lvm.topolvm.io "lvms" deleted
    ```
1.  Delete the `lvms-operator` by running the following command:
    ```terminal
    $ oc delete -n openshift-storage deployment.apps/lvms-operator
    ```
    ```terminal title="Example output"
    deployment.apps "lvms-operator" deleted
    ```
1.  Delete the `topolvm-provisioner` `StorageClass` by running the following command:
    ```terminal
    $ oc delete storageclasses.storage.k8s.io/topolvm-provisioner
    ```
    ```terminal title="Example output"
    storageclass.storage.k8s.io "topolvm-provisioner" deleted
    ```