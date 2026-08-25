{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an add-on service using {{ cluster_manager_first }} {id="deleting-service_{{ context }}"}

You can delete an add-on service from your {{ product_title }}
{%- if openshift_rosa %}
(ROSA)
{%- endif %}
cluster by using {{ cluster_manager_first }}.

**Procedure**

1.  Navigate to the **Cluster List** page in {{ cluster_manager_url }}.
1.  Click the cluster with the installed service that you want to delete.
1.  Navigate to the **Add-ons** tab, and locate the installed service that you want to delete.
1.  From the installed service option, click the menu and select **Uninstall add-on** from the drop-down menu.
1.  You must type the name of the service that you want to delete in the confirmation message that appears.
1.  Click **Uninstall**. You are returned to the **Add-ons** tab and an uninstalling state icon is present on the service option you deleted.