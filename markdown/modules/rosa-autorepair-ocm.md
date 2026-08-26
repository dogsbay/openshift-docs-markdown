{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring AutoRepair on a machine pool using {{ cluster_manager }} {id="rosa-autorepair-ocm_{{ context }}"}

You can configure machine pool AutoRepair for your {{ product_title }} cluster by using {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

*   You created a {{ hcp_title }} cluster.
*   You have an existing machine pool.

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Under the **Machine pools** tab, click the Options menu {{ kebab }} for the machine pool that you want to configure auto repair for.
1.  From the menu, select **Edit**.
1.  From the **Edit Machine Pool** dialog box that displays, find the **AutoRepair** option.
1.  Select or clear the box next to **AutoRepair** to enable or disable.
1.  Click **Save** to apply the change to the machine pool.

**Verification**

1.  Under the **Machine pools** tab, select **>** next to your machine pool to expand the view.
1.  Verify that your machine pool has the correct **AutoRepair** setting in the expanded view.