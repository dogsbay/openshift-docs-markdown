{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a node to maintenance mode by using the web console {id="eco-setting-node-maintenance-web-console_{{ context }}"}

To set a node to maintenance mode, you can create a `NodeMaintenance` custom resource (CR) by using the web console.

**Prerequisites**

*   Log in as a user with `cluster-admin` privileges.
*   Install the Node Maintenance Operator from the software catalog.

**Procedure**

1.  From the **Administrator** perspective in the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Select the Node Maintenance Operator from the list of Operators.
1.  In the **Node Maintenance** tab, click **Create NodeMaintenance**.
1.  In the **Create NodeMaintenance** page, select the **Form view** or the **YAML view** to configure the `NodeMaintenance` CR.
1.  To apply the `NodeMaintenance` CR that you have configured, click **Create**.

**Verification**

In the **Node Maintenance** tab, inspect the `Status` column and verify that its status is `Succeeded`.