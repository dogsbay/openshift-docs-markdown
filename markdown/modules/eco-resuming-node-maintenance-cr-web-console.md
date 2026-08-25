{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resuming a node from maintenance mode by using the web console {id="eco-resuming-node-maintenance-web-console_{{ context }}"}

To resume a node from maintenance mode, you can delete a `NodeMaintenance` custom resource (CR) by using the web console.

**Prerequisites**

*   Log in as a user with `cluster-admin` privileges.
*   Install the Node Maintenance Operator from the software catalog.

**Procedure**

1.  From the **Administrator** perspective in the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Select the Node Maintenance Operator from the list of Operators.
1.  In the **Node Maintenance** tab, select the `NodeMaintenance` CR that you want to delete.
1.  Click the Options menu {{ kebab }} at the end of the node and select **Delete NodeMaintenance**.

**Verification**

1.  In the {{ product_title }} console, click **Compute → Nodes**.
1.  Inspect the `Status` column of the node for which you deleted the `NodeMaintenance` CR and verify that its status is `Ready`.