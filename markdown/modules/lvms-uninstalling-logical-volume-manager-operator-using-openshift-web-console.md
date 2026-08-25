{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ lvms }} by using the web console {id="lvms-unstalling-lvms-with-web-console_{{ context }}"}

Uninstall {{ lvms }} when it is no longer needed or before upgrading to a different storage solution by using the {{ product_title }} web console after removing all provisioned storage resources. {._abstract}

**Prerequisites**

*   You have access to {{ product_title }} as a user with `cluster-admin` permissions.
*   You have deleted the persistent volume claims (PVCs), volume snapshots, and volume clones provisioned by {{ lvms }}. You have also deleted the applications that are using these resources.
*   You have deleted the `LVMCluster` custom resource (CR).

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Click **Ecosystem** -> **Installed Operators**.
1.  Click **{{ lvms }}** in the `openshift-lvm-storage` namespace.
1.  Click the **Details** tab. 
1.  From the **Actions** menu, select **Uninstall Operator**.
1.  Optional: When prompted, select the **Delete all operand instances for this operator** checkbox to delete the operand instances for {{ lvms }}. 
1.  Click **Uninstall**.