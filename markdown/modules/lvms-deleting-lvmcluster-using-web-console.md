{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an LVMCluster CR by using the web console {id="lvms-deleting-lvmcluster-using-web-console_{{ context }}"}

You can delete an `LVMCluster` custom resource (CR) when decommissioning {{ lvms }} or reconfiguring storage by using the {{ product_title }} web console. {._abstract}

**Prerequisites**

*   You have access to {{ product_title }} as a user with `cluster-admin` permissions.
*   You have deleted the persistent volume claims (PVCs), volume snapshots, and volume clones provisioned by {{ lvms }}. You have also deleted the applications that are using these resources.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Ecosystem** -> **Installed Operators** to view all the installed Operators.
1.  Click **{{ lvms }}** in the `openshift-lvm-storage` namespace.
1.  Click the **LVMCluster** tab.
1.  From the **Actions**, select **Delete LVMCluster**.
1.  Click **Delete**.

**Verification**

*   On the `LVMCLuster` page, check that the `LVMCluster` CR has been deleted.