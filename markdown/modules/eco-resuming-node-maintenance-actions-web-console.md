{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resuming a bare-metal node from maintenance mode {id="eco-resuming-node-maintenance-actions-web-console_{{ context }}"}
Resume a bare-metal node from maintenance mode using the Options menu {{ kebab }} found on each node in the **Compute** -> **Nodes** list, or using the **Actions** control of the **Node Details** screen.

**Procedure**

1.  From the **Administrator** perspective of the web console, click **Compute** -> **Nodes**.
1.  You can resume the node from this screen, which makes it easier to perform actions on multiple nodes, or from the **Node Details** screen, where you can view comprehensive details of the selected node:
    *   Click the Options menu {{ kebab }} at the end of the node and select
    **Stop Maintenance**.
    *   Click the node name to open the **Node Details** screen and click
    **Actions** -> **Stop Maintenance**.
1.  Click **Stop Maintenance** in the confirmation window.

The node becomes schedulable. If it had virtual machine instances that were running on the node prior to maintenance, then they will not automatically migrate back to this node.

**Verification**

*   Navigate to the **Compute** -> **Nodes** page and verify that the corresponding node has a status of `Ready`.