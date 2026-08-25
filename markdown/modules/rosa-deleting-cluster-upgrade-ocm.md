{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an upgrade with the {{ cluster_manager }} console {id="rosa-deleting-cluster-upgrade-ocm_{{ context }}"}

You can use the {{ cluster_manager }} console to delete a scheduled upgrade. {._abstract}

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Select the cluster with the scheduled upgrade.
1.  Click the **Settings** tab.
1.  In the **Update status** pane, click **Cancel this update**.
1.  Review the update details in the **Cancel update** dialog and click **Cancel this update**.

You will receive an email notification confirming that the scheduled upgrade has been canceled.