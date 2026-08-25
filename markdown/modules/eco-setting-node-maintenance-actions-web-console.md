{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting a bare-metal node to maintenance mode {id="eco-setting-node-maintenance-actions-web-console_{{ context }}"}
Set a bare-metal node to maintenance mode using the Options menu {{ kebab }} found on each node in the **Compute** -> **Nodes** list, or using the **Actions** control of the **Node Details** screen.

**Procedure**

1.  From the **Administrator** perspective of the web console, click **Compute** -> **Nodes**.
1.  You can set the node to maintenance from this screen, which makes it easier to perform actions on multiple nodes, or from the **Node Details** screen, where you can view comprehensive details of the selected node:
    *   Click the Options menu {{ kebab }} at the end of the node and select **Start Maintenance**.
    *   Click the node name to open the **Node Details** screen and click
    **Actions** -> **Start Maintenance**.
1.  Click **Start Maintenance** in the confirmation window.

The node is no longer schedulable. If it had virtual machines with the `LiveMigration` eviction strategy, then it will live migrate them. All other pods and virtual machines on the node are deleted and recreated on another node.

**Verification**

*   Navigate to the **Compute** -> **Nodes** page and verify that the corresponding node has a status of `Under maintenance`.