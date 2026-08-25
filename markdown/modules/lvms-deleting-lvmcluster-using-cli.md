{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an LVMCluster CR by using the CLI {id="lvms-deleting-lvmcluster-using-cli_{{ context }}"}

You can delete an `LVMCluster` custom resource (CR) when decommissioning {{ lvms }} or reconfiguring storage by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have access to {{ product_title }} as a user with `cluster-admin` permissions.
*   You have deleted the persistent volume claims (PVCs), volume snapshots, and volume clones provisioned by {{ lvms }}. You have also deleted the applications that are using these resources.

**Procedure**

1.  Log in to the OpenShift CLI (`oc`).
1.  Delete the `LVMCluster` CR by running the following command:
    ```terminal
    $ oc delete lvmcluster <lvm_cluster_name> -n <namespace>
    ```

**Verification**

*   To verify that the `LVMCluster` CR has been deleted, run the following command:
    ```terminal
    $ oc get lvmcluster -n <namespace>
    ```
    ```terminal title="Example output"
    No resources found in openshift-lvm-storage namespace.
    ```