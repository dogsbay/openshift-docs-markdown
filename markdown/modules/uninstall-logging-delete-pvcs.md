{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting logging PVCs {id="uninstall-logging-delete-pvcs_{{ context }}"}

To keep persistent volume claims (PVCs) for reuse with other pods, keep the labels or PVC names that you need to reclaim the PVCs.
If you do not want to keep the PVCs, you can delete them. If you want to recover storage space, you can also delete the persistent volumes (PVs).

**Prerequisites**

*   You have administrator permissions.
*   Have access to the {{ product_title }} web console as a user with `cluster-admin` privileges.

**Procedure**

1.  Go to the **Storage** → **Persistent Volume Claims** page.
1.  Click the Options menu {{ kebab }} next to each PVC, and select **Delete Persistent Volume Claim**.